 // ---------------------------------- Learning Objects --------------------------------------

// Single ton 

// Object litaral 

const extra = Symbol('key1');
const details = {
    name: "A K Giri",
    age: 22,
    [extra]: "mykey1",  // when we denote a symbol so we write in [] => brakates otherwise without brakate this is normal 
    email: "a@gmail.com",
    location: 'kolkata'
}

console.log(details.email); // one prosses
console.log(details['email']);  // another prosses
console.log(details[extra]);
console.log(details);
details.email = "ak@gmail.com"
//Object.freeze(details);  // (Importent) when we use freeze than this email is freeze not Change this value in future
details.email = "jeetgiri@gmail.com"
console.log(details.email);

details.newObject =  function(){
    console.log('Hi this is Test');
}
console.log(details.newObject());


details.newObject2 =  function(){
    console.log(`Hi this is Second Text By: ${this.name}` );
}
console.log(details.newObject2());
