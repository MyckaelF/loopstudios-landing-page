const menuHamburger = document.querySelector('.hamburger')
const headerMenu = document.querySelector('.headerMenu')
const menu = document.querySelector('.menu')
const body = document.body

menuHamburger.onclick = () => {
    menu.classList.toggle('active')
    headerMenu.classList.toggle('active')
    body.classList.toggle('active')

    const containActive = menu.classList.contains('active')
    if(containActive) {
        menuHamburger.setAttribute('src', 'images/icon-close.svg')
    } else {
        menuHamburger.setAttribute('src', 'images/icon-hamburger.svg')
    }
}

