// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
let a = 5;
const b = 10;

let c = a+b;

console.log(c);

a = 20;

console.log("" + c)

c = a+b

console.log(c)


function sayHey() {
    console.log("hey!");

}

function conversation() {
    sayHey();
    console.log("my name is muna");
    console.log("I love me");

}
conversation();


// var x = "muna";
// var y = 24;
// c = y + 5;

// function futureAge (x,y) {
// return `Hi ${x} In 5 years time, you will be ${c}` 
// // return "Hi " +  x + " In 5 years time, you will be " +c;
// }
// console.log(futureAge (x,y));


// The top part is the way i did it First. It makes more sense at the bottom


function futureAge (name,age) {
    const ageInFiveYears = age + 5;
    return `Hi ${name} In 5 years time, you will be ${ageInFiveYears}`
}    

console.log(futureAge("muna", 20));
    
