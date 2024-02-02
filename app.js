import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import kpiRouter from './routes/kpi.route.js';
import KPI from './models/kpi.model.js';
import { kpis, products, transactions } from './data/index.js';
import productRouter from './routes/product.route.js';
import transactionRouter from './routes/transaction.route.js';
import Transaction from './models/transaction.model.js';
import Product from './models/product.model.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/kpi', kpiRouter);
app.use('/product', productRouter);
app.use('/transaction', transactionRouter);

mongoose.connect(process.env.MONGODB_URL).then(async (con) => {
  // await mongoose.connection.db.dropDatabase();
  // Product.insertMany(products);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${ process.env.PORT }`);
});