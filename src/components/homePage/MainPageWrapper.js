import styles from "./MainPageWrapper.module.css"
import {useEffect,useRef, useState} from "react"
import FirstScreenHome from "./screens/FirstScreen"

import NavBar from "../NavBar/NavBar"
import SocialDesign from "../recommend/SocialDesign"
import Recomends from "../recommend/Recommends"
import AllRecommends from "../recommend/AllRecommends"
import Me from "../me/Me"
import ByMe from "../ByMe/ByMe"
import NavBarNew from "../NewNav/NavBarNew"
import NewImagesGrid3 from "../../UGCpage/grid/NewImagesGrid3"
import PrivacyPolicy from "../privacy/Privacy"

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
 <NavBarNew scrolled={scrolled}/>
<FirstScreenHome scrolled={scrolled}/>
<Recomends/>
<SocialDesign/>
<AllRecommends/>
<NewImagesGrid3/>
<Me/>
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
export default MainPageWrapper