import styles from "./Recommends.module.css"
import results from "../../images/נופית תוצאות.webp"
import CustomButton from "../button/CustomButton"




const Results=()=>{

  
   
    return <>
    <div className={styles.title}>להגיע לתוצאות האלה יכול להפסיק להיות חלום עבורך</div>
    <div className={styles.center}><img loading="lazy" decoding="async" className={styles.image} src={results} alt="נופית אוחיון תוצאות"/></div>
    <CustomButton text="אם רק תלחץ כאן"/>


    </>
}
export default Results