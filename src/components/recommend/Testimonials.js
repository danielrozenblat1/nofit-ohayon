import styles from "./Testimonials.module.css";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    text: "אין עלייך בעולם אלופה 😍🙏 תודה! יאללה תמשיכי להפציץ בסרטונים. את עורכת מדהים ואין מבסוט ממני עלייך",
    rating: 5,
  },
  {
    id: 2,
    text: "אני חייב להגיד מילה טובה על העריכה 👏👏👏 שעשית לדייגי המושבה באמת שאפו גדול, נראה ממש טוב!",
    rating: 5,
  },
  {
    id: 3,
    text: "מעולה! סרטון מעולה. את תותחית על. אין מילים. פוסט מרשים",
    rating: 5,
  },
  {
    id: 4,
    text: "נופית התותחית. כמו תמיד עושה עבודה מעולה תודה שיש לי אותך אהובה 💕",
    rating: 5,
  },
  {
    id: 5,
    text: "כשמגיע מגיע, רואים שהשקעת מכל הלב",
    rating: 5,
  },
  {
    id: 6,
    text: "היי נופית... חייבת לפרגן לך על הסבלנות הענקית שיש לך, המקצועיות והיחס האישי. קיבלת עמוד ריק מתוכן ומישהי שאין לה מושג באינסטגרם 😅 ותוך שבוע עשית פלאים! העמוד קיבל חיים עם תמונות הורסות ותוכן מעניין! ואני רק לומדת ולומדת כל יום ממך... תודה 💕💕💕",
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className={styles.stars}>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={index < rating ? styles.starFilled : styles.starEmpty}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${isVisible ? styles.cardVisible : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <StarRating rating={testimonial.rating} />
      <p className={styles.text}>"{testimonial.text}"</p>
    </div>
  );
};

const Testimonials = () => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      const cardWidth = container.querySelector(`.${styles.card}`)?.offsetWidth || 300;
      const gap = 24;
      const scrollAmount = cardWidth + gap;
      
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>מה הלקוחות אומרים</h2>
      <p className={styles.subtitle}>המלצות מלקוחות מרוצים</p>

      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.navButton} ${styles.navRight}`}
          onClick={() => scroll("right")}
          aria-label="הקודם"
        >
          ❯
        </button>

        <div className={styles.carouselContainer} ref={containerRef}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        <button
          className={`${styles.navButton} ${styles.navLeft}`}
          onClick={() => scroll("left")}
          aria-label="הבא"
        >
          ❮
        </button>
      </div>
    </section>
  );
};

export default Testimonials;