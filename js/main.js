var $image = document.querySelector('img');
var $photoUrl = document.querySelector('.photo-url');
var $formEntry = document.querySelector('form');
var formObj = {};

$photoUrl.addEventListener('input', handleInput);

function handleInput(event) {
  $image.setAttribute('src', event.target.value);
}

$formEntry.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var $titleInput = document.querySelector('.title');
  var $photoInput = document.querySelector('.photo-url');
  var $notesInput = document.querySelector('.notes');
  formObj.title = $titleInput.value;
  formObj.photoUrl = $photoInput.value;
  formObj.notesInput = $notesInput.value;
  formObj.entryID = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(formObj);
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');
  $formEntry.reset();
}
