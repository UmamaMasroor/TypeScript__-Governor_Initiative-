// let a = {
// name:'Umama',
// father_name:'Masroor',
// // studentId :123
// }
// let b = {
//     name:'Umama',
//     father_name:'Masroor',
//     age: 19
// }
// a=b;
// console.log(a);  
// EMPLOYEE SALARY EXAMPLE CODE .............
// Defining Types
// interface Employee {
//     employeeId: number,
//     employeeName: string,
//     salary: number;
// }
// // Variable Initialization
// let collectionOfEmployee: Employee[] = [
//     {
//         employeeId: 7625,
//         employeeName: "Ali",
//         salary: 25000
//     },
//     {
//         employeeId: 1025,
//         employeeName: "Sara",
//         salary: 50000
//     },
//     {
//         employeeId: 9825,
//         employeeName: "Ahmed",
//         salary: 100000
//     },
// ];
// let filterBySalary = collectionOfEmployee.filter((employee : Employee)=> employee.salary > 50000);
// let filterByEmployeeId = collectionOfEmployee.filter((employee : Employee)=> employee.employeeId == 1025);
// let filterByEmployeeName = collectionOfEmployee.filter((employee : Employee)=>employee.employeeName.includes("Atif") )
// LOOP.............
// example 1...............
// initialization, condition , execute code according to condition and then increment
for (var i = 0; i < 3; i++) {
    console.log("Hello, world!");
}
// example 2...............
for (var i = 1; i < 6; i++) {
    console.log(i);
}
// example 3...........
// program to display the sum of natural numbers
var sum = 0;
var n = 100;
// loop from i = 1 to i = n
// in each iteration, i is increased by 1
for (var i = 1; i <= n; i++) {
    sum += i; // sum = sum + i
}
console.log("sum: ".concat(sum));
// Output: sum: 5050
// example 4...........
var fruits = ["apple", "banana", "cherry"];
console.log(fruits[2]);
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
