// Lógica
// 1 - Selecionar elementos que devem ser animados
// 2 - Definir a classe que é adicionada durante a animação
// 3 - Criar função de animação
// 3.1 - Verificar a distância entre a barra de scroll e o topo do site
// 3.2 - Verificar se a distância do 3.1 + Offset é maior do que a distância entre o elemento e o Topo da Página.
// 3.3 - Se verdadeiro adicionar classe de animação, remover se for falso.
// 4 - Ativar a função de animação toda vez que o usuário utilizar o Scroll
// 5 - Otimizar ativação
// Debounce do Lodash
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  const target = document.querySelectorAll('[data-anime]');
  const animationClass = 'animate';
  
  function animeScroll() {
    const windowTop = window.pageYOffset - 100;
    target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    })
  }
  
  animeScroll();
  
  if(target.length) {
    window.addEventListener('scroll', debounce(function() {
      animeScroll();
    }, 200));
  }



let click = document.querySelector('.code');
let comandos = document.querySelector('.comandes');
let body = document.querySelector('body')
let fecha = document.querySelector('.fecha');
let codechi = document.querySelector('.ver-code');
let codechifu = document.querySelector('.code-chifuyu');
let codevan = document.querySelector('.coder-van');
let vervan = document.querySelector('.ver-code-van');
let volta = document.querySelector('.volta');
let voltavan = document.querySelector('.volta-van');

click.addEventListener("click", () => {
    comandos.style.display = "flex";
   
});

fecha.addEventListener("click", () => {
    comandos.style.display = "none";

});

codechi.addEventListener("click", () => {
    comandos.style.display = "none";
    body.style.overflow = "hidden"
    codechifu.style.opacity = "1";
    codechifu.style.transform = "rotate(0deg) translate(0px, 0px)";


    // opacity: 0;
   // transform: rotate(0deg) translate(-2px, 0px);
});

volta.addEventListener("click", () => {
    codechifu.style.transform = "rotate(0deg) translate(0px, -800px)";
    comandos.style.display = "flex"
    body.style.overflow = "auto"

    //transform: rotate(0deg) translate(0px, -800px);
});

vervan.addEventListener("click", () => {
  comandos.style.display = "none";
  body.style.overflow = "hidden"
  codevan.style.opacity = "1";
  codevan.style.transform = "rotate(0deg) translate(0px, 0px)";
});

voltavan.addEventListener("click", () => {
  codevan.style.transform = "rotate(0deg) translate(0px, -800px)";
  comandos.style.display = "flex"
  body.style.overflow = "auto"
})


let gatinho = document.querySelector('.gatinho');
let gatinho2 = document.querySelector('.gatinho2');

gatinho.addEventListener("mouseover", () => {
    gatinho.style.display = "none";
    gatinho2.style.display = "block";
})

gatinho2.addEventListener("mouseout", () => {
    gatinho2.style.display = "none";
    gatinho.style.display = "block";
});



let navcode = document.querySelector('.nav-code');


navcode.addEventListener("click", () => {
  comandos.style.display = "flex";
})