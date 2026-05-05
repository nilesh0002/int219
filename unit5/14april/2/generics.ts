export{}
 
function identity<T>(params: T): T {
    return params;
}

let numresult: number = identity<number>(42);
let stringresult: string = identity<string>("Hello, TypeScript!");

let result:string = `
number value: ${numresult} <br>
String value: ${stringresult} <br>
`;

document.getElementById("output")!.innerHTML = result;

//console log results
console.log("Number Result: ", numresult);
console.log("String Result: ", stringresult);