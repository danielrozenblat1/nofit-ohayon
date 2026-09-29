import styles from "./FirstScreenUGC.module.css"
import BrandLogos from "../../components/brandLogos/BrandLogos"

const FirstScreenUGC=(props)=>{

return <>
<div className={props.scrolled? styles.backgroundP:styles.background}>
<div className={styles.description}>אוטנתיות זה שם המשחק</div>
<div className={styles.subDescription}>המותגים שכבר עשו את זה איתי</div>
<BrandLogos/>
</div>
</>


}
export default FirstScreenUGC
