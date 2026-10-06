/* Create shopping cart */

let cart = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        quantity: 1
    },
    {
        id: 2,
        name: "Mouse",
        price: 800,
        quantity: 2
    },
    {
        id: 3,
        name: "Keyboard",
        price: 1500,
        quantity: 1
    }
];


/* Add operation */

function addToCart(product) {
    cart.push(product);
}


/* Remove operation using filter() */

function removeItem(id) {
    cart = cart.filter(product => product.id !== id);
}


/* Extract product names using map() */

function getProductNames() {
    return cart.map(product => product.name);
}


/* Calculate total using reduce() */

function calculateTotal() {
    return cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
    );
}


/* Display initial cart */

document.getElementById("products").textContent =
    JSON.stringify(cart);


/* Add Headphones */

addToCart({
    id: 4,
    name: "Headphones",
    price: 2000,
    quantity: 1
});


/* Remove Mouse */

removeItem(2);


/* Display cart */

document.getElementById("cart").textContent =
    JSON.stringify(cart);


/* Display product names */

document.getElementById("productNames").textContent =
    getProductNames().join(", ");


/* Display total price */

document.getElementById("totalPrice").textContent =
    "₹" + calculateTotal();


/* Display output in console */

console.log("Initial Cart:");
console.log(cart);

console.log("\nCart after adding Headphones:");
console.log(cart);

console.log("\nCart after removing Mouse:");
console.log(cart);

console.log("\nProduct Names:");
console.log(getProductNames());

console.log("\nTotal Price: ₹" + calculateTotal());