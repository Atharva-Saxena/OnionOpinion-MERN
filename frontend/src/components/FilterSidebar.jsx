import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterPreference, resetFilters } from '../redux/actions/filterActions';

export default function FilterSidebar() {
  const dispatch = useDispatch();
  const { preferences } = useSelector(state => state.filters);
  
  const [localPreferences, setLocalPreferences] = useState({
    isVegetarian: preferences.isVegetarian,
    hasRefrigeration: preferences.hasRefrigeration,
    readyToEat: preferences.readyToEat,
    maxBudget: preferences.maxBudget || '',
    maxCalories: preferences.maxCalories || ''
  });

  const handleBooleanChange = (e) => {
    const { name, value } = e.target;
    const boolValue = value === 'true';
    
    setLocalPreferences({
      ...localPreferences,
      [name]: boolValue
    });
    
    dispatch(setFilterPreference(name, boolValue));
  };

  const handleRangeChange = (e) => {
    const { name, value } = e.target;
    const numValue = value === '' ? null : Number(value);
    
    setLocalPreferences({
      ...localPreferences,
      [name]: value
    });
    
    dispatch(setFilterPreference(name, numValue));
  };

  const handleReset = () => {
    setLocalPreferences({
      isVegetarian: null,
      hasRefrigeration: null,
      readyToEat: null,
      maxBudget: '',
      maxCalories: ''
    });
    
    dispatch(resetFilters());
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4 text-onion-dark">Filter Options</h2>
      
      {/* Diet Type */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Diet Preference</label>
        <div className="flex gap-2">
          <button
            className={`px-3 py-1 rounded ${
              localPreferences.isVegetarian === true
                ? 'bg-onion-dark text-white'
                : 'bg-gray-100'
            }`}
            name="isVegetarian"
            value="true"
            onClick={handleBooleanChange}
          >
            Vegetarian
          </button>
          <button
            className={`px-3 py-1 rounded ${
              localPreferences.isVegetarian === false
                ? 'bg-onion-dark text-white'
                : 'bg-gray-100'
            }`}
            name="isVegetarian"
            value="false"
            onClick={handleBooleanChange}
          >
            Non-Veg
          </button>
        </div>
      </div>
      
      {/* Storage */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Storage Available</label>
        <div className="flex gap-2">
          <button
            className={`px-3 py-1 rounded ${
              localPreferences.hasRefrigeration === true
                ? 'bg-onion-dark text-white'
                : 'bg-gray-100'
            }`}
            name="hasRefrigeration"
            value="true"
            onClick={handleBooleanChange}
          >
            Refrigerator
          </button>
          <button
            className={`px-3 py-1 rounded ${
              localPreferences.hasRefrigeration === false
                ? 'bg-onion-dark text-white'
                : 'bg-gray-100'
            }`}
            name="hasRefrigeration"
            value="false"
            onClick={handleBooleanChange}
          >
            No Refrigerator
          </button>
        </div>
      </div>
      
      {/* Ready to Eat */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Preparation</label>
        <div className="flex gap-2">
          <button
            className={`px-3 py-1 rounded ${
              localPreferences.readyToEat === true
                ? 'bg-onion-dark text-white'
                : 'bg-gray-100'
            }`}
            name="readyToEat"
            value="true"
            onClick={handleBooleanChange}
          >
            Ready to Eat
          </button>
          <button
            className={`px-3 py-1 rounded ${
              localPreferences.readyToEat === false
                ? 'bg-onion-dark text-white'
                : 'bg-gray-100'
            }`}
            name="readyToEat"
            value="false"
            onClick={handleBooleanChange}
          >
            Needs Cooking
          </button>
        </div>
      </div>
      
      {/* Budget */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Max Budget (₹): {localPreferences.maxBudget}
        </label>
        <input
          type="range"
          name="maxBudget"
          min="50"
          max="1000"
          step="50"
          value={localPreferences.maxBudget || 1000}
          onChange={handleRangeChange}
          className="w-full accent-onion-dark"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>₹50</span>
          <span>₹1000</span>
        </div>
      </div>
      
      {/* Calories */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Max Calories: {localPreferences.maxCalories}
        </label>
        <input
          type="range"
          name="maxCalories"
          min="100"
          max="2000"
          step="100"
          value={localPreferences.maxCalories || 2000}
          onChange={handleRangeChange}
          className="w-full accent-onion-dark"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>100</span>
          <span>2000</span>
        </div>
      </div>
      
      {/* Reset Button */}
      <button
        onClick={handleReset}
        className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 transition"
      >
        Reset Filters
      </button>
    </div>
  );
}