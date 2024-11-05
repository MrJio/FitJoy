// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import FoodSearchBar from '../components/FoodSearchBar';

const FoodLogger = () => {
  const { currentUser } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [foodItems, setFoodItems] = useState({
    Breakfast: [],
    Lunch: [],
    Dinner: [],
    Snacks: []
  });
  const [totals, setTotals] = useState({
    calories: 0,
    carbs: 0,
    fat: 0,
    protein: 0,
  });
  const [userMacros, setUserMacros] = useState({
    calories: 0,
    carbs: 0,
    fat: 0,
    protein: 0,
  });

  const openModal = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCategory('');
  };

  const addFoodItem = (food) => {
    const updatedFoodItems = {
      ...foodItems,
      [selectedCategory]: [...foodItems[selectedCategory], food]
    };
    setFoodItems(updatedFoodItems);

    const updatedTotals = {
      calories: totals.calories + food.calories,
      carbs: totals.carbs + food.carbs,
      fat: totals.fat + food.fat,
      protein: totals.protein + food.protein,
    };
    setTotals(updatedTotals);

    saveToFirebase(updatedFoodItems, updatedTotals);
    closeModal();
  };

  const deleteFoodItem = (category, index) => {
    const itemToRemove = foodItems[category][index];
    const updatedCategoryItems = foodItems[category].filter((_, i) => i !== index);
    const updatedFoodItems = { ...foodItems, [category]: updatedCategoryItems };

    setFoodItems(updatedFoodItems);
    
    const updatedTotals = {
      calories: totals.calories - itemToRemove.calories,
      carbs: totals.carbs - itemToRemove.carbs,
      fat: totals.fat - itemToRemove.fat,
      protein: totals.protein - itemToRemove.protein,
    };
    setTotals(updatedTotals);

    saveToFirebase(updatedFoodItems, updatedTotals);
  };

  const duplicateFoodItem = (category, item) => {
    const updatedFoodItems = {
      ...foodItems,
      [category]: [...foodItems[category], item]
    };
    setFoodItems(updatedFoodItems);

    const updatedTotals = {
      calories: totals.calories + item.calories,
      carbs: totals.carbs + item.carbs,
      fat: totals.fat + item.fat,
      protein: totals.protein + item.protein,
    };
    setTotals(updatedTotals);

    saveToFirebase(updatedFoodItems, updatedTotals);
  };

  const saveToFirebase = async (updatedFoodItems = foodItems, updatedTotals = totals) => {
    if (!currentUser) {
      alert("You need to be logged in to save your food data.");
      return;
    }

    try {
      const foodLogRef = doc(db, "users", currentUser.uid, "foodLogs", "currentLog");
      await setDoc(foodLogRef, {
        foodItems: updatedFoodItems,
        totals: updatedTotals,
        timestamp: new Date()
      }, { merge: true });
    } catch (error) {
      console.error("Error saving to Firebase:", error);
      alert("Failed to save food log. Please try again.");
    }
  };

  useEffect(() => {
    if (!currentUser) return;

    const userDocRef = doc(db, "users", currentUser.uid);

    const fetchUserMacros = async () => {
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setUserMacros({
          calories: data.calories || 0,
          carbs: data.macros?.carbs || 0,
          fat: data.macros?.fat || 0,
          protein: data.macros?.protein || 0,
        });
      }
    };

    const fetchFoodLog = async () => {
      const foodLogRef = doc(db, "users", currentUser.uid, "foodLogs", "currentLog");
      const foodLogSnap = await getDoc(foodLogRef);
      if (foodLogSnap.exists()) {
        const foodData = foodLogSnap.data();
        setFoodItems(foodData.foodItems || {
          Breakfast: [],
          Lunch: [],
          Dinner: [],
          Snacks: []
        });
        setTotals(foodData.totals || {
          calories: 0,
          carbs: 0,
          fat: 0,
          protein: 0
        });
      }
    };

    fetchUserMacros();
    fetchFoodLog();

    const unsubscribe = onSnapshot(userDocRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        setUserMacros({
          calories: data.calories || 0,
          carbs: data.macros?.carbs || 0,
          fat: data.macros?.fat || 0,
          protein: data.macros?.protein || 0,
        });
      }
    });

    return () => unsubscribe();
  }, [currentUser]);

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Your Food Diary</h1>

      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold text-center">Macros Left for Today</h2>
        <table className="w-full text-center mt-4">
          <thead>
            <tr>
              <th className="p-2">Calories</th>
              <th className="p-2">Carbs</th>
              <th className="p-2">Fat</th>
              <th className="p-2">Protein</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-green-600 font-semibold">
              <td>{Math.max((userMacros.calories || 0) - totals.calories, 0)}</td>
              <td>{Math.max((userMacros.carbs || 0) - totals.carbs, 0)}</td>
              <td>{Math.max((userMacros.fat || 0) - totals.fat, 0)}</td>
              <td>{Math.max((userMacros.protein || 0) - totals.protein, 0)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
        {['Breakfast', 'Lunch', 'Dinner', 'Snacks'].map((category) => (
          <div key={category} className="mb-4">
            <h2 className="text-lg font-semibold">{category}</h2>
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={() => openModal(category)}
            >
              Add Food
            </button>
            <ul className="mt-2 flex flex-wrap gap-2 ">
              {foodItems[category].map((item, index) => (
                <li 
                  key={index} 
                  className="inline-flex items-center py-2 bg-gray-100 text-left rounded-2xl min-w-[250px]"
                >
                  <div className="flex-grow ml-3">{item.name}</div>
                  <span className="text-sm text-gray-500 mr-3 ml-4">{item.calories} kcal</span>
                  <button
                    onClick={() => duplicateFoodItem(category, item)}
                    className="text-green-500 hover:text-green-700 mr-2"
                  >
                    +
                  </button>
                  <button
                    onClick={() => deleteFoodItem(category, index)}
                    className="text-red-200 hover:text-red-500 mr-3 mb-1"
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4 mt-6">
        <table className="w-full text-center">
          <thead>
            <tr>
              <th className="p-2">Calories</th>
              <th className="p-2">Carbs</th>
              <th className="p-2">Fat</th>
              <th className="p-2">Protein</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{totals.calories}</td>
              <td>{totals.carbs}</td>
              <td>{totals.fat}</td>
              <td>{totals.protein}</td>
            </tr>
            <tr className="font-semibold">
              <td>{userMacros.calories || 0}</td>
              <td>{userMacros.carbs || 0}</td>
              <td>{userMacros.fat || 0}</td>
              <td>{userMacros.protein || 0}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg w-11/12 max-w-md p-6 relative">
            <h2 className="text-xl font-bold mb-4">{selectedCategory} Item</h2>
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              X
            </button>
            <FoodSearchBar onFoodSelect={addFoodItem} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodLogger;