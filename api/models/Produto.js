/**
 * Produto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nome: {
      type: 'string',
      columnName: 'nome',
      allowNull: false,
    },
    descricao: {
      type: 'string',
      columnName: 'descricao',
      allowNull: true,
      defaultsTo: 'Clique em editar para adicionar uma bio!',
    },
    preco: {
      type: 'number',
      columnName: 'preco',
      allowNull: false,
    }
  },
};

