// INTERFACE
interface Student {
    name: string;
    age: number;
    course: string;
}

// Object using interface
let student: Student = {
    name: "Pirate",
    age: 21,
    course: "Frontend Development"
};

// UNION TYPE
let id: string | number;
id = 101;

// Display data
document.getElementById("result")!.innerHTML =
    "Name: " + student.name + "<br>" +
    "Age: " + student.age + "<br>" +
    "Course: " + student.course + "<br>" +
    "ID: " + id;
