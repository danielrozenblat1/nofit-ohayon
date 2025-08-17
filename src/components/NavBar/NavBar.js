import React, { useEffect, useState } from 'react';
import styles from './NavBar.module.css';
import logo from "../../images/נופית לוגו.png"
import {NavLink} from "react-router-dom"
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [width, setWidth] = useState(window.innerWidth); 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
        document.body.style.overflow = 'hidden';
    } 
};
    const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const closeMenu = () => {
    setIsOpen(false);
  
        document.body.style.overflowY = 'auto';

  };

  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  return (
    <>
      <nav className={scrolled ? styles.floatingNav :styles.navbar}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <img className={styles.image} src={logo} alt="נופית לוגו"/>
          </div>
        </div>
       {width<850 && <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>}
      
         {width>=850 && <div className={styles.row}>
         <NavLink onClick={handleClick} className={styles.navLink} to="/UGC"><div >מותגים - UGC</div></NavLink>
         <NavLink  onClick={handleClick} className={styles.navLink} to="/ניהול סושיאל מדיה"><div >ניהול סושיאל</div></NavLink>
          <NavLink  onClick={handleClick} className={styles.navLink} to="/צילום"><div >צילום</div></NavLink>
          <NavLink  onClick={handleClick} className={styles.navLink} to="/"><div>עמוד הבית</div></NavLink>
      
            </div>}
      
        <div className={`${styles.navLinks} ${isOpen ? styles.openLinks : ''}`}>
          <div className={styles.closeButton} onClick={closeMenu}>
            &times;
          </div>
          <ul>
    
          <li><NavLink  className={styles.navLink}  onClick={closeMenu} to="/"><div>עמוד הבית</div></NavLink></li>
            <li><NavLink className={styles.navLink}  onClick={closeMenu} to="/צילום"><div >צילום</div></NavLink></li>
            <li><NavLink className={styles.navLink} onClick={closeMenu} to="/UGC"><div >מותגים - UGC</div></NavLink></li>
            <li><NavLink className={styles.navLink} onClick={closeMenu} to="/ניהול סושיאל מדיה"><div >ניהול סושיאל</div></NavLink></li>
            <div className={styles.logo}>
            <img className={styles.navImage} src={logo} alt="נופית לוגו"/>
          </div>
          </ul>
        </div>
      </nav>
      {isOpen && (
        <div className={`${styles.overlay} ${styles.openOverlay}`}></div>
      )}
    </>
  );
};

export default NavBar;