import React, { useEffect, useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    const letters = document.querySelectorAll('.magnet-letter');
    const handleMouseMove = (e) => {
      letters.forEach(letter => {
        const rect = letter.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        const distance = Math.sqrt(x * x + y * y);
        const maxDist = 100;
        if (distance < maxDist) {
          const strength = (maxDist - distance) / maxDist;
          letter.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        } else {
          letter.style.transform = 'translate(0, 0)';
        }
      });
    };

    const resetTransform = () => {
      letters.forEach(letter => {
        letter.style.transform = 'translate(0, 0)';
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', resetTransform);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', resetTransform);
    };
  }, []);

  return (
    <div className='landingpage'>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">ChocoBrand</div>

        {/* Hamburger Button */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src="/videos/chocolate.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="content">
          <h1 className="chocolate">
            {['C', 'H', 'O', 'C', 'O', 'L', 'A', 'T', 'E'].map((char, i) => (
              <span className="magnet-letter" key={i}>{char}</span>
            ))}
          </h1>
          <p>This is a practice website to see how the video looks in the background of the webpage.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
