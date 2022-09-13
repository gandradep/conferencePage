const hamburgerSymbol = document.getElementById('hamburger');
const popUpMenuMobile = document.getElementById('popMenu');
const menuListItems = Array.from(document.querySelectorAll('#popMenu li'));

function openMenu() {
  popUpMenuMobile.classList.add('showMenu');
}

function closeMenu() {
  popUpMenuMobile.classList.remove('showMenu');
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
