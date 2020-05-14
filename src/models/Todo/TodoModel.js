import { DataTypes } from 'sequelize'
import sequelize from '@db'
import Todo from './TodoDetail'

Todo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  },
  {
    modelName: 'todos',
    sequelize
  }
)

export default Todo
