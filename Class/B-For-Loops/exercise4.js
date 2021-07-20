
// In this exercise we want to print ONLY the numbers greater than 12

let numbersList = [5, 3, 15, 8, 24, 31, 12];
let newArray = [];
// Write a "for" loop to ITERATE through the numbersList array

// Inside the "for" loop, write an "if" statement to 
// print the number only if it is greater than 12
for (i = 0; i < numbersList.length; i++){
 if (numbersList[i] > 12){
  newArray.push(numbersList[i]);
 }
 
}
  console.log(newArray)

