/**
 * Aromire-Éko Empowerment Foundation
 * Shared Footer Component
 * Include this script in every page's <head>
 */

(function () {
  const footerHTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div>
        <div class="footer-brand-name">Aromire-Éko</div>
        <div class="footer-brand-sub">Empowerment Foundation</div>
        <p class="footer-about">Transforming communities through youth empowerment, women's advancement, and sustainable development. Every action creates a ripple of lasting change.</p>
      </div>
      <div class="footer-col">
        <h4>Navigate</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="programs.html">Programs</a></li>
          <li><a href="impact.html">Our Impact</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Programs</h4>
        <ul>
          <li><a href="programs.html">Future Leaders Academy</a></li>
          <li><a href="programs.html">Women in Business</a></li>
          <li><a href="programs.html">Health Outreach</a></li>
          <li><a href="programs.html">Education Support</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Get Involved</h4>
        <ul>
          <li><a href="contact.html">Donate</a></li>
          <li><a href="contact.html">Volunteer</a></li>
          <li><a href="contact.html">Partner With Us</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom"> <p class="footer-copy">© ${new Date().getFullYear()} Aromire-Éko Empowerment Foundation. All rights reserved.</p>
      <div class="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
      </div>
    </div>
  </div>
</footer>`;

  // Inject footer as the last element inside <body>
  document.body.insertAdjacentHTML("beforeend", footerHTML);
})();