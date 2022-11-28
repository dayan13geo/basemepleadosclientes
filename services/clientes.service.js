const crypto = require('crypto');
const boom = require('@hapi/boom')
const {models} = require('./../libs/sequelize');
const { cliente } = require('../db/models/clientes.model');


class clientesService{
    constructor(){
        //this.clientes=[];
        //this.generate(10);

    }

    /*async generate(limite){
        for (let index = 0; index < limite ; index ++)
        this.clientes.push({
                id: crypto.randomUUID(),
                razonSocial: 'clientes' + index,
                nombre: 'clientes' + index,
                apellido: 'clientes' + index,
                telefono: 10 + Math.floor(Math.random()*190),
                DNI: 10 + Math.floor(Math.random()*190)

        })
    }*/

    async create(data){
        const nuevocliente = {
            id: crypto.randomUUID(),
            ...data
          };
          const salida = await models.cliente.create(nuevocliente);
    return salida;

        }

    async find(){
      const salida = await models.cliente.findAll();
      return salida;
       }

    async findOne(id){
      const cliente = await models.cliente.findByPk(id);
      if (!cliente){
         throw boom.notFound('cliente no encontrado');
       }
       return cliente;
      }


    async update(id, changes){
      const cliente = await this.findOne(id);
    const salida = await cliente.update(changes);
    return salida;
   /* const index = this.clientes.findIndex(cliente =>{
        return cliente.id === id;
      });
      if (index === -1){
        throw boom.notFound('cliente not found');
      }
      const cliente = this.clientes[index];
      this.clientes[index] = {
        ...cliente,
        ...changes
      };
      return this.clientes[index];*/
   }
   async delete(id){
    const cliente = await this.findOne(id);
    await cliente.destroy();
    return { id };
   /* const index = this.clientes.findIndex(cliente =>{
        return cliente.id === id;
      });
      if (index === -1){
        throw boom.notFound('cliente not found');
      }
      this.clientes.splice(index,1);
      return { id };*/
   }
}
module.exports=clientesService;
