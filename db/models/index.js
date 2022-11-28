const{Empleados_Table, EmpleadosSchema , empleado} = require('./empleados.model');

function setupModels(sequelize){
  empleado.init(EmpleadosSchema, empleado.config(sequelize));
}
module.exports = setupModels;
