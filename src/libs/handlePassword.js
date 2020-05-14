import bcrypt from 'bcryptjs'
import accessEnv from '@helpers/accessEnv'

const SALT_WORK_FACTORY = accessEnv('SALT_WORK_FACTORY')

const _salt = bcrypt.genSaltSync(SALT_WORK_FACTORY)

export const hashPassword = (password) => bcrypt.hashSync(password, _salt)

export const comparePassword = (inputPassword, passwordHash) => bcrypt.compare(inputPassword, passwordHash)
