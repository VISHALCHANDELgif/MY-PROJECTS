document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     LOAD HEADER
  ========================= */
  fetch("common/header/header.html")
    .then(res => {
      if (!res.ok) throw new Error("Header not found");
      return res.text();
    })
    .then(html => {
      const headerContainer = document.getElementById("common-header");
      if (!headerContainer) return;

      headerContainer.innerHTML = html;

      // INIT after header exists
      initStickyHeader();
      initActiveMenu();
    })
    .catch(err => console.error("Header load error:", err));


  /* =========================
     LOAD FOOTER
  ========================= */
  fetch("common/footer/footer.html")
    .then(res => {
      if (!res.ok) throw new Error("Footer not found");
      return res.text();
    })
    .then(html => {
      const footer = document.getElementById("common-footer");
      if (footer) footer.innerHTML = html;
    })
    .catch(err => console.error("Footer load error:", err));

});


/* =========================
   STICKY HEADER (FIXED)
========================= */
function initStickyHeader() {
  const header = document.getElementById("main-header");
  const headerSection = header.querySelector(".header_section");
  if (!header || !headerSection) return;

  const headerHeight = headerSection.offsetHeight;

  function handleScroll() {
    if (window.scrollY > 100) {
      header.classList.add("header-scrolled");
      document.body.style.paddingTop = headerHeight + "px";
    } else {
      header.classList.remove("header-scrolled");
      document.body.style.paddingTop = "0";
    }
  }

  window.addEventListener("scroll", handleScroll);
}


/* =========================
   ACTIVE MENU
========================= */
function initActiveMenu() {
  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}
