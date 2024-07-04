import { useEffect } from "react";
import styles from "./Step.module.css"
import ScrollReveal from "scrollreveal";
const Step =(props)=>{

    useEffect(()=>{
        ScrollReveal().reveal(`.${styles.description}`, {
            duration: 1000,
            distance: "30px",
            origin: "left", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
          ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "right", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
    },[])
  

return <>
    <div className={styles.box}>
            <div className={styles.circle}>{props.number}</div>
            <div className={styles.content}>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.description}>{props.description}</p>
            </div>
        </div>
    </>
}
export default Step