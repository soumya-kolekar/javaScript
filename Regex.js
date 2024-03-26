//
let regEx1 = /^[\w]+@[a-z]+\.(com|in)$/;


console.log(regEx1.exec("!Ssoumi@gmail.com"))
//execute Method ->pattern mathed->Array
//execute Method ->pattern not matched->null
console.log(regEx1.test("Ssoumi@gmail.com"))
//test method-> givess bollean output-->True/false

//String object methods-str.search(regEx),str.match(regex),str.replace(regex,<text>)
let str="helo";
console.log(str.search("el"));//1,-1
console.log(str.match("he"));//array,null
console.log(str.replace(/e/g,"el"));


