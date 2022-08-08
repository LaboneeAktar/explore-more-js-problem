const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {
    id: 11, name: 'Pani', age: 20
};
const friends = [18, 20, 29, 26, 27, 25];
function add(num1, num2) {
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friends));
console.log(typeof add);

// Find element from array
console.log(friends.includes(20));
if (friends.indexOf(30) !== -1) {

}

// concat
const newFriends = [10, 11, 9, 6];
const allFriends = newFriends.concat(friends);
console.log(allFriends);