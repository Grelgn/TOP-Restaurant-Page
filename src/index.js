import pageLoad from "./page-load";
import menuLoad from "./menu";
import contactLoad from "./contact";

pageLoad();

function clearPage() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
}

function loadLinks() {
    const home = document.querySelector('#home-link');
    home.addEventListener('click', () => {
        clearPage();
        pageLoad();
        loadLinks();
    })

    const menu = document.querySelector('#menu-link');
    menu.addEventListener('click', () => {
        clearPage();
        menuLoad();
        loadLinks();
    })

    const contact = document.querySelector('#contact-link');
    contact.addEventListener('click', () => {
        clearPage();
        contactLoad();
        loadLinks();
    })
}

loadLinks();