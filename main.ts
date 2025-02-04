let menu = document.querySelector(`#menu-bars`) as HTMLElement;
let navbar = document.querySelector(`.navbar`) as HTMLElement;



menu.onclick = () => {
  menu.classList.toggle(`times`);
  navbar.classList.toggle(`actives`);
};

window.onscroll = () => {
    menu.classList.remove(`times`);
    navbar.classList.remove(`actives`);
}
