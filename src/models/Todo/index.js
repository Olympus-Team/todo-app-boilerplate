import Todo from './TodoModel'
import User from '../User'
/**
 * Hooks
 */

/**
 * Associations
 */
Todo.belongsTo(User, { foreignKey: 'userId' })
export default Todo
