var $image = document.querySelector('img');
var $photoUrl = document.querySelector('.photo-url');
var $formEntry = document.querySelector('form');
var $titleInput = document.getElementsByName('title');
var $photoInput = document.getElementsByName('photo-URL');
var $notesInput = document.getElementsByName('notes');
var formObj = {};

$photoUrl.addEventListener('input', handleInput);

function handleInput(event) {
  $image.setAttribute('src', event.target.value);
}

$formEntry.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  formObj.title = $titleInput[0].value;
  formObj.photoUrl = $photoInput[0].value;
  formObj.notesInput = $notesInput[0].value;
  formObj.entryID = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(formObj);
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');
  $formEntry.reset();
}
