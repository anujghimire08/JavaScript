const predefinedList = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isIssued: false,
  },
  { id: 2, title: "1984", author: "George Orwell", isIssued: false },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isIssued: false,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isIssued: false,
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    isIssued: false,
  },
];
const Library = [...predefinedList];

const AddBook = document.getElementById("add-book");
const DisplayBook = document.getElementById("display-book");
const IssueBook = document.getElementById("issue-book");
const ReturnBook = document.getElementById("return-book");
const listTable = document.getElementById("table");
const tbody = document.getElementById("tbody");

const bookNameEL = document.getElementById("name");
const bookAuthorEL = document.getElementById("author");
const bookIdEL = document.getElementById("book-id");

AddBook.onclick = () => {
  const title = bookNameEL.value;
  const author = bookAuthorEL.value;
  const id = parseInt(bookIdEL.value);
  if (!title && !author && isNaN(id)) {
    document.getElementById("message").innerText =
      "Please! Fill Missing Fields";
    document.getElementById("message").style.color = "red";
    setTimeout(() => {
      document.getElementById("message").style.opacity = "0";
    }, 2000);
    return;
  }
  Library.push({ id, title, author, isIssued: false });
  refreshInput();
  renderTable();
  hide();
};

DisplayBook.onclick = () => {
  refreshInput();
  renderTable();
  unhide();
};

IssueBook.onclick = () => {
  const title = bookNameEL.value;
  const author = bookAuthorEL.value;
  const id = parseInt(bookIdEL.value);
  Library.forEach((list) => {
    if (list.title === title || list.author === author || list.id === id) {
      list.isIssued = true;
      // list.forEach((obj) => {
      //   for (let key in obj) {
      //     obj[key].style.textDecoration = "line-through";
      //   }
      // });
    }
  });
  hide();
  refreshInput();
  renderTable();
  setInterval(() => {
    unhide();
  }, 900);
};

ReturnBook.onclick = () => {
  const title = bookNameEL.value;
  const author = bookAuthorEL.value;
  const id = parseInt(bookIdEL.value);
  Library.forEach((list) => {
    if (list.title === title || list.author === author || list.id === id) {
      list.isIssued = false;
      // list.forEach((obj) => {
      //   for (let key in obj) {
      //     obj[key].style.textDecoration = "line-through";
      //   }
      // });
    }
  });
  hide();
  refreshInput();
  renderTable();
  setInterval(() => {
    unhide();
  }, 900);
};

function refreshInput() {
  document.querySelectorAll(".input").forEach((ip) => {
    ip.value = "";
  });
  tbody.innerHTML = "";
}

function renderTable() {
  tbody.innerHTML = "";
  Library.forEach((list) => {
    const tr = document.createElement("tr");
    if (list.isIssued) {
      tr.style.textDecoration = "line-through";
      tr.style.color = "grey";
    }
    tr.innerHTML = `
        <td>${list.id}</td>
        <td>${list.title}</td>
        <td>${list.author}</td>
        <td>${list.isIssued ? "Issued" : "Available"}</td>
    `;
    tbody.appendChild(tr);
  });
}

function hide() {
  listTable.style.display = "none";
}
hide();
function unhide() {
  listTable.style.display = "block";
}

function check() {}
check();
