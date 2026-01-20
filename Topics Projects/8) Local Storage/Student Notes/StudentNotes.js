// input field DOM selection
const formEL = document.querySelector(".note-form");
const noteTitleEL = document.getElementById("noteTitle");
const noteSubjectEL = document.getElementById("noteSubject");
const noteContentEL = document.getElementById("noteContent");
const noteAddEL = document.getElementById("add-note");
const noteList = document.getElementById("notesList");
const subjectFilter = document.getElementById("subjectFilter");

// objects ko array data for store ko lagi
let NoteStore = JSON.parse(localStorage.getItem("notes")) || [];

// user le deko inputs access + form validation garyaa
formEL.addEventListener("submit", (event) => {
  event.preventDefault();
  const noteTitle = noteTitleEL.value.trim();
  const noteSubject = noteSubjectEL.value.trim();
  const noteContent = noteContentEL.value.trim();
  if (noteTitle === "") {
    alert("enter note title");
    return;
  }
  if (noteContent === "") {
    alert("enter note content");
    return;
  }
  NoteStore.push({ noteTitle, noteSubject, noteContent, id: Date.now() });
  localStorage.setItem("notes", JSON.stringify(NoteStore));
  renderUI();
  formEL.reset();
});

// saved data lai screen ma display DOM Manipulation bata
function renderUI(notes = NoteStore) {
  noteList.innerHTML = "";
  notes.forEach((note) => {
    const noteCard = document.createElement("div");
    noteCard.classList.add("note-card");

    const h2 = document.createElement("h2");
    h2.textContent = `${note.noteTitle}`;

    const subject = document.createElement("div");
    subject.classList.add("subject");
    subject.textContent = `${note.noteSubject}`;

    const p = document.createElement("p");
    p.textContent = `${note.noteContent}`;

    const actions = document.createElement("div");
    actions.classList.add("actions");

    const button = document.createElement("button");
    button.classList.add("delete-btn");
    button.innerHTML = `<span class="material-symbols-outlined">delete</span>`;
    button.addEventListener("click", () => {
      deleteNotes(note.id);
    });

    noteCard.appendChild(h2);
    noteCard.appendChild(subject);
    noteCard.appendChild(p);
    actions.appendChild(button);
    noteCard.appendChild(actions);
    noteList.appendChild(noteCard);
  });
}
renderUI();

// user lai chaiyeko sub ko data matra display
subjectFilter.addEventListener("change", () => {
  function userFilter() {
    if (subjectFilter.value === "all") {
      renderUI(NoteStore);
    } else {
      let filtered = NoteStore.filter((note) => {
        return note.noteSubject === subjectFilter.value;
      });
      if (filtered.length === 0) {
        document.querySelector(".notes-list").innerHTML =
          `<h3>No Notes Found!</h3>`;
      } else {
        renderUI(filtered);
      }
    }
  }
  userFilter();
});

// user lai nachaiyeko sub ko notes matra delete
function deleteNotes(id) {
  NoteStore = NoteStore.filter((note) => note.id !== id);

  localStorage.setItem("notes", JSON.stringify(NoteStore));
  renderUI(NoteStore);
}
