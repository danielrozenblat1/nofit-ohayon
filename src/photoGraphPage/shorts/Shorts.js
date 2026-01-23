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
        />
        <div className={styles.playButton}></div>
      </div>
    </div>
  );
};

const Shorts = () => {
  const titleRef = useRef(null);
  
  const shortsData = [
    'b2bPF7ULU0E',
    'T1oPsRhDks8',
    'GprVNRxAjF4',
    'b0l-jM9PDmY',
    'f_atY5SdthM',
    'eBvIJ_yHY9U',
    '0uedj5glImI',
    'JzLj9fJ2OsI',
    'GXreUbtf3ec',
    'EW9gh65YjeU',
    '1dY5tG9ZAsQ',
    'YMmgl_Y2PbA',
    'hA5EBhOIuMk',
    'tJo-lXpcp5g',
    'T4tk1aEzEYM',
    'HsmaeKXgOuk',
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