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

  return (
    <div className="max-w-md mx-auto p-8 border rounded-lg shadow-lg">
      {!showResults ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-xl font-bold mb-4 text-center">Macro & Calorie Calculator</h2>
          <div>
            <label className="block font-semibold">Age</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="block font-semibold">Gender</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-full p-2 border rounded" required>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex gap-2">
            <div>
              <label className="block font-semibold">Height (Feet)</label>
              <input
                type="number"
                value={heightFeet}
                onChange={(e) => setHeightFeet(e.target.value)}
                className="w-full p-2 border rounded"
                required
                min="3"
                max="8"
              />
            </div>
            <div>
              <label className="block font-semibold">Height (Inches)</label>
              <input type="number" value={heightInches} onChange={(e) => setHeightInches(e.target.value)} className="w-full p-2 border rounded" required min="0" max="12"/>
            </div>
          </div>
          <div>
            <label className="block font-semibold">Weight</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full p-2 border rounded"
                required
                min={weightUnit === 'lbs' ? "50" : "22.68"}
                max={weightUnit === 'lbs' ? "1400" : "635.03"}
              />
              <select value={weightUnit} onChange={(e) => setWeightUnit(e.target.value)} className="p-2 border rounded">
                <option value="kg">kg</option>
                <option value="lbs">lbs</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block font-semibold">Activity Level</label>
            <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} className="w-full p-2 border rounded" required>
              <option value="">Select</option>
              <option value="Sedentary">Sedentary</option>
              <option value="Lightly active">Lightly active</option>
              <option value="Moderately active">Moderately active</option>
              <option value="Highly active">Highly active</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold">Goal</label>
            <select value={goal} onChange={(e) => setGoal(e.target.value)} className="w-full p-2 border rounded">
              <option value="">Select Goal</option>
              <option value="Extreme weight loss">Extreme weight loss</option>
              <option value="Weight loss">Weight loss</option>
              <option value="Maintain weight">Maintain weight</option>
              <option value="Weight gain">Weight gain</option>
              <option value="Extreme weight gain">Extreme weight gain</option>
            </select>
          </div>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Calculate</button>
        </form>
      ) : (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-bold mb-4">Your Daily Recommendations</h3>
          <div className="flex justify-center mb-4 space-x-2">
            {['Balanced', 'Low Fat', 'Low Carb', 'High Protein', 'Custom'].map((plan) => (
              <button
                key={plan}
                onClick={() => handlePlanChange(plan)}
                className={`px-3 py-1 rounded ${selectedPlan === plan ? 'bg-gray-700 text-white' : 'bg-blue-500 text-white'}`}
              >
                {plan}
              </button>
            ))}
          </div>
          <p><span className="font-semibold">Calories:</span> {calories} kcal</p>
          <p><span className="font-semibold">Protein:</span> {macros.protein} grams</p>
          <p><span className="font-semibold">Carbs:</span> {macros.carbs} grams</p>
          <p><span className="font-semibold">Fat:</span> {macros.fat} grams</p>

          {selectedPlan === 'Custom' && (
            <div className="mt-6 text-left">
              <h4 className="font-bold mb-2">Adjust Macronutrients</h4>
              <label>Protein ({customMacros.protein}%)</label>
              <input
                type="range"
                min="0"
                max="80"
                value={customMacros.protein}
                onChange={(e) => handleSliderChange('protein', parseInt(e.target.value))}
                className="w-full mb-2"
              />
              <label>Carbs ({customMacros.carbs}%)</label>
              <input
                type="range"
                min="0"
                max="80"
                value={customMacros.carbs}
                onChange={(e) => handleSliderChange('carbs', parseInt(e.target.value))}
                className="w-full mb-2"
              />
              <label>Fat ({customMacros.fat}%)</label>
              <input
                type="range"
                min="0"
                max="80"
                value={customMacros.fat}
                onChange={(e) => handleSliderChange('fat', parseInt(e.target.value))}
                className="w-full mb-2"
              />
            </div>
          )}

          <button onClick={saveUserMacros} className="mt-4 w-full p-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600">
            Save Macros
          </button>
          <button onClick={() => setShowResults(false)} className="mt-2 w-full p-2 bg-gray-500 text-white font-semibold rounded hover:bg-gray-600">
            Recalculate Macros
          </button>
        </div>
      )}
    </div>
  );
};

export default CalorieCalculator;