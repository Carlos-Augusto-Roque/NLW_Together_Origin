/* abre e fecha o menu */

//constante para armazenar o header nav
const nav = document.querySelector('#header nav')
//constante para armazenar o nav .toggle
const toggle = document.querySelectorAll('nav .toggle')

//leitura dos elementos toggle
for (const element of toggle) {
  //adiciona um evento ouvinte no element que ao clicar , chama a função
  element.addEventListener('click', () => {
    //se tiver a classe show no nav, vai remover, e se tiver sem, vai adicionar(abrir e fechar o menu)
    nav.classList.toggle('show')
  })
}

/* quando clicar em algum item do menu, fechar o menu */

//constante que armazena todos os links a (todos itens do menu)
const links = document.querySelectorAll('nav ul li a')

//leitura de todos os links
for (const link of links) {
  //adiciona um evento ouvinte no link, que ao clicar, chama a função
  link.addEventListener('click', () => {
    // que removerá a classe show
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */

//constante que armazena o header
const header = document.querySelector('#header')
//constante que recebe a altura do header
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

// swiper slide : mostrar os depoimentos em forma de slides
const swaiper = new Swiper('.swiper-container', {
  slidesPerView: 1,//1 slide por vez
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,//usar o scroll do mouse para arrastar os slides
  keyboard:true, //usar as setas do teclado para arrastar os slides
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// scrollreveal: mostrar os elementos por partes quando der scroll na pagina 
const scrollReveal = ScrollReveal({
  origin: 'top',// origem do topo
  distance: '30px',//distancia do topo
  duration: 700,//duração da animação
  reset: true//quando carregar toda a pagina e quiser voltar, animação permanece
})
// em quais elemento será aplicado o reveal
scrollReveal.reveal(`
  #home .text,#home .image,
  #about .text,#about .image,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social   
`,{ interval: 100})//interval = tempo em ms entre o reveal de um elemento e outro 

/* button back to top */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})