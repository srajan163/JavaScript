//datatypes divided into two categories
//1. Primitive datatypes   7types   1. Number 2. String 3. Boolean 4. Undefined 5. Null 6. Symbol 7. BigInt
//2. non-primitive datatypes types are 1. Object 2. Array 3. Function 4. Date 5. RegExp 6. Set 7. Map 8. WeakSet 9. WeakMap 10. Promise 11. Proxy 12. Reflect 13. Error 14. ArrayBuffer 15. SharedArrayBuffer 16. DataView 17. Float32Array 18. Float64Array 19. Int8Array 20. Int16Array 21. Int32Array 22. Uint8Array 23. Uint8ClampedArray 24. Uint16Array 25. Uint32Array 26. BigInt64Array 27. BigUint64Array
//
const id=Symbol('123')

let heros=['superman','batman','spiderman']
let myObj={
    name:'srajan',
    age:21,
    isApproved:true
}
let mySet=new Set([1,2,3,4,5])

let myfun=function(){
    console.log('hello')
}
//const id=Symbol('123')
const anotherID=Symbol('123')

console.log(id===anotherID) //false

let Obj = {
    name: 'rishi',
    age: 220,
    isApproved: true,
}