import Service from './ServiceModel'
import User from '../User'

/**
 * Hook
 */

/**
 * Associations
 */
Service.belongsToMany(User, { through: 'UserService', foreignKey: 'userId', otherKey: 'serviceId' })
export default Service
