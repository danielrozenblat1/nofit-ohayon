import styles from "./PhotoGraphWrapper.module.css"
import {useEffect,useRef} from "react"
import FirstScreenPhoto from "./screens/FirstScreenPhoto"
import NavBar from "../components/NavBar/NavBar"



import ByMe from "../components/ByMe/ByMe"
import ForthScreenPhoto from "./screens/ForthScreenPhoto"
import SecondScreenPhoto from "./screens/SecondScreen"


const PhotoGraphWrapper=()=>{
  


return <>
<div className={styles.background}>
<NavBar/>
<FirstScreenPhoto/>
<SecondScreenPhoto/>

<ForthScreenPhoto/>

<ByMe/>
</div>
</>


}
export default PhotoGraphWrapper