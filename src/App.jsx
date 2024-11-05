// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile';
import Contact from './pages/Contact';
import './index.css';
import Footer from './components/Footer';
import CalorieCalculator from './pages/CalorieCalculator';
import FoodLogger from './pages/FoodLogger';
import { AuthProvider } from './context/AuthContext';
import { HashRouter as Router } from 'react-router-dom'; // Import HashRouter

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="sm:max-[10%]:">
          <Routes>
            {/* Make Login page the default (root) page */}
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/user-profile' element={<UserProfile />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/CalorieCalculator' element={<CalorieCalculator />} />
            <Route path='/FoodLogger' element={<FoodLogger />} />
          </Routes>
          <Navbar />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;