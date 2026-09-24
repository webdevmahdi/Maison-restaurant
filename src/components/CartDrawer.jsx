import { AnimatePresence, motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { items, updateQty, total, isOpen, setIsOpen } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="cart-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
          <motion.aside
            className="cart-drawer"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
          >
            <div className="cart-head">
              <h3>Your Order</h3>
              <button className="cart-close" onClick={() => setIsOpen(false)}>×</button>
            </div>
            <div className="cart-items">
              {items.length === 0 ? (
                <p className="cart-empty">Your plate is empty… for now.</p>
              ) : (
                items.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <div>
                      <h4>{item.name}</h4>
                      <small>${item.price} each</small>
                    </div>
                    <div className="qty-control">
                      <button onClick={() => updateQty(item.id, -1)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)}>+</button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="cart-foot">
              <div className="cart-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              {/* 🔌 Wire this to your Express/Mongo order endpoint */}
              <button className="btn solid" disabled={!items.length}>
                Checkout →
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}