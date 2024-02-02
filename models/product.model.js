import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  price: {
    type: Number,
    get: (val) => val / 100
  },
  expense: {
    type: Number,
    get: (val) => val / 100
  },
  transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Transaction'
    }
  ]
}, { toJSON: { getters: true }, timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;