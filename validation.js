function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log('Please enter a NUmber');
    }
    return num1 + num2;
}
const result = add(45, '30');
console.log(result);