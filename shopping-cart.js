const shoppingCart = [
    { name: 'shoe', price: 1200 },
    { name: 'dress', price: 12000 },
    { name: 'hijab', price: 700 },
    { name: 'borkha', price: 1700 }
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        console.log(product);
        sum = sum + product.price;
    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log('Total Cost is:', expense);