// function info(name = 'user', skill = 'my skill undefind', age = +'age undefind'){


//     let ages = age ? 2023 - age : 'invalid';

//     return `Hi i'm ${name}, I'm ${skill}, I'm ${ages} years old`;

// };
// console.log(info('Developer Rubel Hasan', ' Js Developer', 2000));


// let mark = +prompt(`Please type your bangla result`);

// let result = (mark <= 32) ? `You're Fial In this seasion` : `You're pass In this seasion`;

// console.log(result ?? 'This Data Are Invalid');

// if (mark <= 32 ) {
//     console.log(`You're Fial In this seasion`);
// } else {
//     console.log(`You're pass In this seasion`);
// }



function getmarks(marks){

    let gpa;

    if (marks >=0 && marks < 32) {
        gpa = 'F';
    } else if(marks >= 33 && marks <= 40) {
        gpa = 'D';
    } else if(marks >= 41 && marks <= 50) {
        gpa = 'C';
    } else if(marks >= 51 && marks <= 60) {
        gpa = 'B';
    } else if(marks >= 61 && marks <= 70) {
        gpa = 'A-';
    } else if(marks >= 71 && marks <= 80) {
        gpa = 'A';
    } else if(marks >= 81 && marks <= 100) {
        gpa = 'A+';
    }
    return gpa;
};
function getmarksg(marks){

    let cgpa;

    if (marks >=0 && marks < 32) {
        cgpa = 0;
    } else if(marks >= 33 && marks <= 40) {
        cgpa = 1;
    } else if(marks >= 41 && marks <= 50) {
        cgpa = 2;
    } else if(marks >= 51 && marks <= 60) {
        cgpa = 3;
    } else if(marks >= 61 && marks <= 70) {
        cgpa = 4;
    } else if(marks >= 71 && marks <= 80) {
        cgpa = 4.5;
    } else if(marks >= 81 && marks <= 100) {
        cgpa = 5;
    }
    return cgpa;
};