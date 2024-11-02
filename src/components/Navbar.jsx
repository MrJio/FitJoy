// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Navbar = () => {
    const navigate = useNavigate();
    const [isNutritionOpen, setIsNutritionOpen] = useState(false);
    const [isFitnessOpen, setIsFitnessOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Toggle Dropdowns
    const toggleNutrition = () => {
        setIsNutritionOpen(!isNutritionOpen);
        setIsFitnessOpen(false);
        setIsProfileOpen(false);
    };

    const toggleFitness = () => {
        setIsFitnessOpen(!isFitnessOpen);
        setIsNutritionOpen(false);
        setIsProfileOpen(false);
    };

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
        setIsNutritionOpen(false);
        setIsFitnessOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Sign out successful');
            navigate('/');
        }).catch(error => console.log(error));
    };

    // Close dropdown when a link is clicked
    const handleLinkClick = () => {
        setIsNutritionOpen(false);
        setIsFitnessOpen(false);
        setIsProfileOpen(false);
        setIsMenuOpen(false);
    };

    // Active Dropdowns
    const isNutritionActive = location.pathname.includes('/food-logger') || location.pathname.includes('/recipes');
    const isFitnessActive = location.pathname.includes('/bmi-calculator') || location.pathname.includes('/workouts');

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 mx-10'>
            {/* Logo */}
            <img onClick={() => navigate('/home')} className='w-20 cursor-pointer' src={assets.logo2} alt="nav_logo"/>

            {/* Main Navigation (centered on larger screens) */}
            <ul className={`flex-col ${isMenuOpen ? 'flex' : 'hidden'} md:flex md:flex-row md:items-center md:gap-8 font-medium bg-white md:bg-transparent w-full md:w-auto absolute md:static top-16 left-0 right-0 z-10 shadow-lg md:shadow-none rounded-lg md:rounded-none p-4 md:p-0 md:justify-center`}>
                
                {/* Home */}
                <NavLink to='/home' className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>
                    <li className='py-1'>Home</li>
                </NavLink>

                {/* Nutrition Dropdown */}
                <li className={`relative py-1 cursor-pointer ${isNutritionActive ? 'active' : ''}`} onClick={toggleNutrition}>
                    <div className="dropdown-content">
                        <span>Nutrition</span>
                        <span className="ml-2 md:inline hidden dropdown-arrow">{isNutritionOpen ? '▲' : '▼'}</span>
                    </div>
                    {isNutritionOpen && (
                        <ul className='md:absolute md:left-0 md:top-full bg-white shadow-lg rounded-xl mt-2 md:mt-0 md:bg-white flex flex-col space-y-2 ml-4 p-2 md:ml-0'>
                            <NavLink to='/food-logger' className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>
                                <li className='py-2 px-2 hover:bg-gray-200 rounded-xl text-center md:text-left'>Food Logger</li>
                            </NavLink>
                            <NavLink to='/recipes' className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>
                                <li className='py-2 px-2 hover:bg-gray-200 rounded-xl text-center md:text-left'>Recipes</li>
                            </NavLink>
                        </ul>
                    )}
                </li>

                {/* Fitness Dropdown */}
                <li className={`relative py-1 cursor-pointer ${isFitnessActive ? 'active' : ''}`} onClick={toggleFitness}>
                    <div className="dropdown-content">
                        <span>Fitness</span>
                        <span className="ml-2 md:inline hidden dropdown-arrow">{isFitnessOpen ? '▲' : '▼'}</span>
                    </div>
                    {isFitnessOpen && (
                        <ul className='md:absolute md:right-0 md:top-full bg-white shadow-lg rounded-xl mt-2 md:mt-0 md:bg-white flex flex-col space-y-2 ml-4 p-2 md:ml-0'>
                            <NavLink to='/calorie-calculator' className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>
                                <li className='py-2 px-2 hover:bg-gray-200 rounded-xl text-center md:text-left'>Calorie Calculator</li>
                            </NavLink>
                            <NavLink to='/workouts' className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>
                                <li className='py-2 px-2 hover:bg-gray-200 rounded-xl text-center md:text-left'>Workouts</li>
                            </NavLink>
                        </ul>
                    )}
                </li>

                {/* Contact */}
                <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>
                    <li className='py-1'>Contact</li>
                </NavLink>
            </ul>

            {/* Right Side: Profile Icon and Hamburger Menu */}
            <div className='flex items-center space-x-4'>
                {/* Profile Icon */}
                <div className='relative cursor-pointer' onClick={toggleProfile}>
                    <FontAwesomeIcon icon={faCircleUser} size="2x" style={{ color: "#232323" }} />
                    {isProfileOpen && (
                        <ul className='absolute right-0 top-full bg-white shadow-lg rounded mt-2 p-2'>
                            <li onClick={() => { navigate('/user-profile'); handleLinkClick(); }} className='py-2 px-4 hover:bg-gray-200 rounded-xl'>My Profile</li>
                            <li onClick={() => { navigate('/'); handleLinkClick(); }} className='py-2 px-4 hover:bg-gray-200 rounded-xl'>Friends</li>
                            <li onClick={() => { userSignOut(); handleLinkClick(); }} className='py-2 px-4 hover:bg-gray-200 rounded-xl'>Logout</li>
                        </ul>
                    )}
                </div>

                {/* Hamburger Icon for Mobile */}
                <button className="md:hidden" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
