import React from 'react'
import './Footer.css';


const Footer = () => {
    return (
        <div className="footer">
            <h2>ChocoBrand</h2>
            <p>
                Thank you for visiting our chocolate wonderland. Follow us for sweet updates and delightful surprises!
            </p>
            <div className="footer-links">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Privacy</a>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} ChocoBrand. All rights reserved.
            </div>
        </div>

    )
}

export default Footer