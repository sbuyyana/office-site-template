import React from "react";

export const Footer = (props) => {
  return (
    <div id="footer">
      <div className="footer-line"></div>
      <div class="footer-detail">
        <div class="footer-copyright">© F4Y 2022</div>
        <div class="footer-additional-links">
          <a href="/security" class="footer-additional-link">
            Security
          </a>
          <a href="/privacy-policy" class="footer-additional-link">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};
