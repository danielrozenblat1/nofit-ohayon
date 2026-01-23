import styles from "./NewImageGrid.module.css"
import CustomButton from "../../components/button/CustomButton"

import { useEffect, useState } from "react"
import ScrollReveal from "scrollreveal"
import Shorts from "../../photoGraphPage/shorts/Shorts"

const NewImagesGrid=()=>{

const [zoom,setZoom]=useState(false)


    useEffect(()=>{
        ScrollReveal().reveal(`.${styles.image1}`, {
            duration: 600,
            distance: "60px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 200,
            delay: 100,
            scale: 1,
          });
          ScrollReveal().reveal(`.${styles.image2}`, {
            duration:600,
            distance: "60px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
          });
          ScrollReveal().reveal(`.${styles.image3}`, {
            duration:600,
            distance: "60px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 200,
            delay: 100,
            scale: 1,
          });
    },[])

    //  הסרטון השני בשורה בצד ימין במקום הסרטון של הדלי - להחליף בסרטון שהיא תשלח לי
    return <>
<div className={styles.title}>היום בלי סרטוני רילס לעסק - אתה לא קיים!</div>
<div className={styles.description}>גללו למטה והתרשמו ממקבץ סרטונים שצילמתי ללקוחות שלי</div>
    {/* <div className={styles.container}>
    <div className={styles.row2}>
    <video className={styles.image3}  muted playsInline controls alt="נופית UGC">
                    <source src={grid1} type="video/mp4" />
                </video>
                <video className={styles.image1}  muted playsInline controls alt="נופית UGC">
                    <source src={grid2} type="video/mp4" />
                </video>
    <video className={styles.image3}  muted playsInline controls alt="נופית UGC">
                    <source src={grid3} type="video/mp4" />
                </video>
                <video className={styles.image3}  muted playsInline controls alt="נופית UGC">
                    <source src={grid4} type="video/mp4" />
                </video>
       
                <video className={styles.image3}  muted playsInline controls alt="נופית UGC">
                    <source src={grid11} type="video/mp4" />
                </video>

    </div>
    <div className={styles.row2}>
    <video className={styles.image3}  muted playsInline controls alt="נופית UGC">
                    <source src={grid6} type="video/mp4" />
                </video>
                <video className={styles.image1}  muted playsInline controls alt="נופית UGC">
                    <source src={grid7} type="video/mp4" />
                </video>
    <video className={styles.image3}  muted playsInline controls alt="נופית UGC">
                    <source src={grid8} type="video/mp4" />
                </video>
                <video className={styles.image3}  muted playsInline controls alt="נופית UGC">
                    <source src={grid9} type="video/mp4" />
                </video>
        
                <video className={styles.image3}  muted playsInline controls alt="נופית UGC">
                    <source src={grid12} type="video/mp4" />
                       </div>
                </video> */}

        
 
    {/* <div className={styles.row}>
    <img className={styles.image3}  alt="נופית UGC"src={image6}/>
    </div> */}
    {/* <div className={styles.row2}>

    </div>
    </div> */}
  

<Shorts/>
    <div className={styles.description}>וזו רק טעימה קטנה מתוך עשרות סרטונים..</div>
    <CustomButton text="לחץ כאן לעוד מידע" />
    </>
    }
    export default NewImagesGrid