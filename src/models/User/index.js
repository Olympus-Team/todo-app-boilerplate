import User from './UserModel'
import { hashPassword } from '@libs/handlePassword'
import Todo from '../Todo'
import Service from '../Service'

/**
 * Hooks
 * @docs https://sequelize.org/v5/manual/hooks.html
 */

User.addHook('beforeUpdate', (user, option) => {
  // After user change password => Hash password again!
  if (!user.changed('passwordHash')) return
  return hashPassword(user.passwordHash)
})

/**
 * Associations
 * @docs https://sequelize.org/v5/manual/associations.html
 */
User.hasMany(Todo, { foreignKey: 'userId' })
User.belongsToMany(Service, { through: 'UserService', foreignKey: 'userId', otherKey: 'serviceId' })

export default User
