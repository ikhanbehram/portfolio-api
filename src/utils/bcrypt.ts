import * as bcrypt from 'bcrypt';

export function encryptPassword(rawpassword: string) {
  const SALT = bcrypt.genSaltSync();
  return bcrypt.hashSync(rawpassword, SALT);
}

export function comparePassword(
  rawpassword: string,
  encryptedpassword: string,
) {
  return bcrypt.compareSync(rawpassword, encryptedpassword);
}
