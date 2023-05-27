const $btnSignIn= document.querySelector('.sign-in-btn'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn) {
        $signIn.classList.toggle('active');
    }
});

const form = document.querySelector('.formulario-in');
form.addEventListener('submit', e => {
  e.preventDefault();
  const gmail = form.querySelector('input[type="email"]').value;
  const password = form.querySelector('input[type="password"]').value;
  if ( gmail === '' || password === '') {
    alert('Por favor completa cada uno de los campos, son obligatorios');
    return;
  }
  const datosForm = {
    gmail: gmail,
    password: password
  };
  const datosArr = [];
  datosArr.push(datosForm);
  console.log("Datos guardados:" + datosArr);
  console.log("Email: ", gmail);
  console.log("Contraseña: ", password);
});