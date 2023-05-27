const $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up');
     
document.addEventListener('click', e => {
  if (e.target === $btnSignUp) {
      $signUp.classList.toggle('active');
  }
});

const formulario = document.querySelector('.formulario-up');
formulario.addEventListener('submit', e => {
  e.preventDefault();
  const nombre = formulario.querySelector('input[type="text"]').value;
  const email = formulario.querySelector('input[type="email"]').value;
  const contraseña = formulario.querySelector('input[type="password"]').value;
  if (nombre === '' || email === '' || contraseña === '') {
    alert('Por favor completa cada uno de los campos, son obligatorios');
    return;
  }
  const datosFormulario = {
    nombre: nombre,
    email: email,
    contraseña: contraseña
  };
  const datosArray = [];
  datosArray.push(datosFormulario);

  console.log("Datos guardados:" + datosArray);
  console.log("Nombre:", nombre)
  console.log("Email: ", email);
  console.log("Contraseña: ", contraseña);
});



