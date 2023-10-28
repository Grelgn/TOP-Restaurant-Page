export default function menuLoad() {
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

        const menu = document.createElement('div');
        menu.classList.add('menu');

            const item1 = document.createElement('div');
            item1.textContent = "Item 1.....................4.99$";
            menu.appendChild(item1);

            const item2 = document.createElement('div');
            item2.textContent = "Item 2.....................7.49$";
            menu.appendChild(item2);

            const item3 = document.createElement('div');
            item3.textContent = "Item 3.....................9.99$";
            menu.appendChild(item3);

            const item4 = document.createElement('div');
            item4.textContent = "Item 4.....................14.99$";
            menu.appendChild(item4);

        content.appendChild(menu);
}