import styles from "./FirstScreenPhoto.module.css"
import nofit from "../../images/נופית תדמית.webp"
import StilsImages from "../../components/recommend/StilsImages"
import ForthScreenPhoto from "./ForthScreenPhoto"
import ScrollToButton from "../../components/button/ScrollToButton"

const FirstScreenPhoto=(props)=>{
  


return <>
<div className={props.scrolled?styles.titleP:styles.title}>להוציא את העסק שלך הכי אלגנטי שאפשר</div>
<div className={styles.center}><img loading="eager" decoding="async" fetchpriority="high" className={styles.image} src={nofit} alt="נופית אוחיון צילום"/></div>
<ScrollToButton text="לתמונות סטילס" targetId="stills"/>
<ForthScreenPhoto/>
<StilsImages title=""/>
</>


}
export default FirstScreenPhoto