import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const root = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counter = { val: 0 };
      const tl = gsap.timeline({ onComplete });

      tl.to('.preloader-word span', {
        y: 0, duration: 1, stagger: 0.06, ease: 'power4.out',
      })
        .to(counter, {
          val: 100, duration: 1.6, ease: 'power2.inOut',
          onUpdate: () => setCount(Math.round(counter.val)),
        }, '<')
        .to('.preloader-word span', { y: '-110%', duration: 0.7, stagger: 0.04, ease: 'power3.in' }, '+=0.2')
        .to(root.current, { yPercent: -100, duration: 0.9, ease: 'power4.inOut' }, '-=0.3');
    }, root);
    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="preloader" ref={root}>
      <h1 className="preloader-word">
        {'MAISON'.split('').map((c, i) => <span key={i}>{c}</span>)}
      </h1>
      <div className="preloader-count">{count}%</div>
    </div>
  );
}