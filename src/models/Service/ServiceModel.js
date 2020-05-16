import sequelize from '@db'
import { DataTypes, Model } from 'sequelize'

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

export default Service
