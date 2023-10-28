export default function pageLoad() {
    const content = document.querySelector('#content');

        const header = document.createElement('header');

            const homeLink = document.createElement('a');
            homeLink.id = "home-link"
            homeLink.textContent = "HOME";
            header.appendChild(homeLink);

            const menuLink = document.createElement('a');
            menuLink.id = "menu-link"
            menuLink.textContent = "MENU";
            header.appendChild(menuLink);

            const contactLink = document.createElement('a');
            contactLink.id = "contact-link"
            contactLink.textContent = "CONTACT";
            header.appendChild(contactLink);

        content.appendChild(header);

        const image = document.createElement('div');
        image.classList.add('image');
        content.appendChild(image);

        const text = document.createElement('div');
        text.classList.add('text');

            const name = document.createElement('div');
            name.classList.add('name');
            name.textContent = "Local Kebab Place";
            text.appendChild(name);

            const copy = document.createElement('div');
            copy.classList.add('copy');
            copy.textContent = "Best food near 'YOUR LOCATION'";
            text.appendChild(copy);

        content.appendChild(text);
}