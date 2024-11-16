"use client"

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <div>
                <div className="logo">
                    <Link href="/">
                    <img
                        src="https://res.cloudinary.com/dafjjvcsh/image/upload/v1731002711/Image/btierp6prpxswtb3qaq9.png"
                        alt="logo"
                    />
                    </Link>
                </div>
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
                ☰
            </div>
            <ul id="menu" className={menuOpen ? 'open' : 'gap-2'}>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About Us
                    </Link>
                </li>
                <li className="last-nav-li">
                    <Link href="/dmca">
                        DMCA
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
