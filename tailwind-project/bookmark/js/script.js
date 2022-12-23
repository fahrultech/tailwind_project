const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const btn = document.getElementById('menu-btn');
const logo = document.getElementById('logo');
const menu = document.getElementById('menu');

tabs.forEach((tab) => {
  tab.addEventListener('click', openTab)
})


btn.addEventListener('click', navToggle);

function navToggle(){
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');

  if(menu.classList.contains('flex')){
    logo.setAttribute('src', './images/logo-bookmark-footer.svg')
  }else {
    logo.setAttribute('src', './images/logo-bookmark.svg');
  }
}

function openTab(e){
  tabs.forEach((tab) => {
    tab.children[0].classList.remove('border-b-4', 'border-softRed')
  });
  e.target.classList.add('border-b-4','border-softRed');  
  panels.forEach((panel) => panel.classList.add('hidden'))
  const classString = e.target.getAttribute('data-target')
 
  const dd = document.getElementById('panels').getElementsByClassName(classString)[0].classList.remove('hidden')
}