import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, mmenu, close } from '../assets';

const Navbar = () => {
    return (
        <nav
            className={`${styles.paddindX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");  // track active link(what user current on page )
                        window.scrollTo(0, 0); // scroll to top
                    }}
                >
                    <img src={logo} alt="logo.svg" className="w-9 h-9 object-contain" />
                    <p className="text-white text-[18px] font-bold cursor-pointer">David <span className='sm:vlock hidden'>| Software Engineer</span></p>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
