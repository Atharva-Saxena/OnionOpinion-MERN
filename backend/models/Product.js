import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    shelfLife: {
      type: String,
      required: true,
    },
    calories: {
      type: Number,
      required: true,
    },
    isVegetarian: {
      type: Boolean,
      required: true,
      default: true,
    },
    needsRefrigeration: {
      type: Boolean,
      required: true,
      default: false,
    },
    readyToEat: {
      type: Boolean,
      required: true,
      default: false,
    },
    storageInstructions: {
      type: String,
      required: true,
    },
    nutritionFacts: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;