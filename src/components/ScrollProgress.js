import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      if (totalHeight > 0) {
        setProgress((scrollPosition / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: `${progress}%`,
      height: '4px',
      background: 'linear-gradient(90deg, #00f5a0, #00d9f5, #f5a000)',
      zIndex: 99999,
      transition: 'width 0.1s ease-out',
      boxShadow: '0 0 10px rgba(0, 245, 160, 0.5)',
    }} />
  );
};

export default ScrollProgress;