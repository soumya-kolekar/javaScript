console.log(eval('2+3'));
//gave 5 as output
//eval can excute expression given in string
console.log(parseInt("123k45"));
//ignores char in parseint
console.log(parseFloat("4.2a3.13"));
//ignores char in parseFloat
console.log(isNaN("s"+'a'));
//nan means not a number
let a=22/7;
console.log(isFinite(a));
//checks finite or notq
console.log(Number('123'));
console.log(String(1));