function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


function openOverlay() {
    document.getElementById("overlay").style.display = "flex";
}

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
}