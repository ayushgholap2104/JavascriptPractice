// var c = 300
// let a = 100

// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
//   console.log("Value of Inner a:",a)
// }

// console.log(a)
// console.log(b)
// console.log("Value of outer a:",a)
// console.log(c)

// Closure 
// function one(){
//   const userName = "Ayush"

//   function two(){
//     const website = "Aurora"
//     console.log(userName);
//   }
//   console.log(website);
//   two()
// }

// one()

// Conditional Statements
// if(true){
//   const userName = "Ayush"
//   if(userName === "Ayush"){
//     const website = "Aurora"
//     console.log(userName +" "+ website)
//   }
//   console.log(website)
// }

// console.log(userName)

// --------- Interesting -------
// Hoisting
// console.log(addOne(5))
// function addOne(num){
//   return num + 1
// }


console.log(addTwo(5))
let addTwo = function(num){
  return num + 2
}
