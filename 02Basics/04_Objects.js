// const tinderUser = new Object()

const tinderUser = {}


tinderUser.id = 1
tinderUser.name = "Nick"
tinderUser.isUser = true
tinderUser.age = 19

// console.log(tinderUser)

const userDetails = {
  email:"ayus2104@gmail.com",
  userfullname: {
    fullname:{
      firstname: "Ayush",
      lastname: "Gholap"
    } 
  }
}

// console.log(userDetails.userfullname.fullname.firstname)

const target = {
  1: "a",
  2: "b"
}
const source = {
  3: "c",
  4: "d"
}

// let combinedObj = Object.assign(target,source)
// console.log(combinedObj)

// let obj3 = {...target,...source}
// console.log(obj3)

const movies = [
  {
    id: 1,
    name: "Avenger",
    genre: "Multiverse"
  },
  {
    id: 2,
    name: "Durandhar",
    genre: "Action"
  }
]
// console.log(movies[0].name) 

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.values(tinderUser))

// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('email'))

// Destructuring of objects
const course = {
  coursename: "Data Science and AI",
  price: 999 ,
  courseInstructor: "Nick"
}

const {courseInstructor} = course

console.log(courseInstructor)

// {
//   "name":"Ayush",
//   "course": "TYDSAI",
//   "Marks": 9.8
// }



