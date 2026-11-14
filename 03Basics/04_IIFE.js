// Imediately Invoked Function IIFE


// function fullChai() {
//     const username = "Ayush";
//     // Named IIFE

//     (function halfChai() {
//       const website = "Aurora"
//       console.log(`${username} ${website}`)
//       // Named IIFE
//     })();
// };
// console.log(fullChai())



// ((user) => {
//   console.log(`${user} is logged in`)
//   // Unnamed IIFE
//   return user
// })("Ayush")

let val1 = 5;
let val2 = 10;

function addTwo(num1, num2){
  let totalNum = num1 + num2
  return totalNum
}

let result1 = addTwo(val1,val2)
console.log(result1)

let result2 = addTwo(2,4)
console.log(result2)