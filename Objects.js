
let mySymb=Symbol('123')

const myObj={
    name:"srajan",
    roll:"123",
    [mySymb]:"MYSYMBOL",
    

}
console.log(myObj[mySymb])
//Object.freeze(myObj) // this will make the object immutable

const greeting=function(){
    console.log("hello");
    console.log(`Your name is ${this.name}`);
}
console.log(greeting.call(myObj)) // this will call the function with the object as this

//Object.assign  merges two objects.


//Destructuring
const person={
    name:"srajan",
    age:21,
    isApproved:true,
    hobbies:['music','sports'],
    address:{
        street:'123 main st',
        city:'new york',
        state:'NY'
    }
}

const {name,age,isApproved,hobbies,address:{street,city,state}}=person
console.log(name) //srajan