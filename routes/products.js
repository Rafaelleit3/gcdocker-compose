const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

router.post('/add', async (req, res) => {
  const { name, price } = req.body;
  const newProduct = await Product.create({ name, price });
  res.status(201).send('Product added');
});

router.put('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const product = await Product.findByPk(id);
  if (product) {
    product.name = name;
    product.price = price;
    await product.save();
    res.send('Product updated');
  } else {
    res.status(404).send('Product not found');
  }
});

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);
  if (product) {
    await product.destroy();
    res.send('Product deleted');
  } else {
    res.status(404).send('Product not found');
  }
});

module.exports = router;
