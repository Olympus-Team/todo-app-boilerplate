module.exports = {
  development: {
    dialect: 'postgres',
    seederStorage: 'sequelize',
    url: process.env.DB_URL
  },
  test: {
    dialect: 'postgres',
    seederStorage: 'sequelize',
    url: process.env.DB_URL
  },
  production: {
    seederStorage: 'sequelize',
    url: process.env.DB_URL
  }
}
