import FilterPreferences from '../models/FilterPreferences.js';
import User from '../models/User.js';

// @desc    Get user filter preferences
// @route   GET /api/filters/preferences
// @access  Private
export const getFilterPreferences = async (req, res) => {
  try {
    // First check if preferences exist in FilterPreferences collection
    let preferences = await FilterPreferences.findOne({ user: req.user._id });

    // If not found, check user model
    if (!preferences) {
      const user = await User.findById(req.user._id);
      if (user && user.preferences) {
        preferences = user.preferences;
      } else {
        // Return default preferences if none found
        preferences = {
          isVegetarian: null,
          hasRefrigeration: null,
          readyToEat: null,
          maxBudget: null,
          maxCalories: null,
        };
      }
    }

    res.json(preferences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Save user filter preferences
// @route   POST /api/filters/preferences
// @access  Private
export const saveFilterPreferences = async (req, res) => {
  try {
    const { isVegetarian, hasRefrigeration, readyToEat, maxBudget, maxCalories } = req.body;

    // Find existing preferences or create new
    let preferences = await FilterPreferences.findOne({ user: req.user._id });

    if (preferences) {
      // Update existing preferences
      preferences.isVegetarian = isVegetarian !== undefined ? isVegetarian : preferences.isVegetarian;
      preferences.hasRefrigeration = hasRefrigeration !== undefined ? hasRefrigeration : preferences.hasRefrigeration;
      preferences.readyToEat = readyToEat !== undefined ? readyToEat : preferences.readyToEat;
      preferences.maxBudget = maxBudget !== undefined ? maxBudget : preferences.maxBudget;
      preferences.maxCalories = maxCalories !== undefined ? maxCalories : preferences.maxCalories;
    } else {
      // Create new preferences
      preferences = new FilterPreferences({
        user: req.user._id,
        isVegetarian,
        hasRefrigeration,
        readyToEat,
        maxBudget,
        maxCalories,
      });
    }

    // Save preferences
    const savedPreferences = await preferences.save();

    // Also update user model preferences
    await User.findByIdAndUpdate(req.user._id, {
      preferences: {
        isVegetarian: savedPreferences.isVegetarian,
        hasRefrigeration: savedPreferences.hasRefrigeration,
        readyToEat: savedPreferences.readyToEat,
        maxBudget: savedPreferences.maxBudget,
        maxCalories: savedPreferences.maxCalories,
      },
    });

    res.json(savedPreferences);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Reset user filter preferences
// @route   DELETE /api/filters/preferences
// @access  Private
export const resetFilterPreferences = async (req, res) => {
  try {
    // Remove from FilterPreferences collection
    await FilterPreferences.findOneAndDelete({ user: req.user._id });

    // Reset in user model
    await User.findByIdAndUpdate(req.user._id, {
      preferences: {
        isVegetarian: null,
        hasRefrigeration: null,
        readyToEat: null,
        maxBudget: null,
        maxCalories: null,
      },
    });

    res.json({ message: 'Filter preferences reset successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};