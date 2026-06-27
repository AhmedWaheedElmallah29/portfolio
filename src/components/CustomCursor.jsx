import { useEffect, useState, useCallback } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const onMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    if (!visible) setVisible(true);
  }, [visible]);

  useEffect(() => {
    // Don't show on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    window.addEventListener('mousemove', onMouseMove);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('skill-tag') ||
        target.classList.contains('project-card') ||
        target.classList.contains('cert-card')
      ) {
        setHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('skill-tag') ||
        target.classList.contains('project-card') ||
        target.classList.contains('cert-card')
      ) {
        setHovering(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [onMouseMove]);

  if (!visible) return null;

  return (
    <div
      className={`custom-cursor ${hovering ? 'hovering' : ''}`}
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}
