
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Marquee() {
  const track = useRef(null);

  useEffect(() => {
    const tween = gsap.to(track.current, {
      xPercent: -50, ease: 'none', duration: 20, repeat: -1,
    });
    return () => tween.kill();
  }, []);

  const items = ['Seasonal Menu', 'Wine Pairings', 'Private Dining', 'Chef\'s Table', 'Est. 2012'];

  return (
    <div className="marquee">
      <div className="marquee-track" ref={track}>
        {[...items, ...items].map((item, i) => <span key={i}>{item}</span>)}
      </div>
    </div>
  );
}