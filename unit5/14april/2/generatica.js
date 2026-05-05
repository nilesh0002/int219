function getfirstElement(arr) {
    return arr[0];
}
let numbers = [10, 20, 30];
let string = ["A", "B", "C"];
let numresult = getfirstElement(numbers);
let strresult = getfirstElement(string);
document.getElementById("output").innerHTML = `
first number : ${numresult} <br>
first string : ${strresult} <br>
`;
export {};
