import { Todo } from '@models'
import { IS_OK } from '@constants/handleMessages'

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getAllTodosCurrentUser = (req, res, next) => {
  const { limit, offset } = req.pagination()
  return Todo.findAll({ limit, offset })
    .then((todos) => {
      if (todos) return res.status(IS_OK).json(todos)
    })
    .catch((err) => next(err))
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getTodoById = (req, res, next) => {
  return Todo.findByPk(req.body.todoId).then((todo) => {
    if (todo) return 1
  })
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const postTodo = (req, res, next) => {}

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const putTodoById = (req, res, next) => {}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const deleteTodoById = (req, res, next) => {}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const deleteAllTodos = (req, res, next) => {}
