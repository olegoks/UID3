languageButton = document.getElementsByClassName('button drop-down-menu__face-button')[0];
languageButton.innerHTML = 'Lang';
menu = document.getElementsByClassName('drop-down-menu')[0];

arrowDown = document.getElementsByClassName('arrow-down')[0];

languageButton.addEventListener('click', function() {
    menu.classList.toggle('drop-down-menu--open');
    languageButton.classList.toggle('drop-down-menu__face-button--open');
    arrowDown.classList.toggle('arrow-down--open');
});

farengateButton = document.getElementsByClassName('button--f');
celsiumButton = document.getElementsByClassName('button button--c');


