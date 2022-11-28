const { Model, DataTypes, Sequelize } = require ('sequelize');

const Empleados_Table = 'empleados';

const empleadosSchema = {
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
  sueldo: {
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

class empleado extends Model {
  static associate(){
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: Empleados_Table,
      modelName: 'empleado',
      timestamps: false
    };
  }
}

module.exports = {Empleados_Table, empleadosSchema, empleado};
