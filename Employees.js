// Step 14: Create an array of employees using literal notation
let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

// Create an anonymous function to display employees
let showEmployee = function(employeeList) {
    console.log("Employees:\n");
    employeeList.forEach(employee => console.log(employee));
};

// Call the function and pass the employees array
showEmployee(employees);
