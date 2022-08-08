/*
//slice.............
const friends = [18, 20, 29, 26, 27, 25, 40, 30];
const partial = friends.slice(2, 6);
console.log(partial);
console.log(friends);
*/

//splice...............

//Removes elements from an array and,
//if necessary, inserts new elements in their place, 
//returning the deleted elements.

const friends = [18, 20, 29, 26, 27, 25, 40, 30];
const partial = friends.splice(2, 3);
console.log(partial);
console.log(friends);
