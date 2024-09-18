// singleton
// Objects.create

//object literals
const mySym = Symbol("key1")
const JsUser = {
    name:"Prateek", 
    age:21,
    location:"Jaipur",
    "full Name":"Prateek Pole",
    [mySym]:"key1"


}
myArr = ["h","p"]
// console.log(JsUser["full_Name"]);
// console.log(JsUser["full Name"]);
// console.log(typeof JsUser[mySym]);

JsUser.age = 19
// console.log(JsUser);

// Object.freeze(JsUser) //locking the object
JsUser.age = 90
// console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello");
    
}
JsUser.greetingsTwo = function(){
    console.log(`hello ${this.name}`);
    
}

console.log(JsUser.greetingsTwo());


