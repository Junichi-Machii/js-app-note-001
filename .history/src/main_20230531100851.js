const noteContainer = document.querySelector('.note-container');
const modalContainer = document.querySelector('.modal-container');
const form = document.querySelector('form');

class Note {
  constructor(title, body){
    this.title = title;
    this.body = body;
    this.id = Math.random();
  }
}



form.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleInput = document.querySelector('#title');
  const
})