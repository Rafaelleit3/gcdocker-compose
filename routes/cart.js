const express = require('express');
const router = express.Router();

let cart = [];

router.post('/add', (req, res) => {
  const product = req.body;
  if (!product.id) {
    product.id = cart.length ? cart[cart.length - 1].id + 1 : 1;
  }
  cart.push(product);
  res.status(201).send('Product added to cart');
});

router.delete('/remove/:id', (req, res) => {
  const { id } = req.params;
  cart = cart.filter(product => product.id != id);
  res.send('Product removed from cart');
});

router.delete('/clear', (req, res) => {
  cart = [];
  res.send('Cart cleared');
});

router.get('/', (req, res) => {
  res.json(cart);
});

module.exports = router;
