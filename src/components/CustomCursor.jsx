import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const dotX = gsap.quickTo(dot.current, 'x', { duration: 0.12, ease: 'power2.out' });
    const dotY = gsap.quickTo(dot.current, 'y', { duration: 0.12, ease: 'power2.out' });
    const ringX = gsap.quickTo(ring.current, 'x', { duration: 0.45, ease: 'power2.out' });
    const ringY = gsap.quickTo(ring.current, 'y', { duration: 0.45, ease: 'power2.out' });

    const move = (e) => {
      dotX(e.clientX - 5); dotY(e.clientY - 5);
      ringX(e.clientX - 18); ringY(e.clientY - 18);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div className="cursor" ref={dot} />
      <div className="cursor-ring" ref={ring} />
    </>
  );
}
