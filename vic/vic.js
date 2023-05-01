let menu = document.querySelector('#menu-btn');
let navList = document.querySelector('.navList');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');

}