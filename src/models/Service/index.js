import Service from './ServiceModel'
import User from '../User'

/**
 * Hooks
 * @docs https://sequelize.org/v5/manual/hooks.html
 */

/**
 * Associations
 * @docs https://sequelize.org/v5/manual/associations.html
 */
Service.belongsToMany(User, { through: 'UserService', foreignKey: 'userId', otherKey: 'serviceId' })
export default Service
