"use strict";
// Percentage Calculator 
// This code calculates percentage for 5 subjects
// Subjects : Math, Physics, Chemistry, English, Biology
Object.defineProperty(exports, "__esModule", { value: true });
// Student Info 
var StudentId = "987ERG";
// Max Total 
var MaxTotal = 500;
// Students Marks
var MathMarks = 85;
var PhysicsMarks = 97;
var ChemistryMarks = 50;
var EnglishMarks = 77;
var BiologyMarks = 37;
var FinalResult = (((MathMarks + PhysicsMarks + ChemistryMarks + EnglishMarks + BiologyMarks) / MaxTotal) * 100).toFixed(2);
var PrintResult = "Student " + StudentId + " obtained this percentage " + FinalResult + "%";
console.log(PrintResult);
var grade1 = FinalResult > 90;
console.log("grade1 : ", grade1);
var grade2 = FinalResult > 80;
console.log("grade2 : ", grade2);
var grade3 = FinalResult > 70;
console.log("grade3 : ", grade3);
var grade4 = FinalResult > 60;
console.log("grade4 : ", grade4);
