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


/**
 * Currency Converter
*/

function converter(amount, type){
    let rate = 0;
    switch (type) {
        case 'USD':
            rate = 86;
            break;
            
        case 'Euro':
            rate = 93;
            break;

        case 'CAD':
            rate = 67;
            break;
        case 'Pound':
            rate = 114;
            break;
    }
    console.log(`
        Name = ${names}
        Your total amount in Bangladesy taka....
        
        ${amount} ${type} = ${amount * rate} BDT
    `);
};