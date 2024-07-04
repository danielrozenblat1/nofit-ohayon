import styles from "./SecondScreen.module.css"
import Step from "../../components/steps/Step"
import Button from "../../components/button/Button"
import CustomButton from "../../components/button/CustomButton"

const SecondScreenSocial=()=>{
    return <>
  <div className={styles.title}>איך ניהול סושיאל תורם לי?</div>
  <Step number="1" title="תדמית" description="מומחית בתחום הסושיאל תנהל לך את העמוד , אחת יודעת מה תופס את העין, שיודעת מה מושך גולשים ולקוחות פוטנציאלים ואחת שיודעת להפוך כל עמוד סושיאל לתדמית עסקית אלגנטית ,"/>
  <Step number="2" title="חסכון בזמן" description="במקום לשרוף שעות ביום על הפרטים הקטנים,עיצובים ונראות העמוד שלך תוכל לעבוד על העסק שלך ולא לדאוג למה שקורה בסושיאל!"/>
  <Step number="3" title="יצירת מעורבות והגדלת חשיפה" description="מומחית בתחום הסושיאל יודעת איך ליצור מעורבות ואיך האלגוריתמים של הרשתות עובדות בצורה שתיצור לעסק שלך חשיפה!"/>
  <CustomButton text="נופית, בואי נדבר"/>
    </>
}
export default SecondScreenSocial