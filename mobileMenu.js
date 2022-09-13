const hamburgerSymbol = document.getElementById('hamburger');
const popUpMenuMobile = document.getElementById('popMenu');
const menuListItems = Array.from(document.querySelectorAll('#popMenu li'));

function openMenu() {
  lockA();
  popUpMenuMobile.classList.add('showMenu');

}

function closeMenu() {
  document.body.style.overflow = "auto";
 document.body.style.userSelect = "auto";
  popUpMenuMobile.classList.remove('showMenu');
}

function lockA () {
  document.body.style.overflow = "hidden";
  document.body.style.userSelect = "none";
}

hamburgerSymbol.addEventListener('click', openMenu);

menuListItems.forEach((element) => {
  element.addEventListener('click', closeMenu);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});
