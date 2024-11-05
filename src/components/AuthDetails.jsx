// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => listen(); // Clean up the listener on unmount
  }, []);

  // Extract username from email
  const username = authUser ? authUser.email.split('@')[0] : '';

  // Handle scroll event for hide/show effect
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {authUser ? (
        <h1
          className={`text-5xl font-bold text-center ${
            isVisible ? 'fade-in-animation' : 'fade-out-animation'
          }`}
        >
          Hello, {username}!
        </h1>
      ) : (
        <p className="text-2xl text-center">Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;