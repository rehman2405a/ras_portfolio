const navToggler = document.querySelector('#nav_toggler');
const navList = document.querySelector('#nav_list');

navToggler.addEventListener('click', ()=>{
    navList.classList.toggle('toggler_active');
});