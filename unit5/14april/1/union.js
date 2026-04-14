// array a:["blue ","red","green ","yellow"]
const A = ["blue ", "red", "green ", "yellow"];
// array b:["red","yellow","pink","purple"]
const B = ["red", "yellow", "pink", "purple"];
// union function
function getunion(arr1, arr2) {
    return Array.from(new Set([...arr1, ...arr2]));
}
// intersection function
function getintersection(arr1, arr2) {
    return arr1.filter((item) => arr2.includes(item));
}
// result
const unionresult = getunion(A, B);
const intersectionresult = getintersection(A, B);
// result display
const result1 = `
array A: [ ${A} ] <br>
array B: [ ${B} ]<br>
<b>Union: [ ${unionresult} ]</b><br>
`;
const result2 = `
<b>Intersection: [ ${intersectionresult} ]</b><br>
`;
document.getElementById("union-result").innerHTML = result1;
document.getElementById("intersection-result").innerHTML = result2;
console.log("Union: ", unionresult);
console.log("Intersection: ", intersectionresult);
export {};
// union and intersection of a and b
