// singleton
`
When we create an object through constructor then only it is called singleton. if obj is
created through literals than it is not called a constructor.
`

const userId = Symbol("key")
// Object literals
const jsUser = {
  name:"Ayush",
  "full name": "Ayush N Gholap",
  [userId]: 1,
  age: 19,
  class: "TYDSAI",
  designation: "CR",
  isLoggedin: true
}

// console.log(typeof jsUser)
// console.log(jsUser.name)
// console.log(jsUser["full name"])
// console.log(jsUser["name"])

// console.log(jsUser[userId])
// console.log(typeof jsUser[userId])

// jsUser.isLoggedin = false
// Object.freeze(jsUser)
// jsUser.name = "Nick"
// console.log(jsUser)

jsUser.greeting = function(){
  console.log(`Hello my name is ${this.name}`)
}
console.log(jsUser.greeting())