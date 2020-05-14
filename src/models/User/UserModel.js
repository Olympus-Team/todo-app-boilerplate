import { DataTypes } from 'sequelize'
import sequelize from '@db'
import User from './UserDetail'
import { hashPassword } from '@libs/handlePassword'

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

export default User
