// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import AuthDetails from '../components/authDetails';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [totals, setTotals] = useState({ calories: 0, protein: 0, fat: 0, carbs: 0 });
  const [userMacros, setUserMacros] = useState({ calories: 0, protein: 0, fat: 0, carbs: 0 }); // Initialize to 0 to check if set

  useEffect(() => {
    if (!currentUser) return;

    const fetchData = async () => {
      const userDocRef = doc(db, 'users', currentUser.uid, 'foodLogs', 'currentLog');
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setTotals(data.totals || { calories: 0, protein: 0, fat: 0, carbs: 0 });
      }

      // Fetch user macro goals (e.g., from user's profile)
      const profileRef = doc(db, 'users', currentUser.uid);
      const profileSnap = await getDoc(profileRef);
      if (profileSnap.exists()) {
        const profileData = profileSnap.data();
        setUserMacros({
          calories: profileData.calories || 0,
          protein: profileData.macros?.protein || 0,
          fat: profileData.macros?.fat || 0,
          carbs: profileData.macros?.carbs || 0,
        });
      }
    };

    fetchData();
  }, [currentUser]);

  // Calculate remaining percentages
  const calculatePercentage = (logged, goal) => Math.min((logged / goal) * 100, 100);

  // Determine if macros have been set by checking if userMacros have non-zero values
  const isMacrosSet = userMacros.calories > 0 || userMacros.protein > 0 || userMacros.fat > 0 || userMacros.carbs > 0;

  return (
    <div className="flex flex-col items-center p-6 relative">
      <AuthDetails />

      {!isMacrosSet && (
        <div className="flex flex-col items-center z-20 mb-4">
          <p className="text-sm italic mb-2 text-center">
            **You need to calculate macros before using this feature**
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold" onClick={() => navigate('/CalorieCalculator')}>
            Calculate Macros
          </button>
        </div>
      )}

      <div className={`relative ${isMacrosSet ? '' : 'blur-sm'}`}>
        {/* Larger Circular Progress Bar for Calories */}
        <div className="relative w-60 h-60 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="90"  // Adjusted radius for larger circle
              stroke="gray"
              strokeWidth="12"  // Thicker stroke for visibility
              fill="transparent"
            />
            <circle
              cx="50%"
              cy="50%"
              r="90"
              stroke="blue"
              strokeWidth="12"
              strokeDasharray="565" // Circumference of circle (2 * π * r)
              strokeDashoffset={565 - (565 * calculatePercentage(totals.calories, userMacros.calories)) / 100}
              fill="transparent"
            />
          </svg>
          <div className="absolute text-center">
            <p className="text-3xl font-bold">{totals.calories} / {userMacros.calories}</p>
            <p className="text-lg">Calories Left</p>
          </div>
        </div>

        {/* Larger Progress Bars for Protein, Fat, and Carbs */}
        <div className="w-full max-w-md mt-8 space-y-6">
          {[
            { label: 'Protein', total: totals.protein, goal: userMacros.protein },
            { label: 'Fat', total: totals.fat, goal: userMacros.fat },
            { label: 'Carbs', total: totals.carbs, goal: userMacros.carbs },
          ].map((macro, index) => (
            <div key={index}>
              <div className="flex justify-between text-lg font-semibold">
                <span>{macro.label}</span>
                <span>{macro.total} / {macro.goal}g</span>
              </div>
              <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden"> {/* Increased height */}
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${calculatePercentage(macro.total, macro.goal)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;