// For Loops

// let arr = [1,2,3,4,5,6,7,8,9,10]

// for (let i=0;i < arr.length;i++){
//   const element = arr[i]
//   if (element == 5){
//     console.log("5 is the best number")
//   }
//   console.log(element)
// }

// console.log(element)

// Nested for Loops(Tables print)
// for (i=0; i <= 10;i++){
//   console.log(`Outer loop ${i}`)
//   for (j = 0; j <= 10; j++){
//     console.log(`Inner loop ${j} in outer loop ${i}`)
//     Table 
//     console.log(`${i} * ${j} = ${i*j}`)
//   }
// }

// let fruits = ["Mango","Apple","Strawberry","Lichi"]

// for (i=0; i<fruits.length;i++){
//   const fruit = fruits[i]
//   console.log(fruit)
// }

// for (i=1;i <= 20;i++){
//   if (i == 5){
//     console.log("Detected 5")
//     break
//   }
//   console.log(`Value of i is ${i}`)
// }

for (i=1;i <= 20;i++){
  if (i == 5){
    console.log("Detected 5")
    continue
  }
  console.log(`Value of i is ${i}`)
}