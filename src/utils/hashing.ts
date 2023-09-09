import bcrypt from 'bcrypt'

export const hashingPassword = (password: string) => {
  const hash = bcrypt.hash(password, 12)
  return hash
}

export const comparePassword = (password: string, hashedPassword: string) => {
  return bcrypt.compare(password, hashedPassword)
}
