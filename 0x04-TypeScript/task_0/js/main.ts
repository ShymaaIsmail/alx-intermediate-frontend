interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
        firstName: "John",
        lastName: "Doe",
        age: 20,
        location: "New York"
    };
const student2: Student = {
        firstName: "Jane",
        lastName: "Smith",
        age: 22,
        location: "Los Angeles"
    };
const studentsList =[
student1,
student2
]

const table = document.createElement("table");
const headerRow = document.createElement("tr");
const headerFirstName = document.createElement("th");
const headerLocation = document.createElement("th");
headerFirstName.textContent = "First Name";
headerLocation.textContent = "Location";
headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);
studentsList.forEach(student => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
}
);
document.body.appendChild(table);
const style = document.createElement("style");
style.textContent = `
table {
    width: 100%;
    border-collapse: collapse;
}
th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
}
tr:nth-child(even) {
    background-color: #f2f2f2;
}
th {
    background-color: #4CAF50;
    color: white;
}
`;
document.head.appendChild(style);
