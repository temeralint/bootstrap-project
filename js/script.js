let hamburger = document.querySelector('.hamburger')
let menu = document.querySelector('.menu')
let menu_items = document.querySelectorAll('.menu_item')

function toggleMenu() {
    menu.classList.toggle('menu_active')
    hamburger.classList.toggle('hamburger_active')
}

hamburger.addEventListener('touchstart', () => {
    toggleMenu()
})

menu_items.forEach((item) => {
    item.addEventListener('click', () => {
        toggleMenu()
    })
})