export {};
// array a:["blue ","red","green ","yellow"]
const A: string[] = ["blue ", "red", "green ", "yellow"];
// array b:["red","yellow","pink","purple"]
const B: string[] = ["red", "yellow", "pink", "purple"];

// union function
function getunion(arr1: string[], arr2: string[]): string[] {
    return Array.from(new Set([...arr1, ...arr2]));
}

// intersection function
function getintersection(arr1: string[], arr2: string[]): string[] {
    return arr1.filter((item) => arr2.includes(item));
}

// result
const unionresult: string[] = getunion(A, B);
const intersectionresult: string[] = getintersection(A, B);

// result display
const result1: string = `
array A: [ ${A} ] <br>
array B: [ ${B} ]<br>
<b>Union: [ ${unionresult} ]</b><br>
`;

const result2: string = `
<b>Intersection: [ ${intersectionresult} ]</b><br>
`;

document.getElementById("union-result")!.innerHTML = result1;
document.getElementById("intersection-result")!.innerHTML = result2;

console.log("Union: ", unionresult);
console.log("Intersection: ", intersectionresult);

// union and intersection of a and b


