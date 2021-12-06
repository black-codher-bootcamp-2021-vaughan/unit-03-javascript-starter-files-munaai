function getGrade (total) {
if (total > 90 ){
    console.log( "This person has achieved a grade A+")}
    else if (total > 80 && total <90){
        console.log( "This person has achieved a grade A")}   
         
    else if (total > 70 && total <80){
        console.log( "This person has achieved a grade B")}   

    else if (total > 60 && total <70){
        console.log( "This person has achieved a grade C")} 

    else if (total > 50 && total <60){
        console.log( "This person has achieved a grade D")} 

    else if (total > 40 && total <50){
        console.log( "This person has achieved a grade E")} 

    else if (total > 30 && total <20){
        console.log( "This person has achieved a grade F")}  

         
    else {
       console.log("this person has failed")
}
}



getGrade(45)


// A+ if total is greater than 90.
// ○ A if total is greater than 80 and less than or equal to 90.
// ○ B if total is greater than 70 and less than or equal to 80.
// ○ C if total is greater than 60 and less than or equal to 70.
// ○ D if total is greater than 50 and less than or equal to 60.
// ○ E if total is greater than 40 and less than or equal to 50.
// ○ F if total is greater than 30 and less than or equal to 40.
// ○ “Fail” is total is less than 30