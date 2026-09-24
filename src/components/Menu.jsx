import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { menuItems, categories } from "../data/menu";
import { useCart } from "../context/CartContext";

gsap.registerPlugin(ScrollTrigger);

export default function Menu() {
  const [active, setActive] = useState("All");
  const { addItem } = useCart();
  const root = useRef(null);

  const filtered =
    active === "All"
      ? menuItems
      : menuItems.filter((i) => i.category === active);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".menu-head > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".menu-head", start: "top 85%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="menu-section" id="menu" ref={root}>
      <div className="container">
        <div className="menu-head">
          <div>
            <span className="label">The Menu</span>
            <h2>
              Made to be <em>remembered.</em>
            </h2>
          </div>
          <div className="menu-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-chip ${active === cat ? "active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div className="menu-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((dish) => (
              <motion.div
                key={dish.id}
                className="dish-card"
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
              >
                {/* 📷 Drop dish image here */}
                <img className="dish-img img-slot" src={dish.image} alt="" srcset="" />
                {/* <div className="dish-img img-slot" data-label={dish.name} /> */}
                <div className="dish-body">
                  <div className="dish-row">
                    <h3>{dish.name}</h3>
                    <span className="dish-price">${dish.price}</span>
                  </div>
                  <p className="dish-desc">{dish.desc}</p>
                  <button className="add-btn" onClick={() => addItem(dish)}>
                    Add to Order +
                  </button>
                </div>
              </motion.div>/*
              <motion.div
                key={dish.id}
                className="dish-card"
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
              >
                {/* 📷 Drop dish image here }
                <div className="dish-img img-slot" data-label={dish.name} />
                <div className="dish-body">
                  <div className="dish-row">
                    <h3>{dish.name}</h3>
                    <span className="dish-dots" />
                    <span className="dish-price">${dish.price}</span>
                  </div>
                  <p className="dish-desc">{dish.desc}</p>
                  <button className="add-btn" onClick={() => addItem(dish)}>
                    Add to Order +
                  </button>
                </div>
              </motion.div>*/
            ))}
          </AnimatePresence>
        </motion.div>

        {/* <motion.div
  key={dish.id}
  className="dish-card"
  layout
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, scale: 0.96 }}
  transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
>
  {/* 📷 Drop dish image here *}
  <div className="dish-img img-slot" data-label={dish.name} />
  <div className="dish-body">
    <div className="dish-row">
      <h3>{dish.name}</h3>
      <span className="dish-dots" />
      <span className="dish-price">${dish.price}</span>
    </div>
    <p className="dish-desc">{dish.desc}</p>
    <button className="add-btn" onClick={() => addItem(dish)}>
      Add to Order +
    </button>
  </div>
</motion.div> */}
      </div>
    </section>
  );
}
