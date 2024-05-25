// 1) Hoisting...........
// Example using var*
// console.log(a); // undefined
// var a = 3;
// var b = 5;
// console.log(b); // 5


// TDZ Temporal Dead Zone*
// Example using let*
// console.log(food); // reference error
// let food = "Biryani"
// console.log(food);

// let fruit ;   // TDZ ends here
// console.log(fruit); // undefined
// fruit = "apple"

// 3) IIFE Immediately Invoked Funnction Expression*

// ( function () {
//     console.log("Runs Immediately");
    
// })();

// 4) Recursive Funnction*
// basic example*
// function recursive() {
//     console.log("Have a good day!");
//     recursive()
// }
// recursive()

// example with statement to make it finite (stopping condition)*
// function recursive(count:number) {

//     if (count >= 0){
//         recursive(count -1);
//         console.log(count);
//     }

// }
// recursive(5)

// 5) Array*
// initialize array*
// let sampleArray = [1, 2, 3, 4, 5, 6, 7, 67, 78];

// to count the number of items in an array*
// console.log(sampleArray.length);

// indexing in an array (starts from 0)*
// console.log(sampleArray[0]);

// sampleArray[0]= 108;
// console.log(sampleArray[0]);

// 7) Build in Methods

// let fruits:string[] = ["Apple", "Banana", "Orange"]

// fruits.push("Mango")
// console.log("With push method: ",fruits);

// fruits.unshift("Pear")
// console.log("With unshift method: ",fruits);

// fruits.pop()
// console.log(fruits);

// fruits.shift()
// console.log(fruits);


// Filter example*
// const ages = [32, 33, 16, 40,12,11];
// const result = ages.filter(checkAdult);
// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(result);

// Filter Example using arrow function
// function test (a){
//     return a * 4
// }
// console.log( (a) => a * 4);
//  console.log( test(5));
 
let example = [1,2,4,6,89,98,63,33];
let result = example.filter((a) => a % 2 ==0)
console.log(result);

