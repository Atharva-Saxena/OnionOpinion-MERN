import express from 'express';
import { getFilterPreferences, saveFilterPreferences, resetFilterPreferences } from '../controllers/filterController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public route for filter options
router.get('/options', (req, res) => {
  res.json({
    dietOptions: ['vegetarian', 'non-vegetarian'],
    storageOptions: ['refrigeration', 'no-refrigeration'],
    preparationOptions: ['ready-to-eat', 'needs-cooking'],
    budgetRange: { min: 50, max: 1000, step: 50 },
    caloriesRange: { min: 100, max: 2000, step: 100 }
  });
});

// Protected routes for user preferences
router.route('/preferences')
  .get(protect, getFilterPreferences)
  .post(protect, saveFilterPreferences)
  .delete(protect, resetFilterPreferences);

export default router;