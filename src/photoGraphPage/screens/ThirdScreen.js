import styles from "./ThirdScreen.module.css"
import { useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal"
import { Player } from "@lordicon/react"


const ThirdScreenPhoto=()=>{
    const playerRef1=useRef()
    const playerRef2=useRef()
    const playerRef3=useRef()
    const playerRef4=useRef()
    const playerRef5=useRef()
    const handleComplete1 = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2000); // play again after 2.5 seconds
      };
      const handleComplete2 = () => {
        setTimeout(() => {
          playerRef2?.current?.playFromBeginning();
        }, 2000); // play again after 2.5 seconds
      };
      const handleComplete3 = () => {
        setTimeout(() => {
          playerRef3?.current?.playFromBeginning();
        }, 2000); // play again after 2.5 seconds
      };
      const handleComplete4 = () => {
        setTimeout(() => {
          playerRef4?.current?.playFromBeginning();
        }, 2000); // play again after 2.5 seconds
      };
    useEffect(()=>{
      
        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
          ScrollReveal().reveal(`.${styles.section}`, {
              duration: 1000,
              distance: "30px",
              origin: "right", // Start from the right side
              easing: "ease-in-out",
              reset:false,
              viewFactor: 0.2,
              interval: 300, // Delay between each element
              delay: 200, // Delay before the animation starts
              scale: 1, // Set scale to 1 or null
            });
            ScrollReveal().reveal(`.${styles.stepHeader}`, {
              duration: 1000,
              distance: "30px",
              origin: "top", // Start from the right side
              easing: "ease-in-out",
              reset:false,
              viewFactor: 0.2,
              interval: 300, // Delay between each element
              delay: 200, // Delay before the animation starts
              scale: 1, // Set scale to 1 or null
            });
        playerRef1.current?.playFromBeginning();
        playerRef2.current?.playFromBeginning();
        playerRef3.current?.playFromBeginning();
        playerRef4.current?.playFromBeginning();    
        playerRef5.current?.playFromBeginning();  
    },[])


   

return <>
<div className={styles.title}>למה צילומי תדמית הם כל כך חשובים ?</div>
<div className={styles.bigWrapper}>

<div className={styles.step}>
<div className={styles.icons}>
<Player ref={playerRef1} size="100%" onComplete={handleComplete1}
icon={polaroid}/>
</div>
<div className={styles.text}>

    <div className={styles.stepHeader}>מקצועיות</div>
    <div className={styles.section}>צילומים מקצועיים משדרים מקצועיות ואמינות, התמונות יוצרות רושם ראשוני חיובי. 
צילומי תדמית איכותיים יכולים לסייע לבידול העסק ולהבליט אותו בין המתחרים.</div>
</div>
</div>
{/* חץ לשלב הבא */}

<div className={styles.step}>

<div className={styles.text}>

 
<div className={styles.stepHeader}>מיתוג</div>
    <div className={styles.section}>תמונות מקצועיות יכולות לסייע ביצירת זהות מיתוגית אחידה ומקצועית, שמשדרת את הערכים והמסרים שהעסק רוצה להעביר.</div>
</div>
<div className={styles.icons}>
<Player ref={playerRef2} delay={500} size="100%" onComplete={handleComplete2}
icon={suit}/>
</div>
</div>

{/* חץ לשלב הבא */}

<div className={styles.step}>
<div className={styles.icons}>
<Player ref={playerRef3} size="100%" onComplete={handleComplete3}
icon={camera}/>
</div>
<div className={styles.text}>

    <div className={styles.stepHeader}>תקשורות עם הלקוחות</div>
    <div className={styles.section}>צילומי תדמית מאפשרים ללקוחות לראות מי עומד מאחורי העסק,
מאחורי המוצרים שהם רכשו, 
מה שמקנה תחושה אישית וחמה יותר ללקוחות ומגביר את האמון.</div>
</div>
</div>




</div>





</>


}
export default ThirdScreenPhoto