import styles from "./FirstScreenSocial.module.css"
import {useEffect,useRef} from "react"
import nofit from "../../images/נופית תדמית ניהול סושיאל.webp"
import SocialDesign from "../../components/recommend/SocialDesign"

const FirstScreenSocial=(props)=>{
  


return <>
 <>
<div className={props.scrolled? styles.backgroundP: styles.background}>
<div className={styles.description}>ניהול מקצועי לעמוד שלך - מביא תוצאות!</div>
<div className={styles.center}><img loading="eager" decoding="async" fetchpriority="high" className={styles.image} src={nofit}/></div>
<SocialDesign/>
</div>
</>
</>


}
export default FirstScreenSocial