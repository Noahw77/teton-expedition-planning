// Mobile menu
const toggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav-primary]');
toggle?.addEventListener('click', ()=>{
  nav?.classList.toggle('open');
});

// Dropdown (Itineraries)
const dropdown = document.querySelector('[data-dropdown]');
const dropBtn = document.querySelector('[data-dropbtn]');
dropBtn?.addEventListener('click', ()=>{
  const expanded = dropdown.getAttribute('aria-expanded') === 'true';
  dropdown.setAttribute('aria-expanded', String(!expanded));
});

// Close dropdown on outside click
document.addEventListener('click', (e)=>{
  if(!dropdown?.contains(e.target)){
    dropdown?.setAttribute('aria-expanded','false');
  }
});

// ===== In-view animations =====
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('is-inview');
      observer.unobserve(e.target);
    }
  })
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
