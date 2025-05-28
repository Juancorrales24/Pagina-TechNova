let carrito = [];

// Abre el panel lateral
function abrirPanelCarrito() {
  document.getElementById('panel-carrito').classList.add('abierto');
  document.getElementById('overlay-carrito').style.display = 'block';
  actualizarCarrito();
}

// Cierra el panel lateral
function cerrarPanelCarrito() {
  document.getElementById('panel-carrito').classList.remove('abierto');
  document.getElementById('overlay-carrito').style.display = 'none';
}

// Añade producto al carrito
function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
  actualizarContador();
}

// Elimina producto por índice
function eliminarDelCarrito(idx) {
  carrito.splice(idx, 1);
  actualizarCarrito();
  actualizarContador();
}

// Actualiza el resumen del carrito en el panel lateral
function actualizarCarrito() {
  const carritoResumen = document.getElementById('carrito-resumen');
  const pagoForm = document.getElementById('formulario-pago');

  carritoResumen.innerHTML = '';
  if (carrito.length === 0) {
    carritoResumen.innerHTML = '<p>Tu carrito está vacío.</p>';
    if (pagoForm) pagoForm.style.display = 'none';
    return;
  }

  let total = 0;
  carrito.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'carrito-item';
    div.innerHTML = `
      <strong>${item.nombre}</strong> - $${item.precio.toLocaleString()}
      <button class="eliminar-item" title="Eliminar" onclick="eliminarDelCarrito(${idx})">&times;</button>
    `;
    carritoResumen.appendChild(div);
    total += item.precio;
  });

  const totalDiv = document.createElement('div');
  totalDiv.className = 'carrito-total';
  totalDiv.innerHTML = `<hr><strong>Total:</strong> $${total.toLocaleString()}`;
  carritoResumen.appendChild(totalDiv);

  if (pagoForm) pagoForm.style.display = 'block';
}

// Actualiza el contador del carrito en el icono
function actualizarContador() {
  const contador = document.getElementById('contador-carrito');
  if (contador) contador.textContent = carrito.length;
}

document.addEventListener('DOMContentLoaded', () => {
  // Icono del carrito en header
  const iconoCarrito = document.getElementById('icono-carrito');
  if (iconoCarrito) {
    iconoCarrito.addEventListener('click', abrirPanelCarrito);
  }
  // Actualiza el contador al cargar
  actualizarContador();
});
