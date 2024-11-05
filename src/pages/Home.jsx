// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import AuthDetails from '../components/authDetails';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { currentUser } = useAuth();
  const [totals, setTotals] = useState({ calories: 0, protein: 0, fat: 0, carbs: 0 });
  const [userMacros, setUserMacros] = useState({ calories: 2000, protein: 150, fat: 70, carbs: 250 }); // Sample defaults

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
          carbs: profileData.macros?.carbs ||0,
        });
      }
    };

    fetchData();
  }, [currentUser]);

  // Calculate remaining percentages
  const calculatePercentage = (logged, goal) => Math.min((logged / goal) * 100, 100);

  return (
    <div className="flex flex-col items-center p-6">
      <AuthDetails />

      {/* Circular Progress Bar for Calories */}
      <div className="relative w-40 h-40 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="70"
            stroke="gray"
            strokeWidth="10"
            fill="transparent"
          />
          <circle
            cx="50%"
            cy="50%"
            r="70"
            stroke="blue"
            strokeWidth="10"
            strokeDasharray="440" // Circumference of circle (2 * π * r)
            strokeDashoffset={440 - (440 * calculatePercentage(totals.calories, userMacros.calories)) / 100}
            fill="transparent"
          />
        </svg>
        <div className="absolute text-center">
          <p className="text-xl font-bold">{totals.calories} / {userMacros.calories}</p>
          <p className="text-sm">Calories Left</p>
        </div>
      </div>

      {/* Small Progress Bars for Protein, Fat, and Carbs */}
      <div className="w-full max-w-xs mt-8 space-y-4">
        {[
          { label: 'Protein', total: totals.protein, goal: userMacros.protein },
          { label: 'Fat', total: totals.fat, goal: userMacros.fat },
          { label: 'Carbs', total: totals.carbs, goal: userMacros.carbs },
        ].map((macro, index) => (
          <div key={index}>
            <div className="flex justify-between">
              <span>{macro.label}</span>
              <span>{macro.total} / {macro.goal}g</span>
            </div>
            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${calculatePercentage(macro.total, macro.goal)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;