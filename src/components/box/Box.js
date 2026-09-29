import { useEffect, useRef } from "react";
import styles from "./Box.module.css"
import LazyIcon from "../lazyIcon/LazyIcon";
import ScrollReveal from "scrollreveal";
const Box=(props)=>{
    useEffect(()=>{
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
        ScrollReveal().reveal(`.${styles.description}`, {
          duration: 1000,
          distance: "30px",
          origin: "bottom", // Start from the right side
          easing: "ease-out",
          reset:false,
          viewFactor: 0.2,
          interval: 300, // Delay between each element
          delay: 200, // Delay before the animation starts
          scale: 1, // Set scale to 1 or null
        });
      
        ScrollReveal().reveal(`.${styles.icon}`, {
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
    },[])
return <>
<div className={styles.box}>
        <div className={styles.title}>{props.title}</div>
     <div className={styles.icon}><LazyIcon icon={props.icon} size="100%" loop /></div>  
        <div className={styles.description}>{props.description}</div>
    </div>
</>

}
export default Box