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
