let carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  const carritoResumen = document.getElementById('carrito-resumen');
  const pagoForm = document.getElementById('formulario-pago');
  const contador = document.getElementById('contador-carrito');

  carritoResumen.innerHTML = '';
  if (contador) contador.textContent = carrito.length;

  if (carrito.length === 0) {
    carritoResumen.innerHTML = '<p>Tu carrito está vacío.</p>';
    if (pagoForm) pagoForm.style.display = 'none';
    return;
  }

  let total = 0;
  carrito.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'carrito-item';
    div.innerHTML = `<strong>${item.nombre}</strong> - $${item.precio.toLocaleString()}`;
    carritoResumen.appendChild(div);
    total += item.precio;
  });

  const totalDiv = document.createElement('div');
  totalDiv.className = 'carrito-total';
  totalDiv.innerHTML = `<hr><strong>Total:</strong> $${total.toLocaleString()}`;
  carritoResumen.appendChild(totalDiv);

  if (pagoForm) pagoForm.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  const iconoCarrito = document.getElementById('icono-carrito');
  const panelCarrito = document.getElementById('panel-carrito');

  if (iconoCarrito && panelCarrito) {
    iconoCarrito.addEventListener('click', () => {
      panelCarrito.classList.toggle('visible');
    });
  }

  if (document.getElementById('carrito-resumen')) {
    actualizarCarrito();
  }
});
