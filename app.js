let names = prompt(`Type your Name Please.`)
let de = prompt(`Type your Departments`);
let roll = prompt(`Type your Class Roll`);
let b = +prompt(`Hello ${names}, Type your Bungla Sub: Result`);
let e = +prompt(`Hello ${names}, Type your English Sub: Result`);
let m = +prompt(`Hello ${names}, Type your Math Sub: Result`);
let s = +prompt(`Hello ${names}, Type your Social Sub: Result`);
let i = +prompt(`Hello ${names}, Type your Islam Sub: Result`);

let total_marks = b + e + m + s + i;
// let gpa = total_marks / 6 ;

// let gpa = b + e + m + s + i;


// let total_cgpa = '';
// let total_gpa = '';

// if (b >=0 && b < 32) {
//     total_cgpa = 0;
//     total_gpa = 'F';
// } else if(b >= 33 && b <= 40) {
//     total_cgpa = 1;
//     total_gpa = 'D';
// } else if(b >= 41 && b <= 50) {
//     total_cgpa = 2;
//     total_gpa = 'C';
// } else if(b >= 51 && b <= 60) {
//     total_cgpa = 3;
//     total_gpa = 'B';
// } else if(b >= 61 && b <= 70) {
//     total_cgpa = 4;
//     total_gpa = 'A-';
// } else if(b >= 71 && b <= 80) {
//     total_cgpa = 4.5;
//     total_gpa = 'A';
// } else if(b >= 81 && b <= 100) {
//     total_cgpa = 5;
//     total_gpa = 'A+';
// }

console.log(`

    Name               = ${names}
    Department         = ${de}
    Roll               = ${roll}

    =================================================
    Your Mark sheet          :
    Subject            Marks         Grad             CGPA
    Bangla             ${b}             ${getmarks(b)}               ${getmarksg(b)}
    English            ${e}             ${getmarks(e)}                ${getmarksg(e)}
    Math               ${m}             ${getmarks(m)}                ${getmarksg(m)}
    Social             ${s}             ${getmarks(s)}                ${getmarksg(s)}
    Islam              ${i}             ${getmarks(i)}               ${getmarksg(i)}

    Total Marks        ${total_marks}

`);