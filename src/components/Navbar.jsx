
import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { count, setIsOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <div className="nav-logo">Mai<em>son</em></div>
        <ul className="nav-links">
          <li><a href="#about">Story</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reserve">Reserve</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="cart-btn" onClick={() => setIsOpen(true)}>
          Cart
          {count > 0 && <span className="cart-count">{count}</span>}
        </button>
      </div>
    </nav>
  );
}