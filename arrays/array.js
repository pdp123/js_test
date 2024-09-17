// const arr = [0,0,0,0]
// arr.unshift(9)
// arr.push(9)

// const myarr1 = arr.slice(1,3)
// console.log(myarr1)
// console.log("A - ",arr)
// const myarr2 = arr.splice(1,3)
// console.log(myarr2);
// console.log("B - ",arr);

const herosx = ["hero1","hero2","hero3"]
const herosy = ["hero4","hero5","hero6"]

// herosx.push(herosy)
// const heros = herosx+herosy
// console.log(herosx);
// console.log(heros);

const allheros  = herosx.concat(herosy)
console.log(allheros);

const allNewHeros = [...herosx,...herosy]
console.log(allNewHeros);

const anotherArray = [1,2,3,[4,4,6],[7,8[4,5]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))





