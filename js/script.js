// Hacemos funcionar el bóton para abrir el menú
const btnMenu = document.querySelector('.btn-menu');

btnMenu.addEventListener('click', function () {
    document.getElementById('nav').classList.toggle('show');
}
);
