//alert('Welcome Brethren, check the information page for updates');
const body = document.querySelector('body'),
    nav = document.querySelector('nav'),
    modeToggle = document.querySelector('.dark-light'),
    searchToggle = document.querySelector('.searchToggle');
// JS Code to toggle dark and light mode
modeToggle.addEventListener('click', () => {
    modeToggle.classList.toggle('active');
    body.classList.toggle('dark');
});
// create function to select elements
let logo = document.querySelector('.logo');
let submenu = document.querySelector('.submenu');
let changeIcon = function(icon) {
    icon.classList.toggle('fa-xmark');
}


function matchLargeScreen(x) {
    if (x.matches) { // If media query matches
        logo.addEventListener('click', () => {
            submenu.classList.toggle('hide');
        });
    }
}
let device = window.matchMedia("(max-width: 1175px)");
device.addEventListener('change', matchLargeScreen);
document.addEventListener('DOMContentLoaded', function() {
    matchLargeScreen(device) // Calls listener function at run time
});