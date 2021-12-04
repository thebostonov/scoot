const elNavWrapperBtn = document.querySelector(".nav-wrapper__hamburger");
const elNavWrapper = document.querySelector(".nav-wrapper");

elNavWrapperBtn.addEventListener('click', ()=> {
  elNavWrapper.classList.toggle("nav-wrapper--open");
})