import express from 'express';
import Product from '../models/product.model.js';

const router = express();

router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(404).json(err);
  }
});

export default router;