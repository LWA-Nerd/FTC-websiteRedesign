import React from 'react';
import logo from '../../assets/logo.png';
import './navbar.css';

function Navbar() {
    return (
    <nav className='bg-secondary h-[90px]'>
        <div className='flex items-center justify-between px-8 h-full text-white'>
            <div>
                <a className="flex items-center space-x-4 hover:cursor-pointer" href='#'>
                    <img src={logo} alt='Robothletes Logo' className="w-20 h-20 rounded-full"/>
                    <h1 className='text-2xl font-bold'>Robothletes</h1>
                </a>
            </div>
            <div className='flex space-x-10'>
                <a href='#' className='nav-link'>About</a>
                <a href='#' className='nav-link'>FIRST</a>
                <a href='#' className='nav-link'>Robots</a>
                <a href='#' className='nav-link'>Contact Us</a>
                <a href='#' className='nav-link'>Support Us</a>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;