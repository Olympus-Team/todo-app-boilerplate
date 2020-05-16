import { Model, DataTypes } from 'sequelize'
import sequelize from '@db'

/**
 * @docs https://sequelize.org/v5/manual/models-definition.html
 */
class Todo extends Model {}

Todo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  },
  {
    modelName: 'todos',
    sequelize
  }
)

export default Todo
