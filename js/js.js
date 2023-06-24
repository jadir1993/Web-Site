const hamburgerBtn = document.getElementById('hamburger-btn');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');

function seleccionarMenu() {
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'flex';
    closeBtn.style.display = 'block';
  } else {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
  }
}

hamburgerBtn.addEventListener('click', seleccionarMenu);
closeBtn.addEventListener('click', seleccionarMenu);
