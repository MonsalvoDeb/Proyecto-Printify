const usuario = document.getElementById('usuario')
const contraseña = document.getElementById('contraseña')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        usuario: usuario.value,
        contraseña: contraseña.value
    }

    console.log(data)
})