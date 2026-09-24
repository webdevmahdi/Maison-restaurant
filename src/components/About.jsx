
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export default function About() {
//   const root = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from('.about-img', {
//         clipPath: 'inset(100% 0 0 0)', duration: 1.4, ease: 'power4.out',
//         scrollTrigger: { trigger: '.about-img', start: 'top 80%' },
//       });
//       gsap.from('.about-copy > *', {
//         y: 50, opacity: 0, duration: 1, stagger: 0.12, ease: 'power3.out',
//         scrollTrigger: { trigger: '.about-copy', start: 'top 80%' },
//       });
//     }, root);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="about" id="about" ref={root}>
//       <div className="container about-grid">
//         {/* 📷 Drop chef / interior image here */}
//         <div className="about-img img-slot" data-label="About Image" />
//         <div className="about-copy">
//           <span className="label">Our Story</span>
//           <h2>Crafted with <em>obsession,</em> served with soul.</h2>
//           <p>
//             Founded in 2012, Maison began as a twelve-seat counter and a single
//             belief — that great food is a form of respect. Today, our kitchen
//             works directly with local farmers and fishermen to compose menus
//             that change with the seasons.
//           </p>
//           <div className="about-stats">
//             <div className="stat"><b>12+</b><span>Years</span></div>
//             <div className="stat"><b>2</b><span>Michelin Stars</span></div>
//             <div className="stat"><b>40+</b><span>Dishes</span></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-img', {
        clipPath: 'inset(100% 0 0 0)', duration: 1.4, ease: 'power4.out',
        scrollTrigger: { trigger: '.about-img', start: 'top 80%' },
      });
      gsap.from('.about-copy > *', {
        y: 50, opacity: 0, duration: 1, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-copy', start: 'top 80%' },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="about" id="about" ref={root}>
      <div className="container about-grid">
        {/* 📷 Drop chef / interior image here */}
        <img className="about-img img-slot" src='/bangladeshi-restaurant-interior.jpeg'></img>
        {/* <div className="about-img img-slot" data-label="About Image" /> */}
        <div className="about-copy">
          <span className="label">Our Story</span>
          <h2>Crafted with <em>obsession,</em> served with soul.</h2>
          <p>
            Founded in 2012, Maison began as a twelve-seat counter and a single
            belief — that great food is a form of respect. Today, our kitchen
            works directly with local farmers and fishermen to compose menus
            that change with the seasons.
          </p>
          <div className="about-stats">
            <div className="stat"><b>12+</b><span>Years</span></div>
            <div className="stat"><b>2</b><span>Michelin Stars</span></div>
            <div className="stat"><b>40+</b><span>Dishes</span></div>
          </div>
        </div>
      </div>
    </section>
  );
} 