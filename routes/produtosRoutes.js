const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/api', async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    res.json(response.data);
  } catch (err) {
    console.error('Erro API aberta:', err.message);
    res.status(500).json({ erro: 'Erro buscar produtos' });
  }
});

module.exports = router;
