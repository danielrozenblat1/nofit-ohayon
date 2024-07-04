import styles from "./FirstScreenPhoto.module.css"
import nofit from "../../images/נופית תדמית צילום.png"
import StilsImages from "../../components/recommend/StilsImages"

const FirstScreenPhoto=()=>{
  


return <>
<div className={styles.title}>להוציא את העסק שלך הכי אלגנטי שאפשר</div>
<div className={styles.center}><img className={styles.image} src={nofit} alt="נופית אוחיון צילום"/></div>
<StilsImages title="איך? ככה!"/>
</>


}
export default FirstScreenPhoto