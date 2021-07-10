const menu = document.getElementById("menu");
const header = document.getElementById("header");

const showMenu = event => {
    event.preventDefault();
    menu.classList.toggle("d-block");
}