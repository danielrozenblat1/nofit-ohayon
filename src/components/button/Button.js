import styles from "./Button.module.css"
import { useEffect, useRef } from "react"
import { Player } from "@lordicon/react"
import { NavLink } from "react-router-dom"

const Button = (props) => {
  const playerRef1 = useRef(null)

  useEffect(() => {
    playerRef1?.current?.playFromBeginning()
  }, [])

  const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
    }, 2000); // play again after 2.5 seconds
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <NavLink to={props.text} className={styles.buttonWrap} onClick={handleClick}>
      <div className={styles.text}>{props.text}</div>
      <div className={styles.icon}><Player icon={props.icon} size="90%" onComplete={handleComplete} ref={playerRef1} /></div>
    </NavLink>
  )
}

export default Button
