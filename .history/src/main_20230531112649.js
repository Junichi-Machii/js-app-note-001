const noteContainer = document.querySelector(".note-container");
const modalContainer = document.querySelector(".modal-container");
const form = document.querySelector("form");

class Note {
  constructor(title, body) {
    this.title = title;
    this.body = body;
    this.id = Math.random();
  }
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

noteContainer.addEventListener("click", (e) => {
  if(e.target.classList.contains('note__view')) {
    const currentNote = e.target.closest('.note');
    const currentTitle = currentNote.querySelector('.note__title').textContent;
    const currentBody = currentNote.querySelector('.note__body').textContent;
    activateN
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleInput = document.querySelector("#title");
  const noteInput = document.querySelector("#note");

  if (titleInput.value.length > 0 && noteInput.value.length > 0) {
    const newNote = new Note(titleInput.value, noteInput.value);
    addNoteToList(newNote);
    titleInput.value = "";
    noteInput.value = "";
    titleInput.focus();
  }
});
