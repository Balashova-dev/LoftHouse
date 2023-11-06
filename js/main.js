/* Nav icon */

const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');

console.log(navIcon);
navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
};