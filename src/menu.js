export default function menuLoad() {
    const content = document.querySelector('#content');

        const header = document.createElement('header');
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