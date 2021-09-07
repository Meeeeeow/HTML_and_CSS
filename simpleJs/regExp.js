let text = "I want want to meet my expectations and my goals";
let res = text.replace(/my/g,'your');
console.log(res);

//to search for a pattern

pattern = /want/;
console.log(pattern.test(text));  //test gives boolean result and exec return returns the found text as an object  

// expressions
//[abc]
let pattern1 = /[a-j]/ig;
var result = text.match(pattern1);
console.log(result);
var txt = '';
for (let x of result){
    txt += x + '\n';
}
console.log(txt);

//[^abc]
let pattern2 = /[^a-j]/ig;
result = text.match(pattern2);
console.log(result);
txt = '';
for(let x of result){
    txt += x + '\n';
}
console.log('print all values that are not in the pattern2 ');
console.log(txt);

//numeric expressions
str1 = '12345678910';
let pattern3 =/[0-5]/g;
result = str1.match(pattern3);
console.log(result);

let pattern4 =/[^0-5]/g;
result = str1.match(pattern4);
console.log(result);

// (x | y) alterantive options

let pattern5 = /[0|1|2]/g;
result = str1.match(pattern5);
console.log(result);

//Metacharacters
let pattern6 = /wa.t/g;
result = text.match(pattern6);
console.log(result);

let pattern7 = /\bw/gi;
result = text.search(pattern7);
console.log(result);

let pattern8 = /ls\b/gi;
result = text.search(pattern8);
console.log(result);

let pattern9 = /a+/ //means at least one occurance of character a
let pattern10 = /a*/ //means zero or more occurances of caracter a
let pattern11 = /a?/ // means zero or one occurance of character a
let pattern12 = /a{2}/ //means a will appear 2 times in a row  ikn the bracket it will always be a number
let pattern13 = /a{2,3}/ // means match sequence of a with 2 and 3
let pattern14 = /a{2,}/ //means at least sequence of 2 
let pattern15 = /a$/ //means find a match where a is in the end 
let pattern16 = /^a/ //means find a match where a is at first 