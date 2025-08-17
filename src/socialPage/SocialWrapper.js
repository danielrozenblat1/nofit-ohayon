import styles from "./SocialWrapper.module.css"
import {useEffect,useRef, useState} from "react"

import NavBar from "../components/NavBar/NavBar"

import ByMe from "../components/ByMe/ByMe"

import FirstScreenSocial from "./screens/FirstScreenSocial"
import SecondScreenSocial from "./screens/SecondScreen"
import NavBarNew from "../components/NewNav/NavBarNew"
import PrivacyPolicy from "../components/privacy/Privacy"


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
<NavBarNew scrolled={scrolled}/>
<FirstScreenSocial scrolled={scrolled}/>
<SecondScreenSocial/>
<PrivacyPolicy
  ownerName="נופית אוחיון"
  email="nofitmarketing@gmail.com"
  phone="+972 50-769-0070"
  domain="https://nofitmarketing.co.il"
/>
<ByMe/>
</div>
</>


}
export default SocialWrapper