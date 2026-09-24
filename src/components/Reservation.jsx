
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Reservation() {
  const root = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔌 POST to your /api/reservations endpoint here
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reserve-grid > *', {
        y: 60, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%' },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="reserve" id="reserve" ref={root}>
      <div className="container reserve-grid">
        <div>
          <span className="label">Reservations</span>
          <h2>Your table is <em>waiting.</em></h2>
          <p className="reserve-info">
            We hold each table for the entire evening — no rush, no second
            seatings. For parties of 8 or more, please call us directly.
          </p>
        </div>
        <form className="reserve-form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Name</label>
            <input type="text" placeholder="John Doe" required />
          </div>
          <div className="field">
            <label>Phone</label>
            <input type="tel" placeholder="+1 555 000 0000" required />
          </div>
          <div className="field">
            <label>Date</label>
            <input type="date" required />
          </div>
          <div className="field">
            <label>Guests</label>
            <select>
              {[1,2,3,4,5,6,7,8].map((n) => <option key={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
            </select>
          </div>
          <div className="field full">
            <button className="btn solid" type="submit">Book a Table</button>
          </div>
        </form>
      </div>
    </section>
  );
}