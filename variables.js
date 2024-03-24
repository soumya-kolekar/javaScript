//number
let employeeId =52545;
let employeeSalary = 62555.25;

console.log("ID is :" +employeeId);
console.log("Salary is :" +employeeSalary);
//String
let msg="hello";

console.log("message from me is :"+msg);
// undefined
var placeToVisit;
console.log(placeToVisit);

//nullvalues
cabdetails=null;
console.log(cabdetails);

//double equals =boolean 
console.log('100'==100);
//equality operator checks fpor the value and not data type



//strict equals or triple equals
num1=10;
num2='10';
console.log(num1===num2);//false

var x = 5;   // number
var y = '5' // string
console.log(x == y)  //true


console.log('Sum' ,20+30);

//concationation for String
console.log("heloo"+"world");

//Addition for integer
let data=550;
console.log(data+50);


data="StringAsExample";
console.log(typeof(data));

//Exponential Operator
console.log(10**5);

console.log(null + 'Trip'); 

//Conditional Operators->manipulate,compare,conditonal

let n=0;
if(n>0){
    console.log("n is positive");
}else if(n==0){
    console.log("n is zero");
}
else{
    console.log("n is negative");
}
//JS doesnt have elseif construct


//Ternary
let age = 21;
/*if(age>0){
    console.log("age is verified");
}
else{
    console.log("age is not verified");
}*/


let status = age >= 18 ? 'Eligible' : 'Non Eligible';
console.log('Status is:' + status);
console.log("Status" + status);


console.log('Sum' ,20+30);

//switch
let choice='b';
switch(choice){
    case 'a' : console.log('Trip to Africa');
                break;
    case 'b' : console.log('Trip to India');
                break; 
    default : console.log('Trip to Europe');
                        

}




