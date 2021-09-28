"use strict";

const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");

const headerIcon = document.querySelector(".header__icon");
const frame = document.querySelector(".frame");
const menu = document.querySelector(".menu");

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("active");
});

headerIcon.addEventListener("click", function () {
  frame.classList.toggle("show-menu");
  menu.classList.toggle("active");
});
