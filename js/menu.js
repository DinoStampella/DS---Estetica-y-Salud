(function(){

    const menu = document.querySelector('.menu');
    const exit = document.querySelector('.exit');
    const links = document.querySelector('.nav__list');

    menu.addEventListener('click', showList);
    exit.addEventListener('click', hideList);

    function showList() {
        links.classList.add('nav__list--show');
        exit.classList.add('exit--show');
    }

    function hideList() {
        links.classList.remove('nav__list--show');
        exit.classList.remove('exit--show');
    }
}())