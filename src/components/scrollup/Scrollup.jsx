import React, { useEffect, useContext } from 'react';
import { userContext } from '../../App';
import './scrollup.css';

const ScrollUp = () => {
    const { activeNav, setActiveNav } = useContext(userContext);
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollUp = document.querySelector('.scrollup');
            if (scrollUp) {  // ตรวจสอบว่ามี element หรือไม่
                if (window.scrollY >= 560) {
                    scrollUp.classList.add("show-scroll");
                } else {
                    scrollUp.classList.remove("show-scroll");
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <a href="#" className={activeNav === '#home' ? 'nav__link active-link scrollup':'nav__link scrollup'} onClick={() => setActiveNav('#home')} >
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    );
};

export default ScrollUp;
