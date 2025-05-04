// Menú Hamburguesa (Mobile)
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
});

// Cargar Productos
const products = [
    { id: 1, name: "iPhone 14 Pro", price: 999, image: "assets/images/iphone.jpg" },
    { id: 2, name: "MacBook Pro", price: 1299, image: "assets/images/macbook.jpg" },
    { id: 3, name: "Samsung Galaxy", price: 799, image: "assets/images/samsung.jpg" },
    { id: 4, name: "Apple Watch", price: 399, image: "assets/images/watch.jpg" }
];

function loadProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Añadir al Carrito</button>
        `;
        productList.appendChild(productCard);
    });
}

// Carrito de Compras
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
});
