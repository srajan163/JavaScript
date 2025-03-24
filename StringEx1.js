const nam= "John";


console.log(` Hello My name is ${nam}`); //Hello My name is f John

const Gamename="PUggg";
console.log(`My favourite game is ${Gamename}`); //My favourite game is PUBG
console.log(`game name in capital ${Gamename.toUpperCase()}`); //My favourite game is PUBG
const anotherstring=Gamename.slice(1,3);
console.log(anotherstring); //UG
console.log(Gamename.length); //4


//trim removes the white spaces from the string
let url="    https://www.google%30.com    ";
let Stringurl=url.replace('%30','').trim();
console.log(Stringurl); //    https://www.google.com