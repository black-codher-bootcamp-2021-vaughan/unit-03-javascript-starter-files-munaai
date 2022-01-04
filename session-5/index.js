// Task 1



function getGrade (total) {
    if (total >90) {
        return "Your total is greater than 90 so your grade is A+";
    } else if (total >=80 && total <=90) {
        return "Your total is between 80 and 90 so your grade is A";
    } else if (total >=70 && total <=80) {
        return "Your total is between 70 and 80 so your grade is B";
    } else if (total >=60 && total <=70) {
        return "Your total is between 60 and 70 so your grade is C";
    } else if (total >=50 && total <=60) {
        return "Your total is between 50 and 60 so your grade is D"; 
    } else if (total >=40 && total <=50) {
        return "Your total is between 400 and 50 so your grade is E";
    } else if (total >=30 && total <=40) {
        return "Your total is between 30 and 40 so your grade is F"; 
    } else {
        return "Your total is less than 30 so you have failed";  
    }        

}
console.log(getGrade(81));

//revision

function getGrade (total) {
    switch (true){
    case total >90: 
        return "Your total is greater than 90 so your grade is A+";
        break;
    case total >=80 && total <=90:
        return "Your total is between 80 and 90 so your grade is A";
        break;
    case total >=70 && total <=80:
        return "Your total is between 70 and 80 so your grade is B";
        break;
    case total >=60 && total <=70:
        return "Your total is between 60 and 70 so your grade is C";
        break;
    case total >=50 && total <=60:
        return "Your total is between 50 and 60 so your grade is D"; 
        break;
    case total >=40 && total <=50:
        return "Your total is between 40 and 50 so your grade is E";
        break;
    case total >=30 && total <=40:
        return "Your total is between 30 and 40 so your grade is F"; 
        break;
    case total <30:
        return "Your total is less than 30 so you have failed";  
        break;  

}
}
console.log(getGrade(40));

const person = {
    name: "zayd",
    likes: "football",
    age: 7
}

console.log(person.name === "zayd" || person.age === 7);
console.log(person.name === "zayd" || person.age === 10);
console.log(person.name === "jamila" || person.age === 11);

//More revision

const iAmAQueen = true;

if (iAmAQueen) {
    console.log("I am a Queen");

}

//more examples

const personA = {
    name: "zayd",
    likes: "football",
    age: 34
}
if (personA.age <= 30) {
    console.log("You are under 30");
}  else if (personA.age >=31 && person.age <=39) {
    console.log("You are inbetween 31 and 39");
}  else {
    console.log("You are over 40");
}    

// switch revision

const x =2+2;

switch (x) {
    case 3:
        console.log("Too small");
        break;
    case 4:
        console.log("Perfect");
        break;
    case 5:
        console.log("Too big");
        break;    
}