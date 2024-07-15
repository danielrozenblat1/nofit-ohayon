import styles from "./FirstScreen.module.css"
import {useEffect,useRef} from "react"
import nofit from "../../../images/נופית תדמית.png"
import socialIcon from "../../../Icons/wired-gradient-962-social-media-marketing.json"
import CameraIcon from "../../../Icons/wired-gradient-1035-polaroid-camera.json"
import ugcIcon from "../../../Icons/wired-gradient-960-feedback.json"
import Button from "../../button/Button"
const FirstScreenHome=(props)=>{
  


return <>
<div className={styles.background}>
<h1 className={props.scrolled? styles.nameP :styles.name}>Nofit Marketing</h1>
<div className={styles.description}>צילום | ניהול סושיאל מדיה </div>
<div className={styles.center}><img className={styles.image} src={nofit} alt="נופית אוחיון"/></div>
<div className={styles.who}>הדרך שלך לפריצה ברשת מתחילה כאן!</div>
<div className={styles.column}>
<Button icon={CameraIcon} text="צילום"/>
<Button icon={socialIcon} text="ניהול סושיאל מדיה"/>
<Button icon={ugcIcon} text="UGC"/>
</div>
</div>
</>


}
export default FirstScreenHome