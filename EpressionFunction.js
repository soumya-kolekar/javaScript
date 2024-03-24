//Function Expression
//var myfuction=function(parameters){body}
function greet(choice){
    let mes=choice();
    console.log(mes);
}
let mes = function(){return "hello" };
greet(mes);