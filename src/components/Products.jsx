import React, { useEffect, useState } from "react";
import "./Products.css";

const products = [
  { id: 1, name: "Sneakers", img: "/images/product1.jpeg" },
  { id: 2, name: "Headphones", img: "/images/product2.jpeg" },
  { id: 3, name: "Smartwatch", img: "/images/product3.jpeg" },
  { id: 4, name: "Camera", img: "/images/product4.jpeg" },
  { id: 5, name: "Speaker", img: "/images/product5.jpeg" },
  { id: 6, name: "Drone", img: "/images/product6.jpeg" },
];

const getFixedSquares = () => [
  {
    top: "auto",
    bottom: "40px",
    left: "40px",
    right: "auto",
    size: 160,
    delay: "0s",
  },
  {
    top: "40px",
    bottom: "auto",
    left: "auto",
    right: "40px",
    size: 200,
    delay: "0.5s",
  },
];

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [show, setShow] = useState(true);
  const [squares] = useState(getFixedSquares());

  useEffect(() => {
    const loop = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
        setShow(true);
      }, 100);
    }, 4000);

    return () => clearInterval(loop);
  }, []);

  return (
    <div className="showcase-container">
      {/* Top Wave */}
      <div className="wave-wrapper top">
        <svg className="wave-svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#f9e9dc"
            d="M0,96L48,122.7C96,149,192,203,288,197.3C384,192,480,128,576,112C672,96,768,128,864,144C960,160,1056,160,1152,160C1248,160,1344,160,1392,160L1440,160L1440,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Bottom Wave */}
      <div className="wave-wrapper bottom">
        <svg className="wave-svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#f9e9dc"
            d="M0,96L48,122.7C96,149,192,203,288,197.3C384,192,480,128,576,112C672,96,768,128,864,144C960,160,1056,160,1152,160C1248,160,1344,160,1392,160L1440,160L1440,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Rotating Squares */}
      {squares.map((sq, i) => (
        <div
          key={`square-${i}`}
          className="rotating-square"
          style={{
            top: sq.top,
            bottom: sq.bottom,
            left: sq.left,
            right: sq.right,
            width: sq.size,
            height: sq.size,
            animationDelay: sq.delay,
          }}
        />
      ))}

      {/* Product Frame */}
      {show && (
        <div
          key={products[currentIndex].id + "-" + Date.now()}
          className="product-frame animate-frame"
        >
          <img
            src={products[currentIndex].img}
            alt={products[currentIndex].name}
            className="product-image animate-image"
          />
          <p className="product-name animate-text">{products[currentIndex].name}</p>
        </div>
      )}
    </div>
  );
};

export default Products;
