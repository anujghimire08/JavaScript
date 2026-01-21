const div = document.getElementById("result");
const btn = document.getElementById("btn");

function getList() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((rawData) => rawData.json())
    .then((persons) => {
      const user = persons[Math.floor(Math.random() * persons.length)];
      div.innerHTML = `<p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Address:</strong> ${user.address.city}</p>
      <p>
        <strong>Website:</strong>
        <a href="${user.website}" target="_blank">${user.website}</a>
      </p>`;
    })
    .catch((err) => {
      div.innerHTML = "Error loading users!";
    });
}

getList();

btn.addEventListener("click", getList);