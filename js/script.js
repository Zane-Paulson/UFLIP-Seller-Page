"use strict";

const navMenuBtnOpen = document.querySelector(".nav-menu-btn");

const headerMobile = document.querySelector(".header-mobile");

const dropdown = document.querySelector(".dropdown-container");

const navMenuBtnIcon = document.querySelectorAll(".nav-btn");

navMenuBtnOpen.addEventListener("click", function () {
    dropdown.classList.toggle("active-dropdown");

    navMenuBtnIcon.forEach((el) => el.classList.toggle("active-header-mobile"));

    headerMobile.classList.toggle("active-header-mobile");
});
