import React, { useState } from 'react';
import "./Navbar.css";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className='navbar-container'>
            <div className='navbar-sub-container'>
                <div className='burger-menu' onClick={toggleDropdown}>
                    <GiHamburgerMenu className='burger-menu-icon' />
                    <p>Sort by Category</p>
                    {/* Dropdown content */}
                    {showDropdown && (
                        <ul className="dropdown-content">
                            <li><a href="#!">Product 1</a></li>
                            <li><a href="#!">Product 2</a></li>
                            {/* Add more dropdown items as needed */}
                        </ul>
                    )}
                </div>
                <div className={`navbar ${showDropdown ? 'show' : ''}`}>
                    <ul className='anim-nav'>
                        <li><a href="#!">| Home |</a></li>
                        <li><a href="#!">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
