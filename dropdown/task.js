document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const value = dropdown.querySelector('.dropdown__value');
        const list = dropdown.querySelector('.dropdown__list');

        value.addEventListener('click', () => {
            list.classList.toggle('dropdown__list_active');
        });

        dropdown.querySelectorAll('.dropdown__item').forEach(item => {
            item.addEventListener('click', (event) => {
                const newValue = event.target.textContent.trim();
                value.textContent = newValue;
                list.classList.remove('dropdown__list_active');
                event.preventDefault();
            });
        });
    });
});
