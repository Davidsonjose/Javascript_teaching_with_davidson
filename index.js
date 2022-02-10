

// TODO building a application that calculate our age when we insert our year of birth

let date = new Date();
let currentYear = date.getFullYear();

function yearOfBirth(yearOfBirth) {
    let dateOfBirth = currentYear - yearOfBirth;
    return dateOfBirth;
}
let result = yearOfBirth(50);
console.log(result);
