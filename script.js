document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("aktif");
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("aktif");
      }
    });
  });
});

const mengetik = new Typed(".typing", {
  strings: ["Fullstack Developer", "Cybersecurity Engineer"],
  typeSpeed: 65,
  backSpeed: 50,
  loop: true,
});

const mengetikan = new Typed(".typing-2", {
  strings: ["Fullstack Developer", "Cybersecurity Engineer"],
  typeSpeed: 65,
  backSpeed: 50,
  loop: true,
});
