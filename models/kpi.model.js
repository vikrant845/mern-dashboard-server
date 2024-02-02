import mongoose from 'mongoose';

const daySchema = new mongoose.Schema({
  date: String,
  revenue: {
    type: Number,
    get: (val) => val / 100
  },
  expenses: {
    type: Number,
    get: (val) => val / 100
  }
}, { toJSON: { getters: true } });

const monthSchema = new mongoose.Schema({
  month: String,
  revenue: {
    type: Number,
    get: (val) => val / 100
  },
  expenses: {
    type: Number,
    get: (val) => val / 100
  },
  operationalExpenses: {
    type: Number,
    get: (val) => val / 100
  },
  nonOperationalExpenses: {
    type: Number,
    get: (val) => val / 100
  }
}, { toJSON: { getters: true } });

const kpiSchema = new mongoose.Schema({
  totalProfit: {
    type: Number,
    get: (val) => val / 100
  },
  totalRevenue: {
    type: Number,
    get: (val) => val / 100
  },
  totalExpenses: {
    type: Number,
    get: (val) => val / 100
  },
  expensesByCategory: {
    type: Map,
    of: {
      type: Number,
      get: (val) => val / 100
    }
  },
  monthlyData: [monthSchema],
  dailyData: [daySchema]
}, { timestamps: true, toJSON: { getters: true } });

const KPI = mongoose.model('KPI', kpiSchema);

export default KPI;