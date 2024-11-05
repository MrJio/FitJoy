// Login.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [loginEmail, setLoginE] = useState('');
  const [loginPass, setLoginP] = useState('');
  const [registerEmail, setRegisterE] = useState('');
  const [registerPass, setRegisterP] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPasswordSignIn, setShowPasswordSignIn] = useState(false);
  const [showPasswordSignUp, setShowPasswordSignUp] = useState(false);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in, navigate to home
        navigate('/home');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const logIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPass);
    } catch (error) {
      console.log(error);
      alert('Error logging in: ' + error.message);
    }
  };

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPass);
      const user = userCredential.user;

      // Save user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        createdAt: new Date(),
        macros: {
          protein: 0, // Placeholder values, adjust as needed
          carbs: 0,
          fat: 0,
          calories: 0,
        },
        selectedPlan: "Balanced"
      });
      console.log("User data saved to Firestore");

      // No need to navigate here; onAuthStateChanged will handle it
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('This email is already registered. Please try logging in.');
      } else {
        console.error("Error signing up:", error.message);
        alert('Error signing up: ' + error.message);
      }
    }
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center mx-0">
      <div className="relative w-full h-full lg:w-3/4 md:h-5/6 bg-white shadow-gray-300 shadow-lg rounded-none md:rounded-3xl overflow-hidden z-10 opacity-95">
        
        {/* Sign In Form */}
        <div
          className={`${
            isSignUp ? 'hidden md:flex' : 'flex'
          } flex-col justify-center items-center w-full h-full p-10 md:absolute md:left-0 md:w-1/2`}
        >
          <h1 className="text-4xl font-bold mb-8 text-center">FitJoy</h1>
          <form onSubmit={logIn} className="flex flex-col items-center w-full">
            <input 
              type="text" 
              placeholder="Email" 
              className="w-3/4 p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:border-primary" 
              value={loginEmail} 
              onChange={(e) => setLoginE(e.target.value)}
            />
            <div className="relative w-3/4">
              <input
                type={showPasswordSignIn ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:border-primary" 
                value={loginPass} 
                onChange={(e) => setLoginP(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPasswordSignIn(!showPasswordSignIn)}
                className="absolute right-3 mt-3 text-gray-500 hover:text-gray-700"
              >
                <FontAwesomeIcon icon={showPasswordSignIn ? faEye : faEyeSlash} />
              </button>
            </div>
            <button type="submit" className="w-3/6 bg-primary hover:bg-secondary text-white py-2 rounded-3xl mx-auto">Sign In</button>
          </form>
          <p className="text-center mt-4">
            Don’t have an account?{' '}
            <span onClick={toggleSignUp} className="text-primary cursor-pointer hover:underline">Register now</span>
          </p>
        </div>

        {/* Sign Up Form */}
        <div
          className={`${
            isSignUp ? 'flex' : 'hidden md:flex'
          } flex-col justify-center items-center w-full h-full p-10 md:absolute md:right-0 md:w-1/2`}
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Create Account</h1>
          <form onSubmit={signUp} className="flex flex-col items-center w-full">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-3/4 p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:border-primary" 
              value={registerEmail} 
              onChange={(e) => setRegisterE(e.target.value)}
            />
            <div className="relative w-3/4">
              <input
                type={showPasswordSignUp ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
                value={registerPass} 
                onChange={(e) => setRegisterP(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPasswordSignUp(!showPasswordSignUp)}
                className="absolute right-3 mt-3 text-gray-500 hover:text-gray-700"
              >
                <FontAwesomeIcon icon={showPasswordSignUp ? faEye : faEyeSlash} />
              </button>
            </div>
            <button type="submit" className="w-3/6 bg-primary hover:bg-secondary text-white py-2 rounded-3xl mx-auto">Sign Up</button>
          </form>
          <p className="text-center mt-4">
            Already registered?{' '}
            <span onClick={toggleSignUp} className="text-primary cursor-pointer hover:underline">Login</span>
          </p>
        </div>

        {/* Sliding Overlay Panel (only visible on large screens) */}
        <div className={`hidden md:flex absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-primary to-neutral-200 text-white p-10 flex-col justify-center items-center z-10 transition-transform duration-700 ease-in-out transform ${!isSignUp ? 'translate-x-full' : ''}`}>
          {isSignUp ? (
            <>
              <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
              <p className="mb-6">To keep connected with us please login with your personal info</p>
              <button onClick={toggleSignUp} className="w-3/6 bg-transparent border border-white py-2 px-4 rounded-full text-white hover:bg-white hover:text-secondary transition">Sign In</button>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-4">Welcome To FITJOY</h1>
              <p className="mb-6">Enter your personal details and start your journey with us</p>
              <button onClick={toggleSignUp} className="w-3/6 bg-transparent border border-white py-2 px-4 rounded-full text-white hover:bg-white hover:text-secondary transition">Sign Up</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;