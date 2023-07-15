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

const form = document.querySelector('#formulario');

form.addEventListener('submit', handlesubmit)

async function handlesubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: form, 
    headers:{
      'Accept': 'aplication/json'
    }
  });
  if (response.ok){
      this.reset();
      const alerta = document.getElementById('alerta');
      alerta.classList.remove('hide');


      // Elimina el elemento de alerta después de 3 segundos
      setTimeout(() => {
        alerta.classList.add('hide');
      }, 3000);
    }
  }
