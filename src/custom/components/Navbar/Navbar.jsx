import React, { useEffect, useState } from 'react';
import './Navbar.scss';

function Navbar() {
    const [navbarStyles, setNavbarStyles] = useState(1);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 425) {
                setNavbarStyles(2);
            } else if (window.scrollY < 425) {
                setNavbarStyles(1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navbarStyle1 = {
        backgroundColor: 'transparent',
        boxShadow: 'none'
    };

    const navbarStyle2 = {
        backgroundColor: 'rgba(24, 24, 24, 0.7)',
    };

    const scrollToContact = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
        setIsMenuOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setIsMenuOpen(false);
    };

    return (
        <nav className={`navbar ${navbarStyles === 2 ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="navbar-container" style={navbarStyles === 1 ? navbarStyle1 : navbarStyle2}>
                <div className='logo-container'>
                    <img src="/assets/logowhite.png" alt="Allu Cabs Cochin Logo" onClick={scrollToTop} />
                </div>
                
                <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`nav-options ${isMenuOpen ? 'show' : ''}`}>
                    <a className='nav-link' onClick={scrollToTop}>Home</a>
                    <a className='nav-link' onClick={scrollToContact}>Contact Us</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;