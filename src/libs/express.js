import bodyParser from 'body-parser'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import accessEnv from '@helpers/accessEnv'

import pagination from '@middleware/pagination'
import errorHandler from '@middleware/errorHandler'

/**
 *
 * @param {import('express').Application} app
 */
export default async function (app) {
  const NODE_ENV = accessEnv('NODE_ENV')
  // Body parser
  app.use(
    bodyParser.json({
      limit: '5mb',
      // If the request is routed to our /.../... endpoint, we add
      // the request body buffer to a new property called `rawBody` so we can
      // calculate the checksum to verify if the request is authentic.
      verify(req, res, buf) {
        if (req.originalUrl.startsWith('/.../...')) {
          req.rawBody = buf.toString()
        }
      }
    })
  )
  app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }))
  if (NODE_ENV === 'develop') {
    app.use(morgan('combined'))
  }
  app.use(helmet())
  app.disable('x-powered-by')
  app.use(pagination)
  app.use(cors())

  errorHandler(app)
}
