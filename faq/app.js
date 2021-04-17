const faqApp = {};


faqApp.init = (() => {

    $('.questionContainers .question').on('click', function() {
        $(this).next().slideToggle();
        $('.minus', this).toggle();
        $('.plus', this).toggle();
    });
});

$(() => {
    faqApp.init();
});