function identity(params) {
    return params;
}
let numresult = identity(42);
let stringresult = identity("Hello, TypeScript!");
let result = `
number value: ${numresult} <br>
String value: ${stringresult} <br>
`;
document.getElementById("output").innerHTML = result;
//console log results
console.log("Number Result: ", numresult);
console.log("String Result: ", stringresult);
export {};
