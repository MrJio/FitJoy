// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { fetchFoodData } from '../context/fetchFoodData';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { doc, setDoc } from 'firebase/firestore';

const FoodSearchBar = ({ onFoodSelect }) => {
  const { currentUser } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customFood, setCustomFood] = useState({ name: '', calories: 0, protein: 0, fat: 0, carbs: 0 });

  const appId = "a054b204";
  const appKey = "58b51be60f295c9b0ba3bcaa45057a85";

  const fetchSuggestions = async (input) => {
    const url = `https://api.edamam.com/auto-complete?app_id=${appId}&app_key=${appKey}&q=${encodeURIComponent(input)}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setSuggestions(data);
      }
    } catch (error) {
      console.error('Error fetching autocomplete suggestions:', error);
    }
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchTerm(input);
    if (input.length > 1) {
      fetchSuggestions(input);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await fetchFoodData(searchTerm);
    setSearchResults(results);
    setVisibleCount(5);
    setSuggestions([]);
  };

  const handleSelect = (food) => {
    onFoodSelect(food);
    setSearchTerm('');
    setSearchResults([]);
  };

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  const openCustomFoodModal = () => setIsModalOpen(true);
  const closeCustomFoodModal = () => setIsModalOpen(false);

  const handleCustomFoodChange = (e) => {
    const { name, value } = e.target;
    setCustomFood((prev) => ({ ...prev, [name]: value }));
  };

  const saveCustomFood = async (e) => {
    e.preventDefault();

    const foodItem = {
      name: customFood.name,
      calories: Number(customFood.calories),
      protein: Number(customFood.protein),
      fat: Number(customFood.fat),
      carbs: Number(customFood.carbs),
    };

    if (currentUser) {
      const userFoodRef = doc(db, "users", currentUser.uid, "foodLogs", "customFoods");
      await setDoc(userFoodRef, { [foodItem.name]: foodItem }, { merge: true });
    }

    onFoodSelect(foodItem);
    setCustomFood({ name: '', calories: 0, protein: 0, fat: 0, carbs: 0 });
    closeCustomFoodModal();
  };

  return (
    <div className="text-center">
      <form onSubmit={handleSearch} className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Search for food..."
          value={searchTerm}
          onChange={handleInputChange}
          className="p-2 border rounded mb-2 w-full max-w-xs"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded w-full max-w-xs">
          Search
        </button>
      </form>

      {suggestions.length > 0 && (
        <ul className="border border-gray-300 rounded mt-2 bg-white shadow-md max-h-32 overflow-y-auto w-full max-w-xs mx-auto">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}

      {searchResults.length > 0 && (
        <div className="mt-4 border rounded p-4 bg-white shadow-md max-h-64 overflow-y-auto w-full max-w-xs mx-auto">
          <ul>
            {searchResults.slice(0, visibleCount).map((food, index) => (
              <li
                key={index}
                className="p-2 border-b last:border-0 cursor-pointer"
                onClick={() => handleSelect(food)}
              >
                {food.name} - {food.calories} kcal, {food.protein}g protein, {food.fat}g fat, {food.carbs}g carbs
              </li>
            ))}
          </ul>
          {visibleCount < searchResults.length && (
            <button
              onClick={loadMore}
              className="mt-4 w-full p-2 bg-gray-300 rounded hover:bg-gray-400 text-gray-700"
            >
              Load More
            </button>
          )}
        </div>
      )}

      <button
        onClick={openCustomFoodModal}
        className="mt-4 p-2 bg-gray-500 text-white rounded w-full max-w-xs"
      >
        Not seeing food here?
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white rounded-lg w-11/12 max-w-md p-6 relative">
            <h2 className="text-xl font-bold mb-4">Add Custom Food</h2>
            <form onSubmit={saveCustomFood} className="flex flex-col space-y-4">
              <label className="text-left text-gray-700">Food Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter food name"
                value={customFood.name}
                onChange={handleCustomFoodChange}
                className="p-2 border rounded"
                required
              />
              
              <label className="text-left text-gray-700">Calories</label>
              <input
                type="number"
                name="calories"
                placeholder="Enter calories"
                value={customFood.calories}
                onChange={handleCustomFoodChange}
                className="p-2 border rounded"
                required
              />

              <label className="text-left text-gray-700">Protein (g)</label>
              <input
                type="number"
                name="protein"
                placeholder="Enter protein in grams"
                value={customFood.protein}
                onChange={handleCustomFoodChange}
                className="p-2 border rounded"
                required
              />

              <label className="text-left text-gray-700">Fat (g)</label>
              <input
                type="number"
                name="fat"
                placeholder="Enter fat in grams"
                value={customFood.fat}
                onChange={handleCustomFoodChange}
                className="p-2 border rounded"
                required
              />

              <label className="text-left text-gray-700">Carbs (g)</label>
              <input
                type="number"
                name="carbs"
                placeholder="Enter carbs in grams"
                value={customFood.carbs}
                onChange={handleCustomFoodChange}
                className="p-2 border rounded"
                required
              />

              <button type="submit" className="p-2 bg-blue-500 text-white rounded">
                Submit
              </button>
            </form>
            <button onClick={closeCustomFoodModal} className="absolute top-2 right-2 text-gray-500">
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

FoodSearchBar.propTypes = {
  onFoodSelect: PropTypes.func.isRequired
};

export default FoodSearchBar;