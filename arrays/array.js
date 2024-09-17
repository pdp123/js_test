const arr = [0,0,0,0]
arr.unshift(9)
arr.push(9)

const myarr1 = arr.slice(1,3)
console.log(myarr1)
console.log("A - ",arr)
const myarr2 = arr.splice(1,3)
console.log(myarr2);
console.log("B - ",arr);


