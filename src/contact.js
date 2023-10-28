export default function contactLoad() {
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

        const contact = document.createElement('div');
        contact.classList.add('contact');

            const contactUs = document.createElement('div');
            contactUs.textContent = "Contact Us!";
            contact.appendChild(contactUs);

            const phone = document.createElement('div');
            phone.textContent = "Phone: 0123456789";
            contact.appendChild(phone);

            const email = document.createElement('div');
            email.textContent = "E-mail: restaurant@nearyou.com";
            contact.appendChild(email);

        content.appendChild(contact);
}