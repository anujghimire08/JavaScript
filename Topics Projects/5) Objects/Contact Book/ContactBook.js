const contacts = [
  { name: "Anuj", phone: "9800000000", email: "anuj@gmail.com" },
  { name: "Shyam", phone: "9811111111", email: "shyam@gmail.com" },
];

const nameEL = document.getElementById("contactName");
const phoneEL = document.getElementById("contactPhone");
const emailEL = document.getElementById("contactEmail");
const resultList = document.getElementById("resultList");

function addContact() {
  const name = nameEL.value.trim();
  const phone = phoneEL.value.trim();
  const email = emailEL.value.trim();

  if (!name || !phone || !email) {
    alert("Fill all fields");
    return;
  }

  const exists = contacts.some(
    (c) => c.phone === phone || c.email.toLowerCase() === email.toLowerCase()
  );

  if (exists) {
    alert("Contact already exists");
    return;
  }

  contacts.push({ name, phone, email });
  clearInputs();
  displayContacts();
}

function displayContacts() {
  resultList.innerHTML = "";
  contacts.forEach((c) => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${c.name}</strong> - Phone: ${c.phone} - Email: ${c.email}`;
    resultList.appendChild(div);
  });
}

function deleteContact() {
  const phone = phoneEL.value.trim();
  const idx = contacts.findIndex((c) => c.phone === phone);

  if (idx === -1) {
    alert("Contact not found");
    return;
  }

  contacts.splice(idx, 1);
  alert("Contact deleted");
  clearInputs();
  displayContacts();
}

function searchContact() {
  const name = nameEL.value.toLowerCase().trim();
  const found = contacts.filter((c) => c.name.toLowerCase().includes(name));

  resultList.innerHTML = "";
  if (found.length === 0) {
    alert("No contact found");
    return;
  }

  found.forEach((c) => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${c.name}</strong> - Phone: ${c.phone} - Email: ${c.email}`;
    resultList.appendChild(div);
  });

  clearInputs();
}

function clearInputs() {
  nameEL.value = "";
  phoneEL.value = "";
  emailEL.value = "";
}
