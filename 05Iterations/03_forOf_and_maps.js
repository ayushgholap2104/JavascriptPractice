// For of loop

// let arrNums = [1,2,3,4,5]

// for (const num of arrNums){
//   console.log(num)
// }
// let userName = "Ayush Gholap"

// for (const name of userName){
//   console.log(`Each char is ${name}`)
// }

// Map Datatype
let myMaps = new Map()
console.log(typeof myMap)
myMaps.set('IN','INDIA')
myMaps.set('IN','INDIA')
myMaps.set('RUS','RUSSIA')
myMaps.set('CHI','CHINA')

console.log(myMaps)
for (const [key,val] of myMaps){
  console.log(`${key}:${val}`)
}

const myObj = {
  name:"Ayush",
  div:"E",
  rollno: 20
}
// for (const obj of myObj){
//   console.log(obj)
// }