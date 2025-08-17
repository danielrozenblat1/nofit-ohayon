import styles from "./Me.module.css"
import nofit from "../../images/נופית אוחיון תדמית 2.png"

import CustomButton from "../button/CustomButton"
const Me=()=>{

 return <>
   <div className={styles.description}>מי אני שאוביל אותך לפריצה ברשתות החברתיות?</div>
    <h1 className={styles.title}>נופית אוחיון</h1>
    <div className={styles.center}><img className={styles.image} src={nofit} alt="נופית אוחיון"/></div>
    <div className={styles.description}>איזה כיף שהגעת עד לכאן!

אני נופית אוחיון, יוצרת תוכן UGC, צלמת ומתמחה בניהול סושיאל לעסקים ברשתות החברתיות. למדתי שיווק ברשתות החברתיות וכבר למעלה משלוש שנים שאני עוסקת בתחום, עוזרת לבעלי עסקים ליצור נוכחות דיגיטלית

ומאפשרת להם להביא את הטוב ביותר ללקוחותיהם.

אני כאן כדי לעזור לעסק שלך לצמוח ברשתות החברתיות, על ידי יצירת תוכן וצילומים מקצועיים שמעניקים להם מראה מרשים

ומפעילים את המגנט הקסום על לקוחותיהם!</div>
<CustomButton text="לחץ כאן לשיחת ייעוץ"/>
    </>

}
export default Me