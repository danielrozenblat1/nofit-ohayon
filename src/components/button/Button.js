import styles from "./Button.module.css"
import LazyIcon from "../lazyIcon/LazyIcon"
import { NavLink } from "react-router-dom"

const Button = (props) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <NavLink to={props.text} className={styles.buttonWrap} onClick={handleClick}>
      <div className={styles.text}>{props.text}</div>
      <div className={styles.icon}><LazyIcon icon={props.icon} size="90%" replayAfter={2000} /></div>
    </NavLink>
  )
}

export default Button
