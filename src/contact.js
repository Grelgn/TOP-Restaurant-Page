export default function contactLoad() {
    const content = document.querySelector('#content');

        const header = document.createElement('header');
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