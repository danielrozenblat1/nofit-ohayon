import styles from "./FirstScreenPhoto.module.css"
import nofit from "../../images/נופית תדמית.webp"
import StilsImages from "../../components/recommend/StilsImages"
import ForthScreenPhoto from "./ForthScreenPhoto"

const FirstScreenPhoto=(props)=>{
  


return <>
<div className={props.scrolled?styles.titleP:styles.title}>להוציא את העסק שלך הכי אלגנטי שאפשר</div>
<div className={styles.center}><img loading="eager" decoding="async" fetchpriority="high" className={styles.image} src={nofit} alt="נופית אוחיון צילום"/></div>
<ForthScreenPhoto/>
<StilsImages title=""/>
</>


}
export default FirstScreenPhoto