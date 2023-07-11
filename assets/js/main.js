// show menu 
const navMenu = document.getElementById('nav-menu')
      navToogle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

//   menu show :: validate if constant exists 
if(navToogle){
    navToogle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// menu hidden :: validate if constant exists
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


// remove mobile menu
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// change background color
const blurHeader = () => {
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blurHeader')
                       : header.classList.remove('blurHeader')
}
window.addEventListener('scroll', blurHeader)

// email js
const contactForm = document.getElementById('contact-form')
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
}      

contactForm.addEventListener('submit', sendEmail)

// show scooll up
const scrollUp = () => {
    const scrollUp = document.getElementById('scrollup')
    // when the scroll is higher than 300 viewport height, and the show-scroll class
    this.scrollY >= 300 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// scroll section active-link 
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

        if (sectionId == null){
            print("section id kosong")
        }
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }       
    })
}
window.addEventListener('scroll', scrollActive)

// scroll reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 380,
    reset: true //animation repeat
})

sr.reveal(`.home_data, .home_social, .contact_container, .footer_container`)
sr.reveal(`.square`, {origin: 'bottom'})
sr.reveal(`.about_data, .skills_data`, {origin: 'right'})
sr.reveal(`.squareBorder, .skills_content`, {origin: 'left'})
sr.reveal(`.projects_card`, {interval: 200})
