let myDate = new Date()
// console.log(myDate.toLocaleTimeString())


let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate);


let timeStamp =Date.now()
console.log(Math.floor(timeStamp/1000));

// month start from 0 in javascript

timeStamp.toLocaleString('default',{
    weekday:"long",
})