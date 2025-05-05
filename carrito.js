// carrito.js
let carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  const carritoResumen = document.getElementById('carrito-resumen');
  const pagoForm = document.getElementById('formulario-pago');

  carritoResumen.innerHTML = '';

  if (carrito.length === 0) {
    carritoResumen.innerHTML = '<p>Tu carrito está vacío.</p>';
    if (pagoForm) pagoForm.style.display = 'none';
    return;
  }

  carrito.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'carrito-item';
    div.innerHTML = `<strong>${item.nombre}</strong> - $${item.precio.toLocaleString()}`;
    carritoResumen.appendChild(div);
  });

  if (pagoForm) pagoForm.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('carrito-resumen')) {
    actualizarCarrito();
  }
});
