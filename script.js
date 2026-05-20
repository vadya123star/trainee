const productsContainer = document.getElementById("products-container");
const searchBar = document.getElementById("searchBar");
const cartCount = document.getElementById("cart-count");

let cart = 0;

const products = [];

for (let i = 1; i <= 100; i++) {
    products.push({
        name: `Product ${i}`,
        price: Math.floor(Math.random() * 5000) + 100,
        image: "https://via.placeholder.com/250"
    });
}

function displayProducts(items) {
    productsContainer.innerHTML = "";

    items.forEach(product => {
        productsContainer.innerHTML += `
            <div class="product-card">
                <img src="${product.image}">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <button onclick="addToCart()">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart() {
    cart++;
    cartCount.innerText = cart;
}

searchBar.addEventListener("input", () => {
    const searchValue = searchBar.value.toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchValue)
    );

    displayProducts(filtered);
});

displayProducts(products);
