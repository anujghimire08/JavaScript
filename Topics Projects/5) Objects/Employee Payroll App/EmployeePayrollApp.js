const employees = [
  { name: "Anuj", position: "Developer", salary: 50000 },
  { name: "Rita", position: "Designer", salary: 45000 },
  { name: "Sujan", position: "Manager", salary: 60000 },
];

const nameEL = document.getElementById("name");
const positionEL = document.getElementById("position");
const salaryEL = document.getElementById("salary");
const resultList = document.getElementById("resultList");

function addEmployee() {
  const name = nameEL.value.trim();
  const position = positionEL.value.trim();
  const salary = Number(salaryEL.value);

  if (!name || !position || !salary) {
    alert("Fill All Fields");
    return;
  }

  const exists = employees.some((emp) => emp.name === name);
  if (exists) {
    alert("Employee Already Exists");
    return;
  }

  employees.push({ name, position, salary });
  clearInputs();
  displayEmployees();
}

function displayEmployees() {
  resultList.innerHTML = "";
  employees.forEach((emp) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${emp.name}</strong> - ${emp.position} - Salary: $${emp.salary} - 
      Bonus: $${calculateBonus(emp.salary)} - Net Salary: $${netSalary(
      emp.salary
    )}
    `;
    resultList.appendChild(div);
  });
}

function removeEmployee() {
  const name = nameEL.value.trim();
  const idx = employees.findIndex((emp) => emp.name === name);

  if (idx === -1) {
    alert("Employee Not Found");
    return;
  }

  employees.splice(idx, 1);
  alert("Employee Removed");
  clearInputs();
  displayEmployees();
}

function searchEmployee() {
  const name = nameEL.value.toLowerCase().trim();
  const found = employees.filter((emp) =>
    emp.name.toLowerCase().includes(name)
  );

  resultList.innerHTML = "";
  if (found.length === 0) {
    alert("No Employee Found");
    return;
  }

  found.forEach((emp) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${emp.name}</strong> - ${emp.position} - Salary: $${emp.salary} - 
      Bonus: $${calculateBonus(emp.salary)} - Net Salary: $${netSalary(
      emp.salary
    )}
    `;
    resultList.appendChild(div);
  });

  clearInputs();
}

function calculateBonus(salary) {
  return salary * 0.1;
}

function calculateTax(salary) {
  return salary * 0.2;
}

function netSalary(salary) {
  return salary + calculateBonus(salary) - calculateTax(salary);
}

function clearInputs() {
  nameEL.value = "";
  positionEL.value = "";
  salaryEL.value = "";
}
