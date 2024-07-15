import styles from "./PhotoGraphWrapper.module.css"
import {useEffect,useRef, useState} from "react"
import FirstScreenPhoto from "./screens/FirstScreenPhoto"
import NavBar from "../components/NavBar/NavBar"



import ByMe from "../components/ByMe/ByMe"
import ForthScreenPhoto from "./screens/ForthScreenPhoto"
import SecondScreenPhoto from "./screens/SecondScreen"
import NavBarNew from "../components/NewNav/NavBarNew"


const PhotoGraphWrapper=()=>{
  
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
<NavBarNew />
<FirstScreenPhoto scrolled={scrolled}/>

<SecondScreenPhoto/>



<ByMe/>
</div>
</>


}
export default PhotoGraphWrapper