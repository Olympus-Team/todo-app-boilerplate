import Todo from './TodoModel'
import User from '../User'
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
