import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>About</h4>
          <p>
            We sell the best products at the best prices. Quality guaranteed.
          </p>
        </div>

        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Contact</h4>
          <p>Email: support@example.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2025 YourShop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
