'use strict';

// menu btn toggle

let menuBtn = document.querySelector('.btn-toggle');
let closeBtn = document.querySelector('.close-btn');
let menu = document.querySelector('.nav-menu');

function showMenu() {
    menu.classList.toggle('active');
    closeBtn.classList.toggle('show');
    menuBtn.classList.toggle('hide');
}
menuBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click', showMenu);

// dark/light mode

let darkModeBtn = document.querySelector('.dark_mode'),
    lightModeBtn = document.querySelector('.light_mode'),
    darkLightBtn = document.querySelector('.dark-light-btn')

darkLightBtn.addEventListener('click', () => {
    darkModeBtn.classList.toggle('hide');
    lightModeBtn.classList.toggle('show');
    document.body.classList.toggle('dark-theme');
})

// active link on scroll

const sections = document.querySelectorAll('section'),
    navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {


    console.log(window.pageYOffset);
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        console.log(sectionTop);
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 1.5)) {
            currentSection = section.getAttribute("id");
            console.log(currentSection);
        }
    })
    navLinks.forEach(link => {
        link.classList.remove("active");
        const linkHref = link.dataset.id;
        //console.log(linkHref);
        if (linkHref === currentSection) {
            link.classList.add('active');
        }

    })
})

// typing text
let text = document.getElementById('typing-text');
let typingPhrase = "Web Developer.";
let currentLetter = '';
let i = 0;

function typing() {

    text.textContent = currentLetter;
    if (i <= typingPhrase.length) {
        currentLetter += typingPhrase.charAt(i);
        i++;
    }
    if (i == typingPhrase.length) {
        currentLetter = "";
        i = 0;
    }
    setTimeout(typing, 350);
};
typing();

// progress bars

let skillSection = document.querySelector('.skills');
let progress = document.querySelectorAll('.progress-bar .progress');
window.onscroll = function() {
    if (window.scrollY >= skillSection.offsetTop - 100) {
        progress.forEach((el) => {
            el.style.width = el.dataset.width;
        });

    }
}

//filter portfolio section

let filterMenu = document.querySelector(".filter-menu"); // select all menu filter item
let galleryItem = document.querySelectorAll(".gallery-item");

filterMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains("filter-item")) {
        filterMenu.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        let filterValue = e.target.dataset.filter;
        galleryItem.forEach(element => {
            if (element.dataset.filter == filterValue || filterValue == "all") {
                element.classList.remove("hide");
                element.classList.add("show");
            } else {
                element.classList.add("hide");
            }
        });
    }

})