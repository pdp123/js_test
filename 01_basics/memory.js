// two types of memory stack and heap

let myYoutubeName = "PrateekPole.com"
let anotherName = myYoutubeName
anotherName = "AnotherYTChannel"
console.log(anotherName);
console.log(myYoutubeName);

let userOne = { //heap//
    email:"user@google.com",
    upi:"obsbi"
}

let userTwo = userOne
userTwo.email = "user2.email.com"
console.log(userTwo);
console.log(userOne);

// we can see both are getting changed user1 and user2 so thats the magic

