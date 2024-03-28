// Code your solution here

//takes an array of drivers
//function takes the array of drivers and a name 
//function matches the name to the list of drivers names

const findMatching = (array,name) => array.filter(item => item.toLowerCase().includes(name.toLowerCase()))

//note: if you use curly braces around {array.filter(item => item.includes(name))}, would need a return statement

//function in function form:
// function findMatching(drivers, name) {
//     return drivers.filter(driver => driver.lowerCase().includes(name.lowerCase()));
// }


//function that will see if the names in array BEGIN with name
// non case sensitive
const fuzzyMatch = (array, name) => {
    //takes length of name
    const wordLength = name.length
    //new array that checks if first letters (using splice) is equal to inputted name
    //need return because {}
    return array.filter(item => item.slice(0,wordLength).toLowerCase() === (name.toLowerCase()))
}


//array of objects
//each object has 2 properties, name and hometown
//function returns each element where name property matches the string (2nd arg)
const matchName = (object, string) => {
    //filters where name is equal to inputted string
   return object.filter(item => item.name == string)
}
















// function findMatching(drivers, name) {
//     return drivers.filter(driver => driver.includes(name));
// }
