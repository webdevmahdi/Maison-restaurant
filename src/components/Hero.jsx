import { useEffect, useRef } from "react";
import gsap from "gsap";

// export default function Hero({ started }) {
  // const root = useRef(null);

  // useEffect(() => {
  //   if (!started) return;
  //   const ctx = gsap.context(() => {
  //     gsap.to('.hero-title .line span', {
  //       y: 0, duration: 1.2, stagger: 0.12, ease: 'power4.out', delay: 0.1,
  //     });
  //     gsap.from('.hero-meta > *', {
  //       y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.6,
  //     });
  //     gsap.to('.hero-img', {
  //       yPercent: 20, ease: 'none',
  //       scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
  //     });
  //   }, root);
  //   return () => ctx.revert();
  // }, [started]);

//   return (
//     <header className="hero" ref={root}>
//       {/* 📷 Drop hero background image here */}
//       <div className="hero-img img-slot" data-label="Hero Image" />
//       <div className="container">
//         <h1 className="hero-title">
//           <span className="line"><span>Taste the</span></span>
//           <span className="line"><span><em>art</em> of fine</span></span>
//           <span className="line"><span>dining.</span></span>
//         </h1>
//         <div className="hero-meta">
//           <p className="hero-desc">
//             Seasonal ingredients, masterful technique, and an atmosphere
//             designed for unforgettable evenings.
//           </p>
//           <a href="#menu" className="btn solid">Explore the Menu ↓</a>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Hero({started}) {

    const root = useRef(null);

  useEffect(() => {
    if (!started) return;
    const ctx = gsap.context(() => {
      gsap.to('.hero-title .line span', {
        y: 0, duration: 1.2, stagger: 0.12, ease: 'power4.out', delay: 0.1,
      });
      gsap.from('.hero-meta > *', {
        y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.6,
      });
      gsap.to('.hero-img', {
        yPercent: 20, ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, [started]);

  return (
    <section className="hero" id="home">
      {/* 🎬 Background video */}
      <div className="hero-media">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg" /* fallback frame while video loads */
        >
          <source src="mutton-drom.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content">
        {/* ⬇️ Keep your existing hero headline / CTA here */}
        <div className="container">
          <h1 className="hero-title">
            <span className="line">
              <span>Taste the</span>
            </span>
            <span className="line">
              <span>
                <em>art</em> of fine
              </span>
            </span>
            <span className="line">
              <span>dining.</span>
            </span>
          </h1>
          <div className="hero-meta">
            <p className="hero-desc">
              Seasonal ingredients, masterful technique, and an atmosphere
              designed for unforgettable evenings.
            </p>
            <a href="#menu" className="btn solid">
              Explore the Menu ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
