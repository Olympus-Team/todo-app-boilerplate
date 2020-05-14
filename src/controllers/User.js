import { User } from '@models'
import { IS_NOT_AUTHENTICATED, IS_OK } from '@constants/handleMessages'
import { generalErrors } from '@helpers/errorHandlers'

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const getCurrentUser = (req, res, next) => {
  // After login => Generate token => Pass it to request
  if (req.user) {
    return User.findByPk(req.user.id)
      .then((user) => {
        return res.status(IS_OK).json(user.toJSON())
      })
      .catch((err) => next(err))
  }
  return generalErrors(res, IS_NOT_AUTHENTICATED.statusCode, IS_NOT_AUTHENTICATED.msg)
}

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const putCurrentUser = (req, res, next) => {}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const deleteCurrentUser = (req, res, next) => {}
