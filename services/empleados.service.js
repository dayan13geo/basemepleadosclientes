const crypto = require('crypto');
const boom = require('@hapi/boom')
const {models} = require('./../libs/sequelize')

class EmpleadosService{

    constructor(){
       // this.empleados=[];
      //  this.generate(10);

    }

   /*async generate(limite){
        for (let index = 0; index < limite ; index ++)
        this.empleados.push({
                id: crypto.randomUUID(),
                nombre: 'empleados' + index,
                apellido: 'empleados' + index,
                telefono: 10 + Math.floor(Math.random()*190),
                sueldo: 10 + Math.floor(Math.random()*190)
        })

       }*/

   async create(data){
    const nuevoEmpleado = {
        id: crypto.randomUUID(),
        ...data
      };

    const salida = await models.empleado.create(nuevoEmpleado);
    return salida;


    }

    async find(){
      const salida = await models.empleado.findAll();
      return salida;
   }

  async findOne(id){
    const empleado = await models.empleado.findByPk(id);
    if (!empleado){
       throw boom.notFound('empleado no encontrado');
     }
     return empleado;
   }

   async update(id, changes){
    const empleado = await this.findOne(id);
    const salida = await empleado.update(changes);
    return salida;
   /* const index = this.empleados.findIndex(empleado =>{
        return empleado.id === id;
      });
      if (index === -1){
        throw boom.notFound('empleado not found');
      }
      const empleado = this.empleados[index];
      this.empleados[index] = {
        ...empleado,
        ...changes
      };
      return this.empleados[index];**/
   }
   async delete(id){
     const empleado = await this.findOne(id);
    await empleado.destroy();
    return { id };

    /*const index = this.empleados.findIndex(empleado =>{
        return empleado.id === id;
      });
      if (index === -1){
        throw boom.notFound('empleado not found');
      }
      this.empleados.splice(index,1);
      return { id };*/
   }
  }

  module.exports= EmpleadosService;

