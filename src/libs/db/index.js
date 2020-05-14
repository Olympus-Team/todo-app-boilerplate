import { Sequelize } from 'sequelize'

import accessEnv from '@helpers/accessEnv'

const dbURL = accessEnv('DB_URL')

const sequelize = new Sequelize(dbURL, {
  dialectOptions: {
    charset: 'utf8',
    multipleStatements: true
  },
  logging: false
})

export default sequelize
