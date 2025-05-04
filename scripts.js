// Datos de Productos
const products = [
    { id: 1, name: "iPhone 13", price: 999, category: "Celulares", image: "assets/iphone.jpg" },
    { id: 2, name: "MacBook Pro", price: 1299, category: "Computadores", image: "assets/macbook.jpg" },
    { id: 3, name: "Samsung Smart TV", price: 799, category: "Televisores", image: "assets/tv.jpg" },
    { id: 4, name: "Apple Watch", price: 399, category: "Relojes", image: "assets/watch.jpg" }
];

// Carrito de Compras
let cart = [];

// Cargar Productos
function loadProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})" class="cta">Añadir al Carrito</button>
        `;
        productList.appendChild(productCard);
    });
}

// Añadir al Carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
}

// Actualizar Contador del Carrito
function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
}

// Inicializar Página
document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
});
