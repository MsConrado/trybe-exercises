const express = require('express');
const ProductModel = require('../models/productsModel');

const router = express.Router();

router.get('/', async (_req, res) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (!product) {
    return res.status(400).json({ message: 'Não possui esse produto!' });
  }

  return res.status(200).json(product);
});

router.post('/add', async (req, res) => {
  const { name, brand } = req.body;
  try {
    const newProduct = await ProductModel.add(name, brand);

    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const products = await ProductModel.exclude(req.params.id);

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  try {
    const products = await ProductModel.update(req.params.id, name, brand);

    return res.status(202).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
