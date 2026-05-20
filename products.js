const products = [

{
id:1,
name:"Nike Women's Hoodie",
price:2999,
category:"Fashion",
image:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500",
description:"Premium Nike women's hoodie with modern fit and soft fabric."
},

{
id:2,
name:"Apple AirPods",
price:15999,
category:"Electronics",
image:"https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500",
description:"Wireless premium sound with long battery life."
},

{
id:3,
name:"Adidas Running Shoes",
price:4999,
category:"Sports",
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
description:"Comfortable sports shoes with stylish design."
},

{
id:4,
name:"Luxury Watch",
price:7999,
category:"Accessories",
image:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500",
description:"Elegant premium watch for luxury fashion."
},

{
id:5,
name:"Gaming Headset",
price:3499,
category:"Gaming",
image:"https://images.unsplash.com/photo-1599669454699-248893623440?w=500",
description:"Immersive gaming sound with premium comfort."
}

];

/* ADD MORE PRODUCTS */
for(let i = 6; i <= 100; i++){

products.push({
id:i,
name:`Premium Product ${i}`,
price:Math.floor(Math.random()*10000)+999,
category:"Prime Collection",
image:`https://picsum.photos/300/300?random=${i}`,
description:"Luxury premium quality product from Prime Cart."
});

}
