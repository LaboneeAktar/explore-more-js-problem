const shoppingCart = [
    { name: 'shoe', price: 1200, quantity: 2 },
    { name: 'dress', price: 12000, quantity: 2 },
    { name: 'hijab', price: 700, quantity: 5 },
    { name: 'borkha', price: 1700, quantity: 2 },
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        console.log(product);
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log('Total Cost is:', expense);