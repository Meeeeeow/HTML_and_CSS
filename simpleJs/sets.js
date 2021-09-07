const numbers = new Set([7,1,2,3,4,5,1]);
console.log(numbers);
let text = "";
for (const x of numbers) {
  text += x + "\n";
}
console.log(text);

numbers.add(10);
console.log(numbers);

let text1 = "";
for(let x of numbers.values()){   // set.values() return object set iterator
    text1 += x + "\n";
}
console.log(text1);

console.log('the length of set is ' + numbers.size);

//Map
//map takes element as key value pair which is an array
const fruits = new Map([
    ['apples',100],
    ['mangoes',200],
    ['berries',400]
]);

console.log(fruits);
fruits.set('apples',450);
console.log(fruits);
console.log(fruits.get('apples'));
console.log(fruits.size);
console.log(fruits.delete('apples'));
console.log(fruits.has('apples'));

let text2 = '';
fruits.forEach(myFunc);

function myFunc(value , key){
    text2 += key + ' = ' + value + '\n';
}
console.log(text2);
let text3 = '';
for(let x of fruits.entries()){  //returns an iterator object with the [key, values] 
    text3 += x + '\n';
}
console.log(text3);

num =[1,2,3];
console.log(num instanceof Array);
console.log(Array.isArray(num));