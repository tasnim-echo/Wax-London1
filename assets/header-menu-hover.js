document.querySelectorAll("header-menu").forEach((wrapper) => {
  const details = wrapper.querySelector(".mega-menu");
  const summary = wrapper.querySelector("summary");
  const content = wrapper.querySelector(".mega-menu__content");

  let closeTimer;

  const openMenu = () => {
    clearTimeout(closeTimer);
    details.setAttribute("open", "");
    summary.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    closeTimer = setTimeout(() => {
      details.removeAttribute("open");
      summary.setAttribute("aria-expanded", "false");
    }, 150);
  };

  wrapper.addEventListener("mouseenter", openMenu);
  wrapper.addEventListener("mouseleave", closeMenu);

  content.addEventListener("mouseenter", openMenu);
  summary.addEventListener("mouseenter", openMenu);
});
