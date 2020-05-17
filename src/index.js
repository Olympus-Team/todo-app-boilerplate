import express from 'express'
import { config } from 'dotenv'
import setupExpressLib from '@libs/express'
import setupRoutes from './routes'
import accessEnv from '@helpers/accessEnv'

import '@babel/polyfill'
config({ encoding: 'utf-8' })

async function init() {
  const PORT = accessEnv('PORT')

  const expressApp = express()

  await setupExpressLib(expressApp)

  /**
   * Routes
   */
  setupRoutes(expressApp)

  /**
   * Start server
   */
  const server = expressApp.listen(PORT, '0.0.0.0', () => {
    console.info(`Server listinging on PORT: ${PORT}`)
  })
  server.timeout = 25000 // sets timeout to 25 seconds

  return expressApp
}

const app = init()

export default async function () {
  return app
}
