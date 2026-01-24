import styles from "./FirstScreen.module.css"
import {useEffect, useRef, useState} from "react"
import nofit from "../../../images/נופית תדמית.png"
import socialIcon from "../../../Icons/wired-gradient-962-social-media-marketing.json"
import CameraIcon from "../../../Icons/wired-gradient-1035-polaroid-camera.json"
import ugcIcon from "../../../Icons/wired-gradient-960-feedback.json"
import Button from "../../button/Button"

const AnimatedNumber = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime;
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref} className={styles.animatedNumber}>
      {count}{suffix}
    </span>
  );
};

const FirstScreenHome = (props) => {
  return (
    <>
      <div className={styles.background}>
        <h1 className={props.scrolled ? styles.nameP : styles.name}>Nofit Marketing</h1>
        <div className={styles.description}>צילום | ניהול סושיאל מדיה</div>
        <div className={styles.center}>
          <img className={styles.image} src={nofit} alt="נופית אוחיון" />
        </div>
        
        {/* Statistics Section */}
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <AnimatedNumber end={5} duration={1500} />
            <span className={styles.statLabel}>שנות ניסיון</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <AnimatedNumber end={500} duration={2000} suffix="+" />
            <span className={styles.statLabel}>סרטונים</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <AnimatedNumber end={50} duration={1800} suffix="+" />
            <span className={styles.statLabel}>לקוחות מרוצים</span>
          </div>
        </div>

        <div className={styles.who}>הדרך שלך לפריצה ברשת מתחילה כאן!</div>
        <div className={styles.column}>
          <Button icon={CameraIcon} text="צילומי סושיאל" />
          <Button icon={socialIcon} text="ניהול סושיאל מדיה" />
          <Button icon={ugcIcon} text="UGC" />
        </div>
      </div>
    </>
  );
};

export default FirstScreenHome;