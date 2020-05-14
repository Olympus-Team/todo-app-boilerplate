import { User } from '@models'
import { INVALID_TOKEN, EXPIRED_TOKEN, USER_NOT_FOUND } from '@constants/handleMessages'
import { generalErrors } from '@helpers/errorHandlers'
import { verifyJWT } from '@libs/jwt'

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const checkTokenSetUser = async (req, res, next) => {
  let token = req.get('Authorization')
  if (token) {
    token = token.split(' ')[1]
    const payload = await verifyJWT(token)
    return User.validateUserToken(payload)
      .then((user) => {
        // If no user in the payload exists, respond back with a 401
        if (!user) {
          return generalErrors(res, USER_NOT_FOUND.statusCode, USER_NOT_FOUND.msg)
        }
        // Authenticate user and PASS it to next middleware
        req.user = user
        next()
      })
      .catch((err) => {
        if (err.name === EXPIRED_TOKEN) {
          return generalErrors(res, EXPIRED_TOKEN.statusCode, EXPIRED_TOKEN.msg)
        } else if (err.name === 'JsonWebTokenError') {
          return generalErrors(res, INVALID_TOKEN.statusCode, INVALID_TOKEN.msg)
        } else {
          return next(err)
          // generalErrors(res, INTERNAL_SERVER_ERROR, SOMETHING_WRONG) => Production Env
        }
      })
  } else {
    return generalErrors(res, INVALID_TOKEN.statusCode, INVALID_TOKEN.msg)
  }
}
