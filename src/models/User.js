import { Model, DataTypes } from 'sequelize'
import sequelize from '@db'
import { hashPassword, comparePassword } from '@libs/handlePassword'
import { createJWT } from '@libs/jwt'
import _ from '@libs/lodash'
import { EXPIRED_TOKEN } from '@constants/handleMessages'
import Service from './Service'
import Todo from './Todo'

/**
 * @docs https://sequelize.org/v5/manual/models-definition.html
 */
class User extends Model {
  /// Class level method
  static validateUserToken(payload) {
    // JWT passed the payload containing ID of instance user
    return User.findOne({ where: { id: payload.id } }).then((user) => {
      /**
       * Check if have user + user have acceptTokenAfter + Issue At time < date of accept Token
       * Especially in case: User change password => Refresh token => Create new Token
       */
      if (user && user.acceptTokenAfter && payload.iat * 1000 < user.acceptTokenAfter) {
        let error = new Error(EXPIRED_TOKEN)
        error.name = EXPIRED_TOKEN
        return Promise.reject(error)
      }
      return Promise.resolve(user)
    })
  }
  /// Instance level method
  verifyPassword(inputPassword, passwordHash) {
    return comparePassword(inputPassword, passwordHash)
  }
  generateToken() {
    const expiresIn = 30 * 24 * 60 * 60 // 1 month
    const payload = _.pick(this, 'id')
    const token = createJWT(payload, expiresIn)
    // Return the bearer token + instance user
    return {
      token: `Bearer ${token}`,
      user: this
    }
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      set(val) {
        if (val && val.toLowerCase()) {
          this.setDataValue('email', val.toLowerCase())
        }
      },
      validate: {
        isEmail: {
          msg: 'Email must be valid'
        }
      }
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.VIRTUAL,
      set(val) {
        const password = String(val)
        this.setDataValue('password', password)
        this.setDataValue('passwordHash', hashPassword(password))
      },
      validate: {
        len: {
          args: [6, 128],
          msg: 'Password must be between 6 and 128 characters in length'
        }
      }
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
    }
  },
  {
    modelName: 'users',
    sequelize,
    /**
     * Exclude passwordHash attribute when handle with model User
     */
    defaultScope: {
      attributes: {
        exclude: ['password']
      }
    }
    // Now, not in use
    // getterMethods: {
    //   // Info (private).
    //   getInfo() {
    //     return {
    //       id: this.id,
    //       email: this.email,
    //       fullName: this.fullName,
    //       createdAt: this.createdAt,
    //       updatedAt: this.updatedAt,
    //     }
    //   },
    //   // Show (to any other user).
    //   showInfo() {
    //     return {
    //       id: this.id,
    //       fullName: this.fullName,
    //     }
    //   },
    // },
  }
)

/**
 * Hooks
 * @docs https://sequelize.org/v5/manual/hooks.html
 */

User.addHook('beforeUpdate', (user, option) => {
  // After user change password => Hash password again!
  if (!user.changed('passwordHash')) return
  return hashPassword(user.passwordHash)
})

/**
 * Associations
 * @docs https://sequelize.org/v5/manual/associations.html
 */
User.hasMany(Todo)
User.belongsToMany(Service, { through: 'UserService', foreignKey: 'userId', otherKey: 'serviceId' })

export default User
