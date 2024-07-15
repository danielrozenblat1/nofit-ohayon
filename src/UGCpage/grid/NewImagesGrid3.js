import styles from "./NewImageGrid.module.css"
import CustomButton from "../../components/button/CustomButton"
import grid1 from "../../videos/נופית סרטון המלצה 1.mp4"
import grid2 from  "../../videos/נופית סרטון המלצה 2.mp4"
import grid3 from  "../../videos/נופית סרטון המלצה 3.mp4"


import { useEffect, useState } from "react"
import ScrollReveal from "scrollreveal"

const NewImagesGrid3=()=>{

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
<div className={styles.title}>תשמעו חלק מהלקוחות שלי</div>

    <div className={styles.container}>
    <div className={styles.row1}>
    <video className={styles.image2}  muted  controls alt="נופית המלצות">
                    <source src={grid1} type="video/mp4" />
                </video>
                <video className={styles.image2}  muted  controls alt="נופית המלצות">
                    <source src={grid2} type="video/mp4" />
                </video>
                <video className={styles.image2}  muted playsInline controls alt="נופית המלצות">
                    <source src={grid3} type="video/mp4" />
                </video>
          
        
   
    </div>
   
    {/* <div className={styles.row}>
    <img className={styles.image3}  alt="נופית המלצות"src={image6}/>
    </div> */}
    {/* <div className={styles.row2}>


    </div> */}
  

    </div>

    <CustomButton text="לחץ כאן לשיחת ייעוץ חינמית" />
    </>
    }
    export default NewImagesGrid3