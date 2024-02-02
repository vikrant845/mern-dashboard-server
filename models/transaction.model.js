import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  buyer: {
    type: String,
  },
  amount: {
    type: Number,
    get: (val) => val / 100
  },
  productIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
}, { timestamps: true, toJSON: { getters: true } });

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;