import User from './UserModel'
import { hashPassword } from '@libs/handlePassword'

/**
 * Hooks
 */

User.addHook('beforeUpdate', (user, option) => {
  // After user change password => Hash password again!
  if (!user.changed('passwordHash')) return
  return hashPassword(user.passwordHash)
})

/**
 * Associations
 */

export default User
