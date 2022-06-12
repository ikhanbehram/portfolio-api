import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateProjectDto } from './dto/Project.dto';
import { ProjectService } from './Project.service';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const name = file.originalname.split('.')[0];
          const fileExtName = '.' + file.originalname.split('.')[1];
          const randomName = Array(4)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          callback(null, `${name}-${randomName}${fileExtName}`);
        },
      }),
      fileFilter: (req: Request, file: any, cb: any) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
          cb(null, true);
        } else {
          cb(
            new HttpException(
              `Unsupported file type ${extname(file.originalname)}`,
              HttpStatus.BAD_REQUEST,
            ),
            false,
          );
        }
      },
    }),
  )
  createProject(
    @UploadedFile() image: Express.Multer.File,
    @Body() createProjectDto: CreateProjectDto,
    @Req() req,
  ) {
    const payload: CreateProjectDto = {
      ...createProjectDto,
      image: image.filename,
      fk_user_id: req.user.username,
    };
    return this.projectService.createProject(payload);
  }

  @Get(':userId')
  getUserAbout(@Param('userId') id: string) {
    return this.projectService.getProjects(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateAbout(@Param('id') id: number, @Body() project: CreateProjectDto) {
    return this.projectService.updateProject(id, project);
  }
  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteAbout() {}
}
