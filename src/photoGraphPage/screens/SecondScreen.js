import Box from "../../components/box/Box"
import CustomButton from "../../components/button/CustomButton"
import styles from "./SecondScreen.module.css"
import here from "../../Icons/wired-gradient-956-engage-users.json"
import portfolio from "../../Icons/wired-outline-1023-portfolio.json"
import magnet from "../../Icons/wired-gradient-950-attract-customers.json"
const SecondScreenPhoto=()=>{


    return <>
<div className={styles.title}>"אבל מה אם אני ביישן"</div>
<div className={styles.description}>אני מבינה אותך לגמרי! אני רוצה שתדע שלרוב בני האדם זה לא טבעי להתנהג בטבעיות מול מצלמה ובמיוחד לדבר ולהעביר את המסרים שלך אם מדובר בסרטונים</div>
<div className={styles.title}>אתה צריך להבין דבר אחד..</div>
<div className={styles.description}>החשיפה הזו תביא לך..</div>
<Box icon={magnet} title="לקוחות בשפע"  description="ברגע שתופיע ברשת, יותר אנשים יחשפו אליך וליותר אנשים תהיה האופציה להכיר אותך, להתעניין ולשמוע ממך עוד"/>
<Box icon={portfolio} title="בידול ותדמית מקצועית"  description="כמו שאמרתי.. רוב האנשים ביישנים/מפחדים להחשף, ברגע שתהפוך להיות מהמיעוט שכן עושה את הצעד אתה כבר שם את עצמך בעליונות של הרוב מהבחינה הזו"/>
<Box  icon={here} title="נוכחות ברשת" description="אנשים ייחשפו אליך, אנשים יכירו את העסק שלך, אנשים יפנו אליך ויכירו אותך הרבה יותר כי אתה פשוט תהיה נוכח!"/>
<CustomButton text="אני רוצה לשמוע עוד"/>
    </>
}
export default SecondScreenPhoto