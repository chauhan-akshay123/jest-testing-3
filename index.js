const express = require("express");
const { getEmployees, getEmployeeById, addEmployee } = require("./employee");
const app = express();
const PORT = 3000;

// Ensure middleware is placed before routes
app.use(express.json());

app.get("/employees", (req, res) => {
  res.status(200).json(getEmployees());
});

app.get("/employees/:id", (req, res) => {
  const employee = getEmployeeById(parseInt(req.params.id));
  if (!employee) return res.status(404).send("Employee Not Found");
  res.status(200).json(employee); // Send the found employee
});

app.post("/employees", (req, res) => {
  const employee = addEmployee(req.body);
  res.status(201).json(employee); // Send the newly added employee
});

app.listen(PORT, () => {
  console.log("Server is listening on port:", PORT);
});

module.exports = app; // Fix the space