const phones = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'black' },
    { name: 'iphone', camera: 13, storage: '32gb', price: 82000, color: 'white' },
    { name: 'Xaomi', camera: 16, storage: '32gb', price: 50000, color: 'sky blue' },
    { name: 'Oppo', camera: 12, storage: '32gb', price: 20000, color: 'silver' },
    { name: 'Vivo', camera: 12, storage: '32gb', price: 16000, color: 'silver' },
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);