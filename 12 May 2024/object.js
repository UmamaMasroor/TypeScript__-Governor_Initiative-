// const students = {
//     name : 'Ahmed',
//     studentId : '1234',
//     age : 21
// }
// console.log(students['name']);
// Nested Objects
var students = {
    'first name': 'Ahmed',
    studentId: '1234',
    age: 21,
    qualification: {
        grade: '10th',
        result: "Aone"
    }
};
console.log(students);
console.log(students.qualification.grade); // different ways to access [] and with dot.
