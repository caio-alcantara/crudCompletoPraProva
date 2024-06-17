/**
 * ProdutoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async function (req, res) {
    try {
      let nome = req.body.nome;
      let descricao = req.body.descricao;
      let preco = req.body.preco;

      const produtoCriado = await Produto.create({
        nome,
        descricao,
        preco,
      }).fetch();
      return res.status(201).json(produtoCriado);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },

  find: async function (req, res) {
    try {
      const produtos = await Produto.find({});
      return res.status(200).json(produtos);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },

  findById: async function (req, res) {
    try {
      let id = req.params.id;
      const produto = await Produto.findOne({ id });
      return res.status(200).json(produto);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },

  update: async function (req, res) {
    try {
      let id = req.params.id;

      const updatedProduct = await Produto.updateOne({ id }).set(req.body);
      if (!updatedProduct) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      return res.status(200).json(updatedProduct);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },

  delete: async function (req, res) {
    try {
      let id = req.params.id;
      const deletedProduct = await Produto.destroyOne({ id });
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      return res.status(200).json(deletedProduct);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
};
