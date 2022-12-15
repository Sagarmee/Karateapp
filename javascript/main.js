'use strict'

const openmenu = document.querySelector(".openMenu")
const navbar = document.querySelector(".nvbar")
const closemenu = document.querySelector(".closeMenu")


openmenu.addEventListener("click", function () {
    navbar.style.display = 'flex';
    navbar.style.top = '0'
})

closemenu.addEventListener("click", function () {
    navbar.style.top = '-100%';
})

//popup image///

const selectimg = document.querySelectorAll(".image-collection img")
const popup = document.querySelector(".popup-image")
const pop_img = document.querySelector(".popup-image img")
const check = document.querySelector(".popup-image span")


check.addEventListener('click', () => {
    popup.style.display = "none"
})

selectimg.forEach((img) => {
    img.addEventListener("click", () => {
        popup.style.display = "block"

        pop_img.src = img.getAttribute("src");
    })
})
