function sayMyName(...nums){
    return nums;
    
}
// console.log(sayMyName(100,200,300));

const user  = {
    id:1,
    name:"Prateek"
}

function handleObject(anuobject){
    console.log(`this is id${anuobject.id}`);
    
}
handleObject(user)


