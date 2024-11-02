// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile';
import Contact from './pages/Contact';
import './index.css';
import Footer from './components/Footer';
import CalorieCalculator from './pages/calorie-calculator';
// import authDetails from './components/authDetails';

const App = () => {
  const location = useLocation(); // Get the current route

  // Conditionally render Navbar and Footer, exclude them for the login page
  const hideNavbarAndFooter = location.pathname === '/';

  return (
    <div className="sm:max-[10%]:">
      {/* Only render Navbar and Footer if not on the Login page */}
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        {/* Make Login page the default (root) page */}
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/user-profile' element={<UserProfile />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/calorie-calculator' element={<CalorieCalculator />} />

      </Routes>
      {/* Only render Footer if not on the Login page */}
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
};

export default App;
