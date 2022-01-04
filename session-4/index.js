// ****************************************************TASK 1 - OBJECTS****************************************************


let personA = {
    name: 'muna',
    age: '5',
    location: 'birmingham',
    likes: 'swimming'
};

let personB = {
    name: 'sam',
    age: '6',
    location: 'london',
    likes: 'yoga'
};

let personC = {
    name: 'ben',
    age: '7',
    location: 'bristol',
    likes: 'gym'
};


let personD = {
    name: 'ben',
    age: '8',
    location: 'newcastle',
    likes: 'football'
};

function biography (person) {
    return "Hi my name is " + person.name + ", I am " + person.age + ", I live in " + person.location + " and i like " + person.likes

}

console.log(biography(personA));
console.log(biography(personB));
console.log(biography(personC));
console.log(biography(personD));



//Boolean revision

const isBlackCodherAmazing = true;
const isTheWeatherAmazing = false;

console.log("Is Black Codher amazing? " + isBlackCodherAmazing);
console.log("Is the weather amazing? " + isBlackCodherAmazing);

//another example of boolean

const apple = "apples";
const orange = "oranges";

isequal = apple === orange;

console.log("Are apple and orange equal? " + isequal);


//one more

const students = 20;
const mentors = 30;
const pizza = 40;

const isStudentsThanMentors = students > mentors
const isPizzaMoreThanStudents = pizza > students
const isEnoughPizzaForEveryone = pizza > (students + mentors) 

console.log("Is there more students than mentors? "+ isStudentsThanMentors);
console.log("Is there enough pizza for students? "+ isPizzaMoreThanStudents);
console.log("Is there enough pizza for everyone? "+ isEnoughPizzaForEveryone);

// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

const x = 6;
const y = 4;

const addition = x + y;

console.log("Addition: x + y " + addition);

const subtraction = x - y;

console.log("Subtraction: x - y " + subtraction);

const multiplication = x * y;

console.log("multiplication: x * y " + multiplication);

const division = x * y;

console.log("Division: x + y " + division);



// ****************************************************TASK 3****************************************************

const yourAge = 15;
const minDrivingAge = 18;

const isAllowedToDrive = yourAge > 18;

console.log(yourAge + " is old enough to drive? " + isAllowedToDrive);



if (yourAge > minDrivingAge) {
    console.log( "You are over " + minDrivingAge + ", so you are allowed to drive!");

}

else (yourAge < minDrivingAge)
    console.log( "You are not over " + minDrivingAge + ", so you are not allowed to drive!");



//revision
const age = 17;
const minAgeToDrive = 18;
const isAbleToDrive = age > minAgeToDrive;

console.log("You are " + age + " so lets see if you are able to drive? " + isAbleToDrive);   

//Homework
const personOne = {
    name: "john",
    age: 5,
}

const personTwo ={
    name: "ben",
    age: 10,

}

function whoIsOlder(person){
    isJohnOlderThanBen = personOne.age > personTwoAge;
    return "john is older than ben " + isJohnOlderThanBen

}
console.log(whoIsOlder);














