const user = {
  username: "Ayush",
  price: 999,
  welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`)
  }
}
// user.username = "Alia"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//   const username = "Ayush"
//   console.log(this.username)
// }
// chai()

// const chai = () => {
//   const username = "Ayush"
//   console.log(username)
// }
// chai()

// Explicit
// const addSum = (num1,num2) => {
//   return num1 + num2
// }
// console.log(addSum(5,5))

// Implicit
// const addSum = (num1,num2) => num1 + num2
// const addSum = (num1,num2) => (num1 + num2)

// console.log(addSum(5,5))

// Returning an Object
// const addSum = (num1,num2) => ({username: "Ayush"})
// console.log(addSum(5,5))