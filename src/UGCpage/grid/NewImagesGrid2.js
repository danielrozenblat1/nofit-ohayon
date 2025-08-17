import styles from "./NewImageGrid.module.css"
import CustomButton from "../../components/button/CustomButton"
import grid1 from "../../videos/מותגים נופית 1.mp4"
import grid2 from "../../videos/מותגים נופית 2.mp4"
import grid3 from "../../videos/נופית מותגים 3.mp4"
import grid4 from "../../videos/מותגים נופית 4.mp4"
import grid5 from "../../videos/מותגים נופית 5.mp4"
import grid6 from "../../videos/מותגים נופית 6.mp4"
import grid7 from "../../videos/מותגים נופית 7.mp4"
import grid8 from "../../videos/מותגים נופית 8.mp4"
import grid9 from "../../videos/נופית UGC 11.mp4"
import grid10 from "../../videos/נופית UGC 12.mp4"
import grid11 from "../../videos/קפה 1.mp4"
import grid12 from "../../videos/נופית UGC 5 (2).mp4"
import { useEffect, useState } from "react"
import ScrollReveal from "scrollreveal"

const NewImagesGrid2=()=>{

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
    return <>
<div className={styles.title}>קחו טעימה ממותגים שכבר עשו את הצעד</div>
<div className={styles.description}>גללו למטה והתרשמו</div>
    <div className={styles.container}>
    <div className={styles.row2}>
    <video className={styles.image3}  muted  controls alt="נופית UGC">
                    <source src={grid1} type="video/mp4" />
                </video>
                <video className={styles.image3}  muted  controls alt="נופית UGC">
                    <source src={grid2} type="video/mp4" />
                </video>
    <video className={styles.image3}  muted  controls alt="נופית UGC">
                    <source src={grid3} type="video/mp4" />
                </video>
                <video className={styles.image3}  muted  controls alt="נופית UGC">
                    <source src={grid4} type="video/mp4" />
                </video>
          
                <video className={styles.image3}  muted  controls alt="נופית UGC">
                    <source src={grid10} type="video/mp4" />
                </video>
                <video className={styles.image3}  muted  controls alt="נופית UGC">
                    <source src={grid12} type="video/mp4" />
                </video>
   
    </div>
    <div className={styles.row2}>
    <video className={styles.image3}  muted playsInline controls alt="נופית UGC">
                    <source src={grid5} type="video/mp4" />
                </video>
                <video className={styles.image3}  muted  controls alt="נופית UGC">
                    <source src={grid6} type="video/mp4" />
                </video>
    <video className={styles.image3}  muted  controls alt="נופית UGC">
                    <source src={grid7} type="video/mp4" />
                </video>
                <video className={styles.image3}  muted  controls alt="נופית UGC">
                    <source src={grid8} type="video/mp4" />
                </video>
           
                <video className={styles.image3}  muted  controls alt="נופית UGC">
                    <source src={grid9} type="video/mp4" />
                </video>
          
                <video className={styles.image3}  muted  controls alt="נופית UGC">
                    <source src={grid11} type="video/mp4" />
                </video>
    </div>
    {/* <div className={styles.row}>
    <img className={styles.image3}  alt="נופית UGC"src={image6}/>
    </div> */}
    {/* <div className={styles.row2}>


    </div> */}
  

    </div>
    <div className={styles.description}>וזו רק טעימה קטנה מתוך עשרות סרטונים..</div>
    <CustomButton text="לחץ כאן לעוד מידע בנושא UGC" />
    </>
    }
    export default NewImagesGrid2