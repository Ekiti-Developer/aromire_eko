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
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Get Involved</h4>
        <ul>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
    </div>
      
      
    </div>
    <div class="footer-bottom"> <p class="footer-copy">© ${new Date().getFullYear()} Aromire-Éko Empowerment Foundation. All rights reserved.</p>
     
    </div>
  </div>
</footer>`;

  // Inject footer as the last element inside <body>
  document.body.insertAdjacentHTML("beforeend", footerHTML);
})();
