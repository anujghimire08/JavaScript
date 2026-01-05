const users = [
  { name: "Anuj", email: "anuj@gmail.com", age: 22 },
  { name: "Ram", email: "ram@gmail.com", age: 25 },
  { name: "Sita", email: "sita@gmail.com", age: 21 },
  { name: "Hari", email: "hari@gmail.com", age: 27 },
  { name: "Gita", email: "gita@gmail.com", age: 23 },
];

const usernameEL = document.getElementById("user");
const emailEL = document.getElementById("email");
const ageEL = document.getElementById("age");
const resultList = document.getElementById("resultList");

function add() {
  const name = usernameEL.value.trim();
  const email = emailEL.value.trim();
  const age = Number(ageEL.value);
  const exist = users.some((user) => user.email === email);
  if (!name || !email || !age) {
    alert("Fill All Fields");
    return;
  }
  if (exist) {
    alert("Details with this info exist");
    return;
  }
  users.push({ name, email, age });
  document.querySelectorAll("#user,#email,#age").forEach((v) => {
    v.value = "";
  });
}

function display() {
  resultList.innerHTML = "";
  users.forEach((list) => {
    const h3 = document.createElement("h3");
    h3.textContent = `${list.name} - ${list.email} - ${list.age}`;
    resultList.appendChild(h3);
  });
}

