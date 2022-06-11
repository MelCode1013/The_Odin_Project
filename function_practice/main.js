//Write a function called add7 that takes one number and returns that number + 7.


let add7 = oneNum => oneNum + 7;

console.log(add7(7))

//Write a function called multiply that takes 2 numbers and returns their product.

let multiply = (n1, n2) => n1 * n2

console.log(multiply(2,2))

//Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

let capitalize = string => {
    let newString = string.toLowerCase()
    let firstLetCap = newString[0].toUpperCase() + newString.slice(1)
    return firstLetCap
}

console.log(capitalize("dOg"))

//Write a function called lastLetter that takes a string and returns the very last letter of that string:
let lastLetter = string => string.slice(string.length - 1)

console.log(lastLetter("kitty kat"))