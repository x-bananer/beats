document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.js-color-link');

    const colorItemActiveClass = 'cm-item_active';

    links.forEach (link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const currentLink = e.currentTarget;

            const colorItem = currentLink.closest('.cm-item');

            if (colorItem.classList.contains(colorItemActiveClass)) {
                colorItem.classList.remove(colorItemActiveClass);
            } else {
                document.querySelectorAll(`.${colorItemActiveClass}`).forEach(item => {
                    item.classList.remove(colorItemActiveClass);
                });

                colorItem.classList.add(colorItemActiveClass);
            }
        });
    });
});