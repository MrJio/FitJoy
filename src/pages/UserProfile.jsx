// eslint-disable-next-line no-unused-vars
import React from 'react';
import AuthDetails from '../components/authDetails';
import { assets } from '../assets/assets';

const UserProfile = () => {
  return (
    <div className="profile-page">
      {/* Profile Header Section */}
      <div className="profile-header flex flex-col items-center py-6 px-4 sm:px-8">
        {/* Profile Picture */}
        <img 
          src={assets.ph}
          alt="Profile" 
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white mb-4"
        />
        
        {/* Auth Details */}
        <AuthDetails />

        {/* User Basic Info */}
        <div className="text-center mt-2">
          <h2 className="text-xl sm:text-2xl font-semibold">Jassa Jas</h2>
          <p className="text-gray-600 text-sm sm:text-base">New York, USA</p>
        </div>

        {/* Follow Stats */}
        <div className="flex justify-around w-full max-w-sm sm:max-w-md mt-6">
          <div className="text-center">
            <span className="text-lg sm:text-xl font-bold">9</span>
            <p className="text-gray-600 text-xs sm:text-sm">Posts</p>
          </div>
          <div className="text-center">
            <span className="text-lg sm:text-xl font-bold">1M</span>
            <p className="text-gray-600 text-xs sm:text-sm">Followers</p>
          </div>
          <div className="text-center">
            <span className="text-lg sm:text-xl font-bold">0</span>
            <p className="text-gray-600 text-xs sm:text-sm">Following</p>
          </div>
        </div>
        <hr className="xl:w-6/12 md:w-11/12 w-full border-t-2 border-gray-300 mt-6" />
      </div>

      {/* Photo Gallery Section */}
      <div className="photo-gallery mt-6 px-4 sm:px-8 max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Posts</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {/* Replace these with real image URLs or paths */}
          <img src={assets.ph} alt="photo1" className="w-full h-32 sm:h-40 object-cover rounded"/>
          <img src={assets.ph} alt="photo2" className="w-full h-32 sm:h-40 object-cover rounded"/>
          <img src={assets.ph} alt="photo3" className="w-full h-32 sm:h-40 object-cover rounded"/>
          <img src={assets.ph} alt="photo4" className="w-full h-32 sm:h-40 object-cover rounded"/>
          <img src={assets.ph} alt="photo5" className="w-full h-32 sm:h-40 object-cover rounded"/>
          <img src={assets.ph} alt="photo6" className="w-full h-32 sm:h-40 object-cover rounded"/>
          <img src={assets.ph} alt="photo7" className="w-full h-32 sm:h-40 object-cover rounded"/>
          <img src={assets.ph} alt="photo8" className="w-full h-32 sm:h-40 object-cover rounded"/>
          <img src={assets.ph} alt="photo9" className="w-full h-32 sm:h-40 object-cover rounded"/>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
