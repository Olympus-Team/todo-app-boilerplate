import { checkTokenSetUser } from '@middleware/auth'
import { postSignUp, logout, postLogin } from '@controllers/Auth'
import { putCurrentUser, deleteCurrentUser, getCurrentUser } from '@controllers/User'
import {
  getAllTodosCurrentUser,
  getTodoById,
  postTodo,
  putTodoById,
  deleteAllTodos,
  deleteTodoById
} from '@controllers/Todo'

/**
 *
 * @param {import("express").Application} app
 */
const setupRoutes = (app) => {
  app.all('/api/*', checkTokenSetUser)

  app.post('/signUp', postSignUp)
  app.post('/logIn', postLogin)

  // User
  app.get('/api/v1/users/me', getCurrentUser)
  app.put('/api/v1/users/me', putCurrentUser)
  app.delete('/api/v1/users/me', deleteCurrentUser)
  app.post('/api/v1/users/logout', logout)

  // Todo
  app.get('/api/v1/users/me/todos', getAllTodosCurrentUser)
  app.post('/api/v1/users/me/todos', postTodo)
  app.delete('/api/v1/users/me/todos', deleteAllTodos)
  app.get('/api/v1/users/me/todos/:todoId', getTodoById)
  app.get('/api/v1/users/me/todos/:todoId', putTodoById)
  app.delete('/api/v1/users/me/todos/:todoId', deleteTodoById)
}

export default setupRoutes
