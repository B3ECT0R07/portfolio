import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [follower, setFollower] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('hoverable')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useEffect(() => {
    let animationFrameId;
    const animateFollower = () => {
      setFollower((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(animateFollower);
    };
    animationFrameId = requestAnimationFrame(animateFollower);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          left: position.x - 5,
          top: position.y - 5,
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: '#00f5a0',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: isClicking ? 'scale(0.5)' : 'scale(1)',
          transition: 'transform 0.1s',
          mixBlendMode: 'difference',
        }}
      />
      <div
        style={{
          position: 'fixed',
          left: follower.x - (isHovering ? 25 : 18),
          top: follower.y - (isHovering ? 25 : 18),
          width: isHovering ? 50 : 36,
          height: isHovering ? 50 : 36,
          borderRadius: '50%',
          border: `2px solid ${isHovering ? '#00f5a0' : 'rgba(0, 245, 160, 0.4)'}`,
          pointerEvents: 'none',
          zIndex: 99998,
          background: isHovering ? 'rgba(0, 245, 160, 0.1)' : 'transparent',
          transition: 'width 0.2s, height 0.2s, border-color 0.2s',
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
};

export default CustomCursor;