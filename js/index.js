var menu = document.getElementById("menu-humberger");

function addList() {
    var element = document.getElementById("menu-nav");
    element.classList.toggle("active-menu");
}
menu.addEventListener("click", addList);