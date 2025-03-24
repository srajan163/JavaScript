const num=new Number(123);
console.log(num)

console.log(num.toString()) //123
console.log(num.toFixed(2)) //1111011
console.log(num.toPrecision(3))    
const hundred=1000;
console.log(hundred.toLocaleString('en-IN')) //123
console.log(Math)
//.abs returns the absolute value of the number
console.log(Math.abs(-123)) //123
//.ceil returns the smallest integer greater than or equal to a given number
console.log(Math.ceil(123.456)) //124
//.floor returns the largest integer less than or equal to a given number
console.log(Math.floor(123.456)) //123

//Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)
const min=10;
const max=20;
console.log(Math.floor(Math.random()* (max-min+1))+min) //0.123456789