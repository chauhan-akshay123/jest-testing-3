const { title } = require("process");
let { getEmployees, getEmployeeById, addEmployee } = require("../employee");

describe("Employees Function", () => {
  it("Should get all employees", () => {
    let employees = getEmployees();
    expect(employees.length).toBe(4);
    expect(employees).toEqual([
      { id: 1, name: 'John Doe', position: 'Software Engineer' },
      { id: 2, name: 'Jane Smith', position: 'Product Manager' },
      { id: 3, name: 'Sam Johnson', position: 'Designer' },
      { id: 4, name: 'Lisa Brown', position: 'DevOps Engineer' }
    ]);
  });

  it("Should return a employee by Id", () => {
    let employee = getEmployeeById(1);
    expect(employee).toEqual({ id: 1, name: 'John Doe', position: 'Software Engineer' });
  });

  it("Should return undefined for a non-existent employee", () => {
    let employee = getEmployeeById(99);
    expect(employee).toBeUndefined();
  });

  it("Should add a new employee", () => {
    let newEmployee = { name: "New Person", position: "Software Engineer" };
    let addedEmployees = addEmployee(newEmployee);
    expect(addedEmployees).toEqual({ id: 5, name: "New Person", position: "Software Engineer" });

    const employees = getEmployees();
    expect(employees.length).toBe(5);
  });
});