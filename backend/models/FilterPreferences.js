import mongoose from 'mongoose';

const filterPreferencesSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    isVegetarian: {
      type: Boolean,
      default: null,
    },
    hasRefrigeration: {
      type: Boolean,
      default: null,
    },
    readyToEat: {
      type: Boolean,
      default: null,
    },
    maxBudget: {
      type: Number,
      default: null,
    },
    maxCalories: {
      type: Number,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const FilterPreferences = mongoose.model('FilterPreferences', filterPreferencesSchema);

export default FilterPreferences;