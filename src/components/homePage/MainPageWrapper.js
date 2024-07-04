import styles from "./MainPageWrapper.module.css"
import {useEffect,useRef, useState} from "react"
import FirstScreenHome from "./screens/FirstScreen"

import NavBar from "../NavBar/NavBar"
import SocialDesign from "../recommend/SocialDesign"
import Recomends from "../recommend/Recommends"
import AllRecommends from "../recommend/AllRecommends"
import Me from "../me/Me"
import ByMe from "../ByMe/ByMe"

const MainPageWrapper=()=>{
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
 <NavBar />
<FirstScreenHome scrolled={scrolled}/>
<Recomends/>
<SocialDesign/>
<AllRecommends/>
<Me/>
<ByMe/>
</div>
</>


}
export default MainPageWrapper