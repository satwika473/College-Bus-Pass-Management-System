import React, { useState, useEffect, useRef } from "react";
import "./Sidenav1.css"; // Include your styles here
import n1 from './n1.png';
import n2 from './n2.png';
import n3 from './n3.png';
import n4 from './n4.png';
import Sidenav from "./Sidenav";

export const Sidenav1 = () => {
  const [active, setActive] = useState(0);
  const listRef = useRef(null);
  const items = [n4, n2, n3, n1];

  const lengthItems = items.length - 1;

  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(autoSlide);
  }, [active]);

  const handleNext = () => {
    setActive((prev) => (prev + 1 > lengthItems ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 < 0 ? lengthItems : prev - 1));
  };

  const handleDotClick = (index) => {
    setActive(index);
  };

  useEffect(() => {
    if (listRef.current) {
      const checkLeft = listRef.current.children[active].offsetLeft;
      listRef.current.style.left = `-${checkLeft}px`;
    }
  }, [active]);

  return (
    <div className="body-style">
      <Sidenav />
      <div className="slider">
        <div className="list" ref={listRef}>
          {items.map((src, index) => (
            <div className="item" key={index}>
              <img src={src} alt={`image${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="buttons">
          <button id="prev" onClick={handlePrev}>
            &lt;
          </button>
          <button id="next" onClick={handleNext}>
            &gt;
          </button>
        </div>
        <ul className="dots">
          {items.map((_, index) => (
            <li
              key={index}
              className={index === active ? "active" : ""}
              onClick={() => handleDotClick(index)}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};
