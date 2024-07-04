import styles from "./SocialWrapper.module.css"
import {useEffect,useRef, useState} from "react"

import NavBar from "../components/NavBar/NavBar"

import ByMe from "../components/ByMe/ByMe"

import FirstScreenSocial from "./screens/FirstScreenSocial"
import SecondScreenSocial from "./screens/SecondScreen"


const SocialWrapper=()=>{
  
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        if (window.pageYOffset > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }};
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

return <>
<div className={styles.background}>
<NavBar/>
<FirstScreenSocial scrolled={scrolled}/>
<SecondScreenSocial/>
<ByMe/>
</div>
</>


}
export default SocialWrapper