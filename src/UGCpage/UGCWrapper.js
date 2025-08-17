import styles from "./UGCWrapper.module.css"
import {useEffect,useRef, useState} from "react"

import NavBar from "../components/NavBar/NavBar"
import FirstScreenUGC from "./screens/FirstScreenUGC"


import ByMe from "../components/ByMe/ByMe"
import NewImagesGrid2 from "./grid/NewImagesGrid2"
import NavBarNew from "../components/NewNav/NavBarNew"
import PrivacyPolicy from "../components/privacy/Privacy"


const UGCWrapper=()=>{
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
<FirstScreenUGC scrolled={scrolled}/>
<NewImagesGrid2/>
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
export default UGCWrapper