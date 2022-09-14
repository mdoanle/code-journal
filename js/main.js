var $image = document.querySelector('img');
var $photoUrl = document.querySelector('.photo-url');
var $formEntry = document.querySelector('form');
var $viewSwapButton = document.querySelector('.view-switch');
var $allViews = document.querySelectorAll('.view');
var $entryAnchor = document.querySelector('.entry-anchor');

$photoUrl.addEventListener('input', handleInput);

function handleInput(event) {
  $image.setAttribute('src', event.target.value);
}

$formEntry.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var formObj = {};
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
  handleClick2();
}

$viewSwapButton.addEventListener('click', handleClick);
function handleClick(event) {
  for (var i = 0; i < $allViews.length; i++) {
    if ($allViews[i].getAttribute('data-view') === 'entry-form') {
      $allViews[i].className = 'view';

    } else {
      $allViews[i].className = 'view hidden';
    }
  }
}

$entryAnchor.addEventListener('click', handleClick2);
function handleClick2(event) {
  for (var i = 0; i < $allViews.length; i++) {
    if ($allViews[i].getAttribute('data-view') === 'entries') {
      $allViews[i].className = 'view';
    } else {
      $allViews[i].className = 'view hidden';
    }
  }
}
