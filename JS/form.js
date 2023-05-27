const $form = document.querySelector("#form")

$form.addEventListener("submit", handleSubmit)

async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action,{
        method:this.method,
        body: form,
        headers: { 
            "Accept":'aplication/json'
        }
    })
    if (response.ok){
        this.reset()
        alert("¡Gracias por elegir Printify! Hemos recibido exitosamente tus datos en nuestros servidores.")
    }
}
