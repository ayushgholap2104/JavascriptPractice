// const marvelHeros = ["Thor", "Ironman", "Siderman"]

// const dcHeros = ["Superman", "Flash", "Batman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros[3][1])

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros)

// Spread
// let all_new_heros = [...marvelHeros,...dcHeros]
// console.log(all_new_heros)

// Flat
// let clusterArr = [1,3,4,[5,7,8],9,[1,2,3,[2,1,5]]]
// console.log(clusterArr)
// let flatArr = clusterArr.flat(Infinity)
// console.log(flatArr)

// To check whether value is array or not
// console.log(Array.isArray("Ayush"))
// For Single value to convert into array
// console.log(Array.from("Ayush"))
// console.log(Array.from({name:"Sagar"})) //Interesting

// For Multiple values to convert into array
// let value1 = 100;
// let value2 = 200;
// let value3 = 300;

// let newArr = Array.of(value1,value2,value3);
// console.log(newArr)

// const marvelHeros = ["Thor", "Ironman", "Siderman"];
// marvelHeros.splice(0,2,"Hulk","Shaktiman")
// console.log(marvelHeros)

// marvelHeros.splice(-1,0,"Thor","Ironman")
// console.log(marvelHeros)

// let newArr = [2,5,1,7,4]
// newArr.reverse()
// console.log(newArr)

// let newArr = [2,5,1,7,14]
// newArr.sort()
// console.log(newArr)

let inCity = "Mumbai,Pune,Karad"
// console.log(inCity)

let cityArr = inCity.split(",")
console.log(typeof cityArr)
