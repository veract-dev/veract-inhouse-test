// components/ScrollAnimation.js
'use client';
import { useEffect, useState } from 'react';

const ScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerPoint = window.innerHeight * 0.7; // Adjust this value as needed
      setIsVisible(scrollTop > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-animation ${isVisible ? 'visible' : ''}`}>
      {/* Your content goes here */}
      <h2>Scroll-triggered Content</h2>
      <p>This content will be revealed as you scroll down.</p>
    </div>
  );
};

export default ScrollAnimation;
