export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>Mai<em>son</em></h4>
            <p style={{ color: 'var(--cream-dim)', maxWidth: '32ch', lineHeight: 1.8 }}>
              An intimate dining experience in the heart of the city.
            </p>
          </div>
          <div className="footer-col">
            <span>Visit</span>
            <p>128 Rue de Lumière<br />New York, NY 10012</p>
            <p>Tue – Sun<br />5pm – 11pm</p>
          </div>
          <div className="footer-col">
            <span>Connect</span>
            <a href="#">Instagram</a>
            <a href="#">hello@maison.com</a>
            <a href="tel:+15550000000">+1 555 000 0000</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Maison</span>
          <span>Designed with care</span>
        </div>
      </div>
    </footer>
  );
}