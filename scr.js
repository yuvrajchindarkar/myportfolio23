const change = document.getElementById("check");
const navlink = document.querySelectorAll(".nav-link");

let check = false;

function checkButton() {
    check = !check;

    if (check) {
        document.body.style.background = "linear-gradient(to right, #767474, #0d0d0d, #000000, #020202, #000000, #000000, #878484)";
        document.body.style.color = "white";
        navlink.forEach(link => {
            link.style.color = "white";
        });
        header.style.background = "linear-gradient(to right, #767474, #0d0d0d, #000000, #020202, #000000, #000000, #878484)";


    } else {
        // Reset background and text color to default values
        document.body.style.background = "linear-gradient(to right, #767474, #ffffff, #ffffff, #ffffff, #ffffff, #fdfdff, #878484)";
        document.body.style.color = "black";
        navlink.forEach(link => {
            link.style.color = "black";
        });
        header.style.background = "linear-gradient(to right, #767474, #ffffff, #ffffff, #ffffff, #ffffff, #fdfdff, #878484)";
    }
}

var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

function openTab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}


let menu = document.querySelector("#menu-icon");
let navList = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navList.classList.remove('active');
}


const sr = ScrollReveal({
    distance: '20px',
    duration: 2700,
    reset: true
})


sr.reveal('.home', { delay: 350, origin: 'left' })
sr.reveal('.about, .project, .contact', { delay: 250, origin: 'bottom' })