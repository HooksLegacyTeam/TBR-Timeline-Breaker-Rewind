/* Wiki — TOC highlighting + back-to-top */
(function () {
  "use strict";

  var toc = document.getElementById("wikiToc");
  if (!toc) return;
  var links = toc.querySelectorAll("a[href^='#']");
  var sections = [];
  links.forEach(function (a) {
    var id = a.getAttribute("href").slice(1);
    var el = document.getElementById(id);
    if (el) sections.push({ el: el, a: a });
  });

  function onScroll() {
    var scrollY = window.scrollY + 120;
    var current = sections[0];
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].el.offsetTop <= scrollY) current = sections[i];
    }
    links.forEach(function (a) { a.classList.remove("active"); });
    if (current) current.a.classList.add("active");
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var btn = document.getElementById("backTop");
  if (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
