import {
  NOT_FOUND,
  UNPROCESSABLE_ENTITY,
  UNAUTHORIZED,
  CONFLICT,
  FORBIDDEN,
  INTERNAL_SERVER_ERROR,
  OK
} from 'http-status-codes'

// Server errors
export const DEFAULT = {
  msg: `${INTERNAL_SERVER_ERROR} - Server error`,
  statusCode: INTERNAL_SERVER_ERROR
}
export const SOMETHING_WRONG = {
  msg: `${INTERNAL_SERVER_ERROR} - Oops! Somthing went wrong!`,
  statusCode: INTERNAL_SERVER_ERROR
}

// Tokens
export const MISSING_TOKEN = {
  msg: `${UNPROCESSABLE_ENTITY} - Missing token`,
  statusCode: UNPROCESSABLE_ENTITY
}
export const REVOKED_TOKEN = {
  msg: `${UNAUTHORIZED} - Revoked token`,
  statusCode: UNAUTHORIZED
}
export const INVALID_TOKEN = {
  msg: `${UNAUTHORIZED} - Invalid token`,
  statusCode: UNAUTHORIZED
}
export const EXPIRED_TOKEN = {
  msg: `${UNAUTHORIZED} - Expired token`,
  statusCode: UNAUTHORIZED
}

// Invalid user inputs
export const INVALID_INPUT = {
  msg: `${UNPROCESSABLE_ENTITY} - Invalid input`,
  statusCode: UNPROCESSABLE_ENTITY
}
export const MISSING_USERNAME = {
  msg: `${UNPROCESSABLE_ENTITY} - Missing username`,
  statusCode: UNPROCESSABLE_ENTITY
}
export const MISSING_EMAIL = {
  msg: `${UNPROCESSABLE_ENTITY} - Missing email`,
  statusCode: UNPROCESSABLE_ENTITY
}
export const MISSING_PASSWORD = {
  msg: `${UNPROCESSABLE_ENTITY} - Missing password`,
  statusCode: UNPROCESSABLE_ENTITY
}
export const MISSING_FIELD = {
  msg: `${UNPROCESSABLE_ENTITY} - Missing field`,
  statusCode: UNPROCESSABLE_ENTITY
}

// Not found
export const RESOURCE_NOT_FOUND = {
  msg: `${NOT_FOUND} - Resource not found`,
  statusCode: NOT_FOUND
}
export const USER_NOT_FOUND = {
  msg: `${NOT_FOUND} - User not found`,
  statusCode: NOT_FOUND
}
export const EMAIL_NOT_FOUND = {
  msg: `${NOT_FOUND} - Email not found`,
  statusCode: NOT_FOUND
}

// Conflicts
export const EMAIL_EXISTS = {
  msg: `${CONFLICT} - Email exists`,
  statusCode: CONFLICT
}
export const INVALID_LOGIN = {
  msg: `${UNAUTHORIZED}- Invalid login`,
  statusCode: UNAUTHORIZED
}

// Authentication & authorization
export const INCORRECT_CREDENTIALS = {
  msg: `${UNAUTHORIZED} - Incorrect email or password`,
  statusCode: UNAUTHORIZED
}
export const IS_NOT_AUTHENTICATED = {
  msg: `${UNAUTHORIZED} - Not authenticated`,
  statusCode: UNAUTHORIZED
}
export const UNVERIFIED_EMAIL = {
  msg: `${UNAUTHORIZED} - Unverified email`,
  statusCode: UNAUTHORIZED
}
export const INVALID_API_KEY_SECRET = {
  msg: `${UNAUTHORIZED} - Invalid api key secret`,
  statusCode: UNAUTHORIZED
}
export const INSUFFICIENT_PERMISSION = {
  msg: `${FORBIDDEN} Insufficient permission`,
  statusCode: FORBIDDEN
}

export const IS_OK = OK
