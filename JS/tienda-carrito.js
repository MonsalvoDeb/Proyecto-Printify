let carrito = [];


function agregarAlCarrito(nombreProducto, precioProducto, imagenProducto) {
    const productoExistente = carrito.find((producto) => producto.nombre === nombreProducto);
    if (productoExistente) {
      productoExistente.cantidad++;
    } else {
      const nuevoProducto = {
        nombre: nombreProducto,
        precio: precioProducto,
        cantidad: 1,
        imagen: imagenProducto,
      };
      carrito.push(nuevoProducto);
    }
    actualizarCarrito();
  }
  
function actualizarCarrito() {
    const carritoProductos = document.getElementById('carrito-productos');
    const totalCarrito = document.getElementById('total');
    carritoProductos.innerHTML = '';
    carrito.forEach(producto => {
        const productoHTML = `
            <div class="producto-carrito">
                <span>${producto.nombre}</span>
                <button class="boton-c" onclick="disminuirCantidad('${producto.nombre}')">-</button>
                <span>${producto.cantidad}</span>
                <button class="boton-c" onclick="aumentarCantidad('${producto.nombre}')">+</button>
                <span>$${producto.precio}</span>
                <button class="boton-c" onclick="eliminarProducto('${producto.nombre}')">Eliminar</button>
            </div>
        `;
        carritoProductos.innerHTML += productoHTML;
    });
    const total = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    totalCarrito.textContent = total.toFixed(2);
}

function aumentarCantidad(nombreProducto) {
    const producto = carrito.find(producto => producto.nombre === nombreProducto);  
    if (producto) {
        producto.cantidad++;
    } 
    actualizarCarrito();
}

function disminuirCantidad(nombreProducto) {
    const producto = carrito.find(producto => producto.nombre === nombreProducto);  
    if (producto) {
        if (producto.cantidad > 1) {
            producto.cantidad--;
        } else {
            eliminarProducto(nombreProducto);
        }}  
    actualizarCarrito();
}

function eliminarProducto(nombreProducto) {
    carrito = carrito.filter(producto => producto.nombre !== nombreProducto);
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}


function comprarCarrito() {
    const totalAPagar = parseFloat(document.getElementById('total').textContent);
    const productosSeleccionados = carrito.map((producto) => ({
      nombre: producto.nombre,
      cantidad: producto.cantidad,
    }));
  
    const contenedorPago = document.getElementById('contenedor-pago');
    contenedorPago.innerHTML = '';
  
    const formularioPago = document.createElement('form');
    formularioPago.setAttribute('id', 'formulario-pago');
  
    const productosSeleccionadosTexto = document.createElement('h2');
    productosSeleccionadosTexto.textContent = 'Tus Productos:';
    formularioPago.appendChild(productosSeleccionadosTexto);
  
    const productosSeleccionadosLista = document.createElement('ul');
    productosSeleccionados.forEach((producto) => {
      const productoSeleccionado = document.createElement('li');
      productoSeleccionado.style.color='white';
      productoSeleccionado.textContent = `${producto.nombre}: ${producto.cantidad} unid`;
      productosSeleccionadosLista.appendChild(productoSeleccionado);
    });
    formularioPago.appendChild(productosSeleccionadosLista);
  
    const totalPagarTexto = document.createElement('p');
    totalPagarTexto.textContent = `Total a pagar: $${totalAPagar.toFixed(2)}`;
    formularioPago.appendChild(totalPagarTexto);
  
    const metodoPagoLabel = document.createElement('label');
    metodoPagoLabel.textContent = 'Método de pago:';
    formularioPago.appendChild(metodoPagoLabel);
  
    const metodoPagoSelect = document.createElement('select');
    metodoPagoSelect.setAttribute('id', 'metodo-pago');
    metodoPagoSelect.style.backgroundColor = '#666';
    metodoPagoSelect.style.color = '#000';
    metodoPagoSelect.style.padding = '5px 15px';
    metodoPagoSelect.style.border = 'none';
    metodoPagoSelect.style.borderRadius = '5px';
    metodoPagoSelect.style.cursor = 'pointer';
  
    formularioPago.appendChild(metodoPagoSelect);
  
    const tarjetaCreditoCOption = document.createElement('option');
    tarjetaCreditoCOption.textContent = 'Tarjeta de crédito Mastercard';
    metodoPagoSelect.appendChild(tarjetaCreditoCOption);
  
    const tarjetaCreditoVOption = document.createElement('option');
    tarjetaCreditoVOption.textContent = 'Tarjeta de crédito VISA';
    metodoPagoSelect.appendChild(tarjetaCreditoVOption);
  
    const tarjetaDebitoCOption = document.createElement('option');
    tarjetaDebitoCOption.textContent = 'Tarjeta de débito Mastercard';
    metodoPagoSelect.appendChild(tarjetaDebitoCOption);
  
    const tarjetaDebitoVOption = document.createElement('option');
    tarjetaDebitoVOption.textContent = 'Tarjeta de débito VISA';
    metodoPagoSelect.appendChild(tarjetaDebitoVOption);
  
    const botonesContainer = document.createElement('div');
    botonesContainer.style.display = 'flex';
    botonesContainer.style.justifyContent = 'center';
    botonesContainer.style.marginTop = '10px';
  
    const confirmarCompraButton = document.createElement('button');
    confirmarCompraButton.textContent = 'Comprar';
    confirmarCompraButton.addEventListener('click', confirmarCompra);
    confirmarCompraButton.style.backgroundColor = '#666';
    confirmarCompraButton.style.color = 'white';
    confirmarCompraButton.style.padding = '5px 15px';
    confirmarCompraButton.style.border = 'none';
    confirmarCompraButton.style.borderRadius = '5px';
    confirmarCompraButton.style.cursor = 'pointer';
  
    const cancelarCompraButton = document.createElement('button');
    cancelarCompraButton.textContent = 'Cancelar';
    cancelarCompraButton.addEventListener('click', cancelarCompra);
    cancelarCompraButton.style.backgroundColor = '#666';
    cancelarCompraButton.style.color = 'white';
    cancelarCompraButton.style.padding = '5px 15px';
    cancelarCompraButton.style.border = 'none';
    cancelarCompraButton.style.borderRadius = '5px';
    cancelarCompraButton.style.cursor = 'pointer';
  
    botonesContainer.appendChild(cancelarCompraButton);
    botonesContainer.appendChild(confirmarCompraButton);
  
    formularioPago.appendChild(botonesContainer);
  
    contenedorPago.appendChild(formularioPago);
  }
  
  function confirmarCompra() {
    const metodoPago = document.getElementById('metodo-pago').value;
    if (metodoPago === 'Tarjeta de crédito VISA' || 'Tarjeta de crédito Mastercard') {
      const datosTarjetaCredito = prompt('Ingresa los datos de tu tarjeta de crédito:');
      if (!datosTarjetaCredito) {
        alert('No ingresaste los datos de la tarjeta de crédito. La compra no se realizó.');
        return;
      }
    } else if (metodoPago === 'Tarjeta de débito VISA' ||'Tarjeta de débito Mastercard' ) {
      const datosTarjetaDebito = prompt('Ingresa los datos de tu tarjeta de débito:');
      if (!datosTarjetaDebito) {
        alert('No ingresaste los datos de la tarjeta de débito. La compra no se realizó.');
        return;
      }
    }
    alert('¡Muchas gracias por su compra!');
  }

  function cancelarCompra() {
    const contenedorPago = document.getElementById('contenedor-pago');
    contenedorPago.innerHTML = '';
    alert('La compra ha sido cancelada.');
  }
  
  

 