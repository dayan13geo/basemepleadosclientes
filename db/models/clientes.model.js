const { Model, DataTypes, Sequelize } = require ('sequelize');

const cliente_Table = 'cliente';

const clienteSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  },
  apellido: {
    allowNull: false,
    type: DataTypes.STRING
  },
  telefono: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  DNI: {
    allowNull: false,
    type: DataTypes.INTEGER
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
};

class cliente extends Model {
  static associate(){
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: cliente_Table,
      modelName: 'cliente',
      timestamps: false
    };
  }
}

module.exports = {cliente_Table, clienteSchema, cliente};
