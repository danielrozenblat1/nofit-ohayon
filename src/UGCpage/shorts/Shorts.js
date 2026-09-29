import React, { useState, useRef, useEffect } from 'react';
import styles from './Shorts.module.css';

const LazyYoutubeEmbed = ({ videoId, index }) => {
  const ref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // ScrollReveal effect
  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
      
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px) scale(0.95)';
      element.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0) scale(1)';
            }, index * 100);
            observer.unobserve(element);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });
      
      observer.observe(element);
      
      return () => observer.disconnect();
    }
  }, [index]);

  if (isPlaying) {
    return (
      <div className={styles.shortItem} ref={ref}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?loop=1&controls=1&rel=0&autoplay=1`}
          title={`Short ${index + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.iframe}
        />
      </div>
    );
  }

  return (
    <div className={styles.shortItem} ref={ref}>
      <div className={styles.thumbnail} onClick={() => setIsPlaying(true)}>
        <img
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt={`YouTube Short ${index + 1}`}
          loading="lazy"
          className={styles.thumbnailImage}
          onError={(e) => {
            // לא לכל שורט יש maxres - נופלים לגיבוי
            if (!e.currentTarget.dataset.fallback) {
              e.currentTarget.dataset.fallback = '1';
              e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }
          }}
        />
        <div className={styles.playButton}></div>
      </div>
    </div>
  );
};

const Shorts = () => {
  const titleRef = useRef(null);
  
  const shortsData = [
    '0IP6rNvQh9g',  // UGC - ספא ראש
    'Xse_sZSVTdM',  // UGC - ספא ראש
    'oo015dGgyZI',  // UGC - LEAVES
    '8-etCLEa91U',  // UGC - NOIZZ
    'VSQDR9_bzw0',  // UGC - smarTrike
    'S9y8w9jtZqI',  // UGC - גלידה גולדה
    'dpkFIpxAMMw',  // UGC - טבעול
    // הסרטונים הקודמים
    'DWXnVJ4XsAw',  // אופטיקל סנטר
    'NWKc6Me9fBY',  // אופטיקל סנטר
    'j-32DKMrJhg',  // פסטריה
    'vwUaP7hKo-k',  // יקב נווה ירק
    'VSWA49Hvuzs',  // TOGO
    '8-ZzyamO28o',  // מסעדת קלאסיק
    '6p5NFpFOe0w',  // בקבוקים
    '1C1fWGz4zBM',  // קיקו מילאנו
    '-v735WdWCBc',  // BOTANY
    'W2-JMxDracU',  // BOTANY
    'LXtBJKwKHBs',  // TOGO
  ];

  useEffect(() => {
    if (titleRef.current) {
      const element = titleRef.current;
      
      element.style.opacity = '0';
      element.style.transform = 'translateY(-20px)';
      element.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.320, 1)';
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
            }, 200);
            observer.unobserve(element);
          }
        });
      }, {
        threshold: 0.5
      });
      
      observer.observe(element);
      
      return () => observer.disconnect();
    }
  }, []);

  return (
    <div>
      <div className={styles.shortsContainer}>
        {shortsData.map((videoId, index) => (
          <LazyYoutubeEmbed 
            key={index} 
            videoId={videoId} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
};

export default Shorts;