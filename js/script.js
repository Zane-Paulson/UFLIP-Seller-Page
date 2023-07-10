"use strict";

const navMenuBtnOpen = document.querySelector(".nav-menu-btn");

const headerMobile = document.querySelector(".header-mobile");
const dropdown = document.querySelector(".dropdown-container");

navMenuBtnOpen.addEventListener("click", function () {
    dropdown.classList.toggle("active-dropdown");
    headerMobile.classList.toggle("active-header-mobile");
});
