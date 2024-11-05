// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { fetchFoodData } from '../context/fetchFoodData';

const FoodSearchBar = ({ onFoodSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);

  // API credentials
  const appId = "a054b204";
  const appKey = "58b51be60f295c9b0ba3bcaa45057a85";

  // Function to fetch autocomplete suggestions
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

  return (
    <div className="text-center"> {/* Center-align content */}
      <form onSubmit={handleSearch} className="flex flex-col items-center"> {/* Center the form elements */}
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

      {/* Autocomplete Suggestions */}
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

      {/* Search Results */}
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
    </div>
  );
};

FoodSearchBar.propTypes = {
  onFoodSelect: PropTypes.func.isRequired
};

export default FoodSearchBar;