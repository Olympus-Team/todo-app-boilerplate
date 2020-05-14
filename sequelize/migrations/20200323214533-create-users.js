'use strict'

module.exports = {
  /**
   * @param {import('sequelize/types').QueryInterface} queryInterface
   */
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      'users',
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        email: {
          type: DataTypes.STRING(50),
          allowNull: false,
          unique: true
        },
        passwordHash: {
          type: DataTypes.STRING,
          allowNull: false
        },
        fullName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        acceptTokenAfter: {
          type: DataTypes.DATE,
          allowNull: true
        },
        isActive: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW
        },
        deletedAt: {
          type: DataTypes.DATE,
          allowNull: true
        }
      },
      {
        charset: 'utf8'
      }
    )
  },
  /**
   * @param {import('sequelize/types').QueryInterface} queryInterface
   */
  down: (queryInterface, DataTypes) => queryInterface.dropTable('users')
}
