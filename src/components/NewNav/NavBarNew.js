import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBarNew.module.css';
import logo from '../../images/נופית לוגו.png';
import { FaInstagram, FaFacebook, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const NavBarNew = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 0) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
          lastScrollY = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    const phoneNumber = "+972507690070";
    const message = "היי נופית ,אני רוצה לשמוע ממך עוד על..";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { name: 'ראשי', route: '/' },
    { name: 'UGC', route: '/UGC' },
    { name: 'ניהול סושיאל', route: '/ניהול סושיאל מדיה' },
    { name: 'צילום', route: '/צילום' }
  ];

  return (
    <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ''}`}>
      {windowWidth <= 850 && (
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      )}
      {windowWidth <= 850 && (
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
      )}
      {isMenuOpen && windowWidth <= 850 && (
        <div className={styles.mobileMenu}>
          {menuItems.map((item, index) => (
            <NavLink 
              key={index} 
              to={item.route} 
              onClick={closeMenu}
              exact
            >
              {item.name}
            </NavLink>
          ))}
          <div className={styles.center}>
            <img className={styles.image} src={logo} alt="גל יאקובצאק לוגו" />
          </div>
        </div>
      )}
      {windowWidth > 850 && (
        <div className={styles.menuItems}>
          {menuItems.map((item, index) => (
            <NavLink 
              key={index} 
              to={item.route}
              exact
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
      {window.innerWidth > 1050 && (
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
      )}
      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com/nofit.ohayon/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a onClick={handleClick}><FaWhatsapp /></a>
      </div>
    </nav>
  );
};

export default NavBarNew;
