(() => {
    const burgerBtn = document.getElementById('open-mobile-nav');
    const mobileMenu = document.getElementById('mobile-nav');

    const toggler = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    };

    burgerBtn.addEventListener('click', toggler);
    mobileMenu.addEventListener('click', toggler);
})();

