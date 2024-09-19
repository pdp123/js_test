// // this keyword tells us about current object

// const user = {
//     username:"Prateek",
//     price:999,
//     welcomeMessage : function() {
//         console.log(`${this.username} welcome `);
        
//     }
// }

// const changed_function = user.welcomeMessage()

// changed_function = function(){
//     console.log("Function Changed");
    
// } 
// user.welcomeMessage()

const chai =()=>{
    let username="hitesh"
    console.log(this.username);
    
}
chai()