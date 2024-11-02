// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid sm:grid-cols-[2fr_1fr_1fr] gap-14 my-10 mt-40 text-sm items-center sm:items-start text-center sm:text-left'>
            {/*----Left Section----*/}
            <div>
                <img className='mb-5 w-32 mx-auto sm:mx-0' src={assets.logo1} alt="our-logo" />
            </div>
            {/*----Center Section----*/}
            <div>
                <p className='text-xl font-medium mb-3'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/*----Right Section----*/}
            <div>
                <p className='text-xl font-medium mb-3'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-123-800-1234</li>
                    <li>Reppjio@gmail.com</li>
                </ul>
            </div>
        </div>
        {/*----Copyright Text----*/}
        <div>
            <hr />
            <p className='py-5 text-sm text-center text-gray-300'>Copyright 2024 FitJoy - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer;
