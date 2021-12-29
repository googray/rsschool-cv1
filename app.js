(function () {
  const burgerItem = document.querySelector(".burger");
  const menuItem = document.querySelector(".header-nav");
  const menuCloseItem = document.querySelector(".header-nav__close");
  const useLink = document.querySelectorAll(".header-link");
  burgerItem.addEventListener("click", () => {
    menuItem.classList.add("header-nav__active");
  });
  menuCloseItem.addEventListener("click", () => {
    menuItem.classList.remove("header-nav__active");
  });
  if (window.innerWidth <= 829) {
    for (let i = 0; i < useLink.length; i++) {
      useLink[i].addEventListener("click", () => {
        menuItem.classList.remove("header-nav__active");
      });
    }
  }
})();
