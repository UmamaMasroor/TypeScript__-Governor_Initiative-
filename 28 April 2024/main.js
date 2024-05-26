// 1........conditional ternary operator
// let isLoggedIn : boolean = false;
// let check : string = isLoggedIn ? "You are Logged in!" : "SignUp first"; 
// console.log(check);
// 2......above example with if else statement
// let isLoggedIn : boolean = false;
// if (isLoggedIn ) {
//     console.log("You are logged in");
// }
// else{
//     console.log("SignUp first");
// }
// 3.............Authentication
// let email: string = "abc@gmail.com"
// let password = "123abc"  // used type inference here
// let isLoggedIn = true;
// if (
//     email == "abc@gmail.com"
//     &&
//     password == "123abc"
// ) {
//     isLoggedIn = true;
//     console.log("Your email & password both are correct");
// }
// else if (
//     email == "abc@gmail.com"
//     ||
//     password == "123abc"
// ) {
//   console.log("Your email or password is incorrect");
// }
// else{
//     console.log("Your email and password both are incorrect");
// }
// 4.............Switch Statement 
// switch statement ma aik hi key pass hogi 
// let StudentRank = 1
// switch (StudentRank) {
//     case 1:
//         console.log("Congrats! You got 1 Rank");
//         break;  
//         // if break nahi lagaya toh sary cases chalain gay break case ko terminate kar raha hay yahan
//     case 2:
//         console.log("Congrats! You got 2 Rank");
//         break;
//     case 3:
//         console.log("Congrats! You got 3 Rank");
//         break;
//     default:
//         console.log("You failed GoodLuck for the next time");
//         break;
// }
// 4............... Functions
// basic example
// function checkTime() {
//    let getDateAndTime =  new Date()
//    console.log(getDateAndTime);
// }
// checkTime()
// example 2 parameters and arguments ..
// function checkRank(StudentRank) {
// switch (StudentRank) {
//     case 1:
//         console.log("Congrats! You got 1 Rank");
//         break;  
//     case 2:
//         console.log("Congrats! You got 2 Rank");
//         break;
//     case 3:
//         console.log("Congrats! You got 3 Rank");
//         break;
//     default:
//         console.log("You failed GoodLuck for the next time");
//         break;
// }
// }
// checkRank(3);
// checkRank(2);
// checkRank(1);
// checkRank(0);
// example 3.... to get Tax slab create function
// function getTaxSlab(salary:number) {
//     let slab = "10%";
//     if (salary >= 100000){
//         slab= "17%"
//     }
//     else if (salary >= 50000){
//         slab= "15%"
//     }
//    else{
//         slab= "10%"
//     }
//     return slab ;
// }
// console.log( getTaxSlab(20000));
// console.log( getTaxSlab(200000));
// console.log( getTaxSlab(60000));
// Tax Slab example end here 
// example 4 with multiple parameters
// function addition(num1:number, num2:number, num3:number) {
//     return num1 + num2 + num3;    
// }
// console.log( addition(3,5,8));
// SENARIO BASED ACTIVITY:
//online app ecommerce product discount original price , percent and final price 
// function discount_on_products( oil) {
//     let original_price_soap = 100;
//     // let original_price_oil = 2000;
//     // let original_price_wheat = 2000;
//  let final = original_price_soap - oil
//  console.log(final);
//     return 
// }
// discount_on_products(10)
// console.log("You got discount of 10% on oil and original price becomes"+ final);
function discount_price(original_price) {
    var discount;
    if (original_price > 2000) {
        discount = 20;
    }
    else if (original_price > 1000) {
        discount = 10;
    }
    else {
        discount = 5;
    }
    return original_price - (original_price * discount / 100);
}
console.log("After discount final price become");
console.log(discount_price(3000));
