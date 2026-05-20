const products = [];

const categories = [
    "Electronics",
    "Fashion",
    "Sports",
    "Gaming",
    "Accessories"
];

for (let i = 1; i <= 100; i++) {

    products.push({
        id: i,
        name: `Premium Product ${i}`,
        price: Math.floor(Math.random() * 10000) + 999,
        category: categories[Math.floor(Math.random() * categories.length)],
        image: `https://picsum.photos/300/300?random=${i}`,
        description:
        "Premium quality product with excellent features and luxury finishing. Smooth design and best performance."
    });

}
