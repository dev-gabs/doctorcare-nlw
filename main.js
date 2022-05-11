window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(testimonial)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados vou precisar?

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = targetLine > sectionEndsAt

  // limites da seção

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(
    `.menu a[href*=${sectionId}]` // vai pegar todos os 'href' dos 'a' dentro do '.menu' que contiverem o id da 'section' (exemplo: home)
  )

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function chooseEspecificCard(num) {
  const getCard = document.querySelector(
    `body.card-expanded nav#navigation .cardsPopUp div[class*=${num}]`
  )

  getCard.classList.add('shown')
}

function toggleMenu() {
  document.querySelector('.hamburguer').classList.toggle('is-active')
  document.body.classList.toggle('menu-expanded')

  const getCard = document.querySelector(
    `body.card-expanded nav#navigation .cardsPopUp div[class*=shown]`
  )

  getCard.classList.remove('shown')

  document.body.classList.remove('card-expanded')
}

function closeMenu() {
  document.querySelector('.hamburguer').classList.toggle('is-active')
  document.body.classList.remove('menu-expanded')

  const getCard = document.querySelector(
    `body.card-expanded nav#navigation .cardsPopUp div[class*=shown]`
  )

  getCard.classList.remove('shown')

  document.body.classList.remove('card-expanded')
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function showCardPopUp() {
  document.body.classList.add('card-expanded')
}

function hideCardPopUp() {
  const getCard = document.querySelector(
    `body.card-expanded nav#navigation .cardsPopUp div[class*=shown]`
  )

  getCard.classList.remove('shown')

  document.body.classList.remove('card-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home, 
  #home img #home .stats, 
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`)

function sliderScroll(num) {
  let scroll = slider.scrollLeft + num
  slider.scroll({
    top: 0,
    left: scroll,
    behavior: 'smooth'
  })
 
 const scrollIsOnLeft = scroll < 250
 const scrollIsOnRight = scroll > 2000

  if (scrollIsOnLeft) {
    testimonial.querySelector('.backward').classList.add('end')
  } else testimonial.querySelector('.backward').classList.remove('end')

  if (scrollIsOnRight) {
    testimonial.querySelector('.forward').classList.add('end')
  } else testimonial.querySelector('.forward').classList.remove('end')
}

sliderScroll(0)
