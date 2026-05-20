const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");

function displayProducts(productList){

    productsGrid.innerHTML = "";

    productList.forEach(product => {

        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.category}</p>
                <p class="price">₹${product.price}</p>
            </div>
        `;

        card.addEventListener("click", () => {

            localStorage.setItem(
                "selectedProduct",
                JSON.stringify(product)
            );

            window.location.href = "product.html";
        });

        productsGrid.appendChild(card);
    });
}

displayProducts(products);

/* SEARCH */
searchInput.addEventListener("input", () => {

    const value = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(value)
    );

    displayProducts(filteredProducts);
});
