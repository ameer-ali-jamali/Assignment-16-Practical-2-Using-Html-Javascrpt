
////////////////////////////////////////////////////////////////////////
/* 

Q1: Write a program that takes 3 numbers from user and find the sum of
 maximum and minimum number.

*/
///////////////////////////////////////////////////////////////////////

//  var num1 = parseInt(prompt("Type number")) 
//  var num2 = parseInt(prompt("Type number")) 
//  var num3 = parseInt(prompt("Type number")) 
//  if (num1>num2 && num1<num3){
//          alert(num2 + num3)
//      }
// else if (num3>num1 && num3<num2){
//          alert(num2+ num1)
//      }
// else if (num1>num3 && num1<num2){
//          alert(num2+ num3)
//      }

// else if (num1>num2 && num2>num3){
//          alert(num1+ num3)
//      }
// else if (num2>num1 && num2<num3){
//          alert(num1+ num3)
//      }
// else if (num1>num2 && num3<num1){
//          alert(num1+ num2)
//      }
// else{
//      alert("Please try again")
//}

////////////////////////////////////////////////////////////////////////
/* 

Q2: Write a weather forecast program.
Less than 20, display cold
20 – 30, display normal
Greater than 30, display hot.

*/
///////////////////////////////////////////////////////////////////////

// let a = parseInt(prompt("Enter Wheather In Numbers"));
// if(a<=20){
//      alert("Cold")
// }
// else if(a>20 || a<=30){
//      alert("Normal")
// }
// else if(a>30){
//      alert('Hot')
// }


////////////////////////////////////////////////////////////////////////
/* 

Q3: Write a temperature conversion program, ask user:
Press 1 to convert from Celsius to Fahrenheit or Press 2 to convert from Fahrenheit to Celsius.
If user presses 1 , ask for temperature in f and convert it to c. Vice versa for option 2.

*/
///////////////////////////////////////////////////////////////////////

// var num1 = parseInt(prompt(`Tempreture Converter 
//  1 Convert Celcius To Fehrenheit 
//  2 Convert Fehrenheit to Celcius`))

//  if(num1>0 && num1<2){
//   var c = parseInt(prompt("Enter Celcius"));
// alert(c*1.8+32)
//  }

//  if(num1>1 && num1<3){
//   var f = parseInt(prompt("Enter Fehrenheit"));
//  alert((f-32)/1.8)
//  }
 

////////////////////////////////////////////////////////////////////////
/* 

Q4: Create the same calculator program, but this time ask user for a password,
if he enters the correct password, perform the calculation, otherwise display 
message “Wrong Password”.

*/
///////////////////////////////////////////////////////////////////////

     // var pass =prompt("Enter Password");
     // if (pass=="admin"){
     //  let num1 = parseInt(prompt("Enter Any Numbers for calculation"))
     //  let num2 = parseInt(prompt("Enter Any Numbers for calculation"))  
     // document.write("Addition   =")
     // document.write(num1+num2)
     // document.write("<hr>")
     // document.write("Subtraction  =")
     // document.write(num1-num2)
     // document.write("<hr>")
     // document.write("Multiplication   =")
     // document.write(num1*num2)
     // document.write("<hr>")
     // document.write("Division    =")
     // document.write(num1/num2)
     // document.write("<hr>")
     // }
     // else if(pass!="admin"){
     //  document.write("Wrong Password")   
     //  }


////////////////////////////////////////////////////////////////////////
/*

Q5: Create a number guess game, fix a number and ask user to guess the number
between 1 to 10, if he guesses the correct number, display “You Won!”, otherwise
display “You lost! Better luck next time”

*/
///////////////////////////////////////////////////////////////////////

// var num1 = parseInt(prompt("Guess The Number Between 1 to 10 "))
// if (num1==3){
// alert("You Won!")
// }
// else if (num1>3 && num1<=10) {
// alert(`You lost! Better
// luck next time`)
// }
// else if(num1<3){
// alert(`You lost! Better
// luck next time`)
// }
// else if(num1<0){
// alert(`You lost! Better
// luck next time`)
// }
// else{
//     alert("Please Input Any Number")
// }

 ////////////////////////////////////////////////////////////////////////
/*

Q6: Create a calculator program. Ask user if he wants to perform addition/
subtraction/multiplication/division and display the result accordingly.

*/
///////////////////////////////////////////////////////////////////////

// var num1 = prompt("Please Enter >>> addition / subtraction / multiplication /  division <<< for calculation")
    

//     if (num1=="addition"){
//         var num2 = parseInt(prompt(""))
//     var num3 = parseInt(prompt(""))
//     document.write(num2+num3)
//     document.write("<hr>")
//     }
//     else if (num1=="subtraction"){
//     var num4 = parseInt(prompt(""))
//     var num5 = parseInt(prompt(""))
//     document.write(num4-num5)
//     document.write("<hr>")
//     }
//     else if (num1=="multiplication"){
//         var num6 = parseInt(prompt(""))
//     var num7 = parseInt(prompt(""))
//     document.write(num6*num7)
//     document.write("<hr>")
//     }
//     else if (num1=="division"){
//         var num8 = parseInt(prompt(""))
//     var num9 = parseInt(prompt(""))
//     document.write(num8/num9)
//     document.write("<hr>")
//     }