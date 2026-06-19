const allMenus = document.querySelectorAll(".mega-menu");

allMenus.forEach((menu) => {
  const summary = menu.querySelector("summary");

  menu.addEventListener("mouseenter", () => {
    menu.setAttribute("open", "");
    summary.setAttribute("aria-expanded", "true");
  });

  menu.addEventListener("mouseleave", () => {
    menu.removeAttribute("open");
    summary.setAttribute("aria-expanded", "false");
  });
});
