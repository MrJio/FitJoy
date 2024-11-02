// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const CalorieCalculator = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [heightFeet, setHeightFeet] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [weight, setWeight] = useState('');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [activityLevel, setActivityLevel] = useState('');
  const [bmi, setBmi] = useState(null);
  const [calories, setCalories] = useState(null);

  const calculateBMI = (weightKg, heightMeters) => (weightKg / (heightMeters ** 2)).toFixed(2);

  const calculateCalories = (weightKg, heightCm, age, gender, activityMultiplier) => {
    const bmr = gender === 'male'
      ? 88.362 + (13.397 * weightKg) + (4.799 * heightCm) - (5.677 * age)
      : 447.593 + (9.247 * weightKg) + (3.098 * heightCm) - (4.330 * age);
    return (bmr * activityMultiplier).toFixed(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const weightKg = weightUnit === 'kg' ? parseFloat(weight) : parseFloat(weight) * 0.453592;
    const heightCm = (parseInt(heightFeet) * 30.48) + (parseInt(heightInches) * 2.54);
    const heightMeters = heightCm / 100;

    const calculatedBMI = calculateBMI(weightKg, heightMeters);
    const activityMultipliers = {
      Sedentary: 1.2,
      'Lightly active': 1.375,
      'Moderately active': 1.55,
      'Highly active': 1.725,
    };
    const calculatedCalories = calculateCalories(weightKg, heightCm, parseInt(age), gender, activityMultipliers[activityLevel]);

    setBmi(calculatedBMI);
    setCalories(calculatedCalories);
  };

  return (
    <div className="max-w-md mx-auto p-8 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Calorie and BMI Calculator</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
            <input type="number" value={heightFeet} onChange={(e) => setHeightFeet(e.target.value)} className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="block font-semibold">Height (Inches)</label>
            <input type="number" value={heightInches} onChange={(e) => setHeightInches(e.target.value)} className="w-full p-2 border rounded" required />
          </div>
        </div>

        <div>
          <label className="block font-semibold">Weight</label>
          <div className="flex items-center gap-2">
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full p-2 border rounded" required />
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

        <button type="submit" className="w-full p-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Calculate</button>
      </form>

      {bmi && calories && (
        <div className="mt-6 text-center">
          <p><span className="font-semibold">BMI:</span> {bmi}</p>
          <p><span className="font-semibold">Calories per day:</span> {calories} kcal</p>
        </div>
      )}
    </div>
  );
};

export default CalorieCalculator;
