// control flow in js
//
const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
    console.log("You can make a purchase")
}

// switch case
const grade = 'A';

switch (grade) {
    case 'A':
        console.log("You got an A");
        break;
    case 'B':
        console.log("You got an B");
        break;
    case 'C':
        console.log("You got an C");
        break;
    case 'D':
        console.log("You got an D");
        break;
    case 'E':
        console.log("You got an E");
        break;
    default:
        console.log("Not a valid grade");
}