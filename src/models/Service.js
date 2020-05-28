import sequelize from '@db'
import { DataTypes, Model } from 'sequelize'
import User from './User'

/**
 * @docs https://sequelize.org/v5/manual/models-definition.html
 */
export class Service extends Model {}

Service.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    money: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'services'
  }
)

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
