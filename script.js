// script.js — final: mobile toggle, basic interactions
window.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const menu = document.querySelector('.menu');
  if(navToggle && menu){
    navToggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      navToggle.classList.toggle('open');
    });
  }

  // make submenu toggles work on touch devices
  document.querySelectorAll('.menu .has-sub > a').forEach(link => {
    link.addEventListener('click', function(e){
      const li = this.parentElement;
      if(window.innerWidth <= 800){
        e.preventDefault();
        li.classList.toggle('open');
        const submenu = li.querySelector('.submenu');
        if(submenu) submenu.style.display = li.classList.contains('open') ? 'block' : 'none';
      }
    })
  })

  // search demo
  const search = document.getElementById('site-search');
  if(search){
    search.addEventListener('keydown', e => {
      if(e.key === 'Enter'){
        alert('Search is a demo — you typed: ' + search.value);
      }
    })
  }
});
