const noteContainer = document.querySelector('.note-container');
const modalContainer = document.querySelector('.modal-container');
const form = document.querySelector('form');

class Note {
  constructor(title, body){
    this.title = title;
    this.body = body;
    this.id = Math.random();
    console.
  }
}



form.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleInput = document.querySelector('#title');
  const noteInput = document.querySelector('#note');

  if (titleInput.value.length > 0 && noteInput.value.length > 0) {
    const newNote = new Note(titleInput.value, noteInput.value);
    addNoteToList(newNote);
    titleInput.value= '';
    noteInput.value= '';
    titleInput.focus();
  }
})