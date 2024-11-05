// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from 'react';
import { db } from '../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { AuthContext } from '../context/AuthContext';

const CalorieCalculator = () => {
  const { currentUser } = useContext(AuthContext);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [heightFeet, setHeightFeet] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [weight, setWeight] = useState('');
  const [weightUnit, setWeightUnit] = useState('lbs');
  const [activityLevel, setActivityLevel] = useState('');
  const [goal, setGoal] = useState('');
  const [calories, setCalories] = useState(null);
  const [macros, setMacros] = useState({ protein: 0, carbs: 0, fat: 0 });
  const [showResults, setShowResults] = useState(false);
  const [customMacros, setCustomMacros] = useState({ protein: 30, carbs: 40, fat: 30 });
  const [selectedPlan, setSelectedPlan] = useState('Balanced');
  // eslint-disable-next-line no-unused-vars
  const [savedPlan, setSavedPlan] = useState('');

  const activityMultipliers = {
    Sedentary: 1.2,
    'Lightly active': 1.375,
    'Moderately active': 1.55,
    'Highly active': 1.725,
  };

  const macroPlans = {
    Balanced: { protein: 30, carbs: 40, fat: 30 },
    'Low Fat': { protein: 35, carbs: 45, fat: 20 },
    'Low Carb': { protein: 45, carbs: 10, fat: 45 },
    'High Protein': { protein: 50, carbs: 25, fat: 25 },
  };

  const calculateCalories = (weightKg, heightCm, age, gender, activityMultiplier) => {
    const bmr = gender === 'male'
      ? 88.362 + (13.397 * weightKg) + (4.799 * heightCm) - (5.677 * age)
      : 447.593 + (9.247 * weightKg) + (3.098 * heightCm) - (4.330 * age);
    const maintenanceCalories = bmr * activityMultiplier;

    const goalMultipliers = {
      'Extreme weight loss': 0.8,
      'Weight loss': 0.9,
      'Maintain weight': 1,
      'Weight gain': 1.1,
      'Extreme weight gain': 1.2
    };

    return maintenanceCalories * (goalMultipliers[goal] || 1);
  };

  const calculateMacros = (calories, proteinPct, carbsPct, fatPct) => {
    const proteinGrams = Math.round((calories * (proteinPct / 100)) / 4);
    const carbsGrams = Math.round((calories * (carbsPct / 100)) / 4);
    const fatGrams = Math.round((calories * (fatPct / 100)) / 9);
    return { protein: proteinGrams, carbs: carbsGrams, fat: fatGrams };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const weightKg = weightUnit === 'kg' ? parseFloat(weight) : parseFloat(weight) * 0.453592;
    const heightCm = (parseInt(heightFeet) * 30.48) + (parseInt(heightInches) * 2.54);
    const activityMultiplier = activityMultipliers[activityLevel] || 1;

    const calculatedCalories = calculateCalories(weightKg, heightCm, parseInt(age), gender, activityMultiplier);
    setCalories(Math.round(calculatedCalories));

    if (selectedPlan !== 'Custom') {
      const plan = macroPlans[selectedPlan];
      setMacros(calculateMacros(calculatedCalories, plan.protein, plan.carbs, plan.fat));
    } else {
      setMacros(calculateMacros(calculatedCalories, customMacros.protein, customMacros.carbs, customMacros.fat));
    }

    setShowResults(true);
  };

  const handleSliderChange = (type, value) => {
    if (value > 80) value = 80;

    let newMacros = { ...customMacros, [type]: value };
    const remainingPercentage = 100 - newMacros[type];

    const otherTypes = ['protein', 'carbs', 'fat'].filter((t) => t !== type);
    const otherTotal = newMacros[otherTypes[0]] + newMacros[otherTypes[1]];

    if (otherTotal > 0) {
      newMacros[otherTypes[0]] = Math.min(Math.round((remainingPercentage * newMacros[otherTypes[0]]) / otherTotal), 80);
      newMacros[otherTypes[1]] = Math.min(100 - newMacros[type] - newMacros[otherTypes[0]], 80);
    }

    if (newMacros[otherTypes[0]] + newMacros[otherTypes[1]] + newMacros[type] > 100) {
      const excess = newMacros[otherTypes[0]] + newMacros[otherTypes[1]] + newMacros[type] - 100;
      newMacros[otherTypes[1]] -= excess;
    }

    setCustomMacros(newMacros);
    setMacros(calculateMacros(calories, newMacros.protein, newMacros.carbs, newMacros.fat));
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
    if (plan !== 'Custom') {
      const planMacros = macroPlans[plan];
      setCustomMacros(planMacros);
      setMacros(calculateMacros(calories, planMacros.protein, planMacros.carbs, planMacros.fat));
    }
  };

  const saveUserMacros = async () => {
    try {
      const userDocRef = doc(db, "users", currentUser.uid);
      await setDoc(userDocRef, {
        selectedPlan,
        customMacros,
        macros,
        calories,
        age,
        gender,
        heightFeet,
        heightInches,
        weight,
        weightUnit,
        activityLevel,
        goal
      }, { merge: true });
      setSavedPlan(selectedPlan);
      alert('Macros saved successfully!');
    } catch (error) {
      console.error("Error saving macros: ", error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDocRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setAge(data.age || '');
          setGender(data.gender || '');
          setHeightFeet(data.heightFeet || '');
          setHeightInches(data.heightInches || '');
          setWeight(data.weight || '');
          setWeightUnit(data.weightUnit || 'lbs');
          setActivityLevel(data.activityLevel || '');
          setGoal(data.goal || '');
          setCalories(Math.round(data.calories || 0));
          setMacros(data.macros || { protein: 0, carbs: 0, fat: 0 });
          setSelectedPlan(data.selectedPlan || 'Balanced');
          setCustomMacros(data.customMacros || { protein: 30, carbs: 40, fat: 30 });
          setSavedPlan(data.selectedPlan || '');
          setShowResults(data.calories > 0); // Show results only if calories data exists
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    if (currentUser) fetchUserData();
  }, [currentUser]);

// Import the `CalorieCalculator` component as usual

return (
  <div
    className={`max-w-lg mx-auto p-10 rounded-2xl shadow-lg border border-gray-200 ${
      showResults ? 'bg-primary' : 'bg-white'
    }`}
  >
    {!showResults ? (
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Macro & Calorie Calculator</h2>

        {/* Age Input */}
        <div>
          <label className="block font-medium text-gray-700">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
            required
          />
        </div>

        {/* Gender Input */}
        <div>
          <label className="block font-medium text-gray-700">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Height Inputs */}
        <div className="flex gap-4">
          <div>
            <label className="block font-medium text-gray-700">Height (Feet)</label>
            <input
              type="number"
              value={heightFeet}
              onChange={(e) => setHeightFeet(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
              required
              min="3"
              max="8"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Height (Inches)</label>
            <input
              type="number"
              value={heightInches}
              onChange={(e) => setHeightInches(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
              required
              min="0"
              max="11"
            />
          </div>
        </div>

        {/* Weight Input */}
        <div>
          <label className="block font-medium text-gray-700">Weight</label>
          <div className="flex items-center gap-4">
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
              required
              min="40"
              max="700"
            />
            <select
              value={weightUnit}
              onChange={(e) => setWeightUnit(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
            >
              <option value="kg">kg</option>
              <option value="lbs">lbs</option>
            </select>
          </div>
        </div>

        {/* Activity Level Input */}
        <div>
          <label className="block font-medium text-gray-700">Activity Level</label>
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
            required
          >
            <option value="">Select</option>
            <option value="Sedentary">Sedentary</option>
            <option value="Lightly active">Lightly active</option>
            <option value="Moderately active">Moderately active</option>
            <option value="Highly active">Highly active</option>
          </select>
        </div>

        {/* Goal Input */}
        <div>
          <label className="block font-medium text-gray-700">Goal</label>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          >
            <option value="">Select Goal</option>
            <option value="Extreme weight loss">Extreme weight loss</option>
            <option value="Weight loss">Weight loss</option>
            <option value="Maintain weight">Maintain weight</option>
            <option value="Weight gain">Weight gain</option>
            <option value="Extreme weight gain">Extreme weight gain</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-primary text-white font-semibold rounded-lg transition hover:bg-secondary"
        >
          Calculate
        </button>
      </form>
    ) : (
      <div className="bg-gray-50 p-8 rounded-xl shadow-md text-center space-y-6">
        <h3 className="text-lg font-bold text-gray-800">Your Daily Recommendations</h3>

        {/* Plan Selection Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {['Balanced', 'Low Fat', 'Low Carb', 'High Protein', 'Custom'].map((plan) => (
            <button
              key={plan}
              onClick={() => handlePlanChange(plan)}
              className={`min-w-[80px] px-4 py-2 rounded-full font-semibold transition ${
                selectedPlan === plan
                  ? 'bg-primary text-white shadow'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {plan}
            </button>
          ))}
        </div>

        {/* Calorie and Macronutrient Info */}
        <div className="text-xl font-medium text-gray-800 space-y-1">
          <p><span className="font-semibold">Calories:</span> {calories} kcal</p>
          <p><span className="font-semibold">Protein:</span> {macros.protein} grams</p>
          <p><span className="font-semibold">Carbs:</span> {macros.carbs} grams</p>
          <p><span className="font-semibold">Fat:</span> {macros.fat} grams</p>
        </div>

        {/* Custom Plan Sliders */}
        {selectedPlan === 'Custom' && (
          <div className="mt-6 space-y-4">
            <h4 className="font-bold text-gray-800">Adjust Macronutrients</h4>
            <div>
              <label>Protein ({customMacros.protein}%)</label>
              <input
                type="range"
                min="0"
                max="80"
                value={customMacros.protein}
                onChange={(e) => handleSliderChange('protein', parseInt(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
            <div>
              <label>Carbs ({customMacros.carbs}%)</label>
              <input
                type="range"
                min="0"
                max="80"
                value={customMacros.carbs}
                onChange={(e) => handleSliderChange('carbs', parseInt(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
            <div>
              <label>Fat ({customMacros.fat}%)</label>
              <input
                type="range"
                min="0"
                max="80"
                value={customMacros.fat}
                onChange={(e) => handleSliderChange('fat', parseInt(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
          </div>
        )}

        {/* Save and Recalculate Buttons */}
        <div className="space-y-4 mt-8">
          <button
            onClick={saveUserMacros}
            className="w-full py-3 bg-primary text-white font-semibold rounded-lg transition hover:bg-secondary"
          >
            Save Macros
          </button>
          <button
            onClick={() => setShowResults(false)}
            className="w-full py-3 bg-gray-200 text-white font-semibold rounded-lg transition hover:bg-slate-300"
          >
            Recalculate Macros
          </button>
        </div>
      </div>
    )}
  </div>
  );
};


export default CalorieCalculator;