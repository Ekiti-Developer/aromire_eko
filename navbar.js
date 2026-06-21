/**
 * Aromire-Éko Empowerment Foundation
 * Shared Navbar Component
 * Include this script in every page's <head> or just before </body>
 */

(function () {
  const links = [
    { label: "Home",     href: "index.html" },
    { label: "About",    href: "about.html" },
    { label: "Programs", href: "programs.html" },
    { label: "Impact",   href: "impact.html" },
  ];

  // Determine the active page by matching the current filename
  const currentFile = window.location.pathname.split("/").pop() || "index.html";

  const navItems = links
    .map(({ label, href }) => {
      const isActive = href === currentFile ? ' class="active-link"' : "";
      return `<li><a href="${href}"${isActive}>${label}</a></li>`;
    })
    .join("\n    ");

  const navHTML = `
<nav>
  <a class="nav-logo" href="index.html">
    <div class="nav-logo-text">
      Aromire-Éko
      <span>Empowerment Foundation</span>
    </div>
  </a>
  <ul class="nav-links" id="nav-links">
    ${navItems}
    <li><a href="contact.html" class="nav-cta">Get Involved</a></li>
  </ul>
  <button class="hamburger" id="hamburger" aria-label="Toggle menu">
    <span></span>
    <span></span>
    <span></span>
  </button>
</nav>`;

  // Inject nav as the first element inside <body>
  document.body.insertAdjacentHTML("afterbegin", navHTML);

  // Hamburger toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks  = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("active");
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.classList.remove("active");
    });
  });
})();
