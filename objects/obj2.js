// const tinderUser = new Object() - singleton object
const tinderUser = {} // - literal object

tinderUser.id = "abc123"
tinderUser.name = "Prateek"
tinderUser.status = "Logged Out"
//  console.log(tinderUser);

const regularUser  = {
    email:"song.email.com",
    fullName:{
        firstName:"Prateek",
        lastName:"Pole"
    }
}
// console.log(regularUser.fullName.firstName);


const obj1 = {1:1,2:2,3:3}
const obj2 = {4:4,5:5,6:6}

const obj3 = {...obj1,...obj2}
console.log(obj3);

const user = [
    {
        id: 1,
        email: "1@email.com"
    },
    {
        id: 2,
        email: "2@email.com"
    }
]

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));




 
