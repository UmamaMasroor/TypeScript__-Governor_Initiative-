// Percentage Calculator 
// This code calculates percentage for 5 subjects
// Subjects : Math, Physics, Chemistry, English, Biology

import { log } from "console";


// Student Info 
let StudentId = "987ERG";

// Max Total 
let MaxTotal = 500;

// Students Marks
let MathMarks = 85;
let PhysicsMarks = 97;
let ChemistryMarks = 50
let EnglishMarks = 77;
let BiologyMarks = 37;

let FinalResult = (((MathMarks + PhysicsMarks + ChemistryMarks + EnglishMarks + BiologyMarks) / MaxTotal )* 100 ).toFixed(2);

let PrintResult = "Student " + StudentId + " obtained this percentage " + FinalResult + "%"
console.log(PrintResult);

let grade1 = FinalResult > 90 ;
console.log("grade1 : ", grade1);

let grade2 = FinalResult > 80 ;
console.log("grade2 : ", grade2);
let grade3 = FinalResult > 70 ;
console.log("grade3 : ", grade3);
let grade4 = FinalResult > 60 ;
console.log("grade4 : ", grade4);
