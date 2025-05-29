const express = require('express');
const Produto = require('../models/Produto');

const router = express.Router();


router.get('/salvos', async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (err) {
    console.error('Erro produtos salvos:', err.message);
    res.status(500).json({ erro: 'Erro listar produtos' });
  }
});

router.post('/salvar', async (req, res) => {
  try {
    const novoProduto = new Produto(req.body);
    await novoProduto.save();
    res.status(201).json(novoProduto);
  } catch (err) {
    console.error(' Erro  salvar produto:', err.message);
    res.status(500).json({ erro: 'Erro salvar produto' });
  }
});

router.delete('/deletar/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const produto = await Produto.findOneAndDelete({ id: id });
    if (!produto) {
      return res.status(404).json({ erro: 'Produto não encontrado' });
    }
    res.status(200).json({ mensagem: 'Produto deletado' });
  } catch (err) {
    console.error('Erro deletar produto:', err.message);
    res.status(500).json({ erro: 'Erro deletar produto' });
  }
});


module.exports = router;
