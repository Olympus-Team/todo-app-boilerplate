import { Model, DataTypes } from 'sequelize'
import sequelize from '@db'
import User from './User'

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

/**
 * Hooks
 * @docs https://sequelize.org/v5/manual/hooks.html
 */

/**
 * Associations
 * @docs https://sequelize.org/v5/manual/associations.html
 */
Todo.belongsTo(User, {
  onDelete: 'CASCADE',
  foreignKey: {
    allowNull: false,
    name: 'todoId',
    field: 'todoId'
  }
})

export default Todo
