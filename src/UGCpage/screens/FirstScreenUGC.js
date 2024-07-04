import styles from "./FirstScreenUGC.module.css"
import {useEffect,useRef} from "react"
import nofitUGC from "../../images/נופית אוחיון UGC.png"
import NewImagesGrid from "../grid/NewImageGrid"

const FirstScreenUGC=(props)=>{
  


return <>
<div className={props.scrolled? styles.backgroundP:styles.background}>
<div className={styles.description}>אוטנתיות זה שם המשחק</div>
<div className={styles.center}><img className={styles.image} src={nofitUGC} alt="נופית אוחיון"/></div>

</div>
</>


}
export default FirstScreenUGC