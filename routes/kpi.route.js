import express from 'express';
import KPI from '../models/kpi.model.js';

const router = express.Router();

router.get('/kpis', async (req, res) => {
  try {
    const kpis = await KPI.find();
    res.status(200).json(kpis);
  } catch (err) {
    res.status(404).json(err);
  }
});

export default router;