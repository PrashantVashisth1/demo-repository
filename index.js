const addFunction = function(a, b){
    return a+b;
}
const subractFunction = function(a, b){
    let result=a-b;
    return result;
}
const multiplyFunction = function(a, b){
    let result=a*b;
    return result;
}
const divideFunction = function(a, b){
    let result=a/b;
    return result;
}
const helloWorldFunction = function(){
    console.log("Hello World")
}
const atobFunction = function(a, b){
    for(let i=a;i<=b;i++){
        console.log(i);
    }
}
console.log(addFunction(1,2));
console.log(subractFunction(3,2));
console.log(multiplyFunction(2,3));
console.log(divideFunction(6,2));
helloWorldFunction();
atobFunction(1,5);