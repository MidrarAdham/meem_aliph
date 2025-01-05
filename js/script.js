// Common functions for all pages
function initNavigation() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

// Menu page specific functions
function initMenu() {
    if (!document.querySelector('.menu')) return; // Only run on menu page
    
    const menuBtns = document.querySelectorAll('.menu-btn');
    const menuCategories = document.querySelectorAll('.menu-category');
    menuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and categories
        menuBtns.forEach(b => b.classList.remove('active'));
        menuCategories.forEach(cat => cat.classList.remove('active'));

        // Add active class to clicked button and corresponding category
        btn.classList.add('active');
        const category = btn.dataset.category;
        document.getElementById(category).classList.add('active');
    });
});
}

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMenu();
    // Add other init functions as needed
});

// Language toggle functionality
const langButtons = document.querySelectorAll('.lang-btn');
const contentSections = document.querySelectorAll('.story-content');

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and content
        langButtons.forEach(b => b.classList.remove('active'));
        contentSections.forEach(c => c.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        btn.classList.add('active');
        const lang = btn.dataset.lang;
        document.querySelector(`.story-content.${lang}`).classList.add('active');
    });
});

// // Mobile menu toggle
// const burger = document.querySelector('.burger');
// const nav = document.querySelector('.nav-links');

// burger.addEventListener('click', () => {
//     nav.classList.toggle('nav-active');
// });

// // Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Menu category switching
// const menuBtns = document.querySelectorAll('.menu-btn');
// const menuCategories = document.querySelectorAll('.menu-category');

// menuBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         // Remove active class from all buttons and categories
//         menuBtns.forEach(b => b.classList.remove('active'));
//         menuCategories.forEach(cat => cat.classList.remove('active'));

//         // Add active class to clicked button and corresponding category
//         btn.classList.add('active');
//         const category = btn.dataset.category;
//         document.getElementById(category).classList.add('active');
//     });
// });
