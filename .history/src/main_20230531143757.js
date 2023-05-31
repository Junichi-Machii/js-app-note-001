const noteContainer = document.querySelector(".note-container");
const modalContainer = document.querySelector(".modal-container");
const form = document.querySelector("form");
const titleInput = document.querySelector("#title");

class Note {
  constructor(title, body) {
    this.title = title;
    this.body = body;
    this.id = Math.random();
  }
}

// LOCAL STORAGE //
function getNotes() {
  let notes;
  if (localStorage.getItem("noteApp.notes") === null) {
    notes = [];
  } else {
    notes = JSON.parse(localStorage.getItem("noteApp.notes"));
  }
  return notes;
}

function addNoteToLocalStorage(note) {
  const notes = getNotes();
  notes.push(note);
  localStorage.setItem("noteApp.notes", JSON.stringify(notes));
}

// local storage のデータ消去
function removeNote(id) {
  const notes = getNotes();
  notes.forEach((note,index) => {
    if(note.id === id){
      notes.splice(index, 1);
    }
    localStorage.setItem('noteApp.notes', JSON.stringify(notes));
  })
}

function addNoteToList(note) {
  const newUINote = document.createElement("div");
  newUINote.classList.add("note");
  newUINote.innerHTML = `
  <span hidden>${note.id}</span>
  <h2 class="note__title">${note.title}</h2>
  <p class="note__body">${note.body}</p>
  <div class="note__btns">
    <button class="note__btn note__view">詳細を表示</button>
    <button class="note__btn note__delete">消去</button>
  </div>
  `;
  noteContainer.appendChild(newUINote);
}

// メモを表示
function displayNote() {
  const notes = getNotes();
  notes.forEach((note) => {
    addNoteToList(note);
  });
}

function showAlertMessage(message, alertClass) {
  const alertDiv = document.createElement("div");

  alertDiv.className = `message ${alertClass}`;
  alertDiv.appendChild(document.createTextNode(message));
  form.insertAdjacentElement("beforebegin", alertDiv);
  titleInput.focus();
  setTimeout(() => {
    alertDiv.remove();
  }, 2000);
}

function activateNoteModal(title, body) {
  const modalTitle = document.querySelector(".modal__title");
  const modalBody = document.querySelector(".modal__body");
  modalTitle.textContent = title;
  modalBody.textContent = body;
  modalContainer.classList.add("active");
}

const modalBtn = document
  .querySelector(".modal__btn")
  .addEventListener("click", () => {
    modalContainer.classList.remove("active");
  });

noteContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("note__view")) {
    const currentNote = e.target.closest(".note");
    const currentTitle = currentNote.querySelector(".note__title").textContent;
    const currentBody = currentNote.querySelector(".note__body").textContent;
    activateNoteModal(currentTitle, currentBody);
  }
  if (e.target.classList.contains("note__delete")) {
    const currentNote = e.target.closest(".note");
    showAlertMessage("メモを消去しました", "remove-message");
    currentNote.remove();
    const id = current
  }
});

//event display メモ
document.addEventListener("DOMContentLoaded", displayNote);
// event submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const noteInput = document.querySelector("#note");

  if (titleInput.value.length > 0 && noteInput.value.length > 0) {
    const newNote = new Note(titleInput.value, noteInput.value);
    addNoteToList(newNote);
    addNoteToLocalStorage(newNote);
    titleInput.value = "";
    noteInput.value = "";
    showAlertMessage("メモが追加されました", "success-message");
    titleInput.focus();
  } else {
    showAlertMessage("題名とその内容を書いてください", "alert-message");
  }
});
