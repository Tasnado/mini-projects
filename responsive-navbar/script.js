const init = () => {
    $('.navToggleLinks').on('click', () => {
        $('.navLinks').toggleClass('active');
    });
}

$(() => {
    init();
})