placesToVisit = ["Paris", "New York","Switzerland"];

//array index starts from 0
console.log(placesToVisit[0]);

//the last element will be removed from the array
placesToVisit.pop();
console.log("after pop operation",placesToVisit);

//push the element at the end of array
placesToVisit.push("Switzerland");
console.log("after push operation",placesToVisit);

//give the index value for element
console.log("index value of New York is",placesToVisit.indexOf("New York"));

//forEach() is used to interate over an array.
console.log("forEach:");
placesToVisit.forEach(function(place) {
    console.log(place);
    })
//OR
placesToVisit.forEach((element) => {console.log('Array elt:',element)});
