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
}

function renderEntry(data) {
  var liRow = document.createElement('li');
  liRow.setAttribute('class', 'row');

  var divForImg = document.createElement('div');
  divForImg.setAttribute('class', 'column-half');
  liRow.appendChild(divForImg);

  var entryImg = document.createElement('img');
  entryImg.setAttribute('alt', 'journal-image');
  entryImg.setAttribute('src', data.photoUrl);
  divForImg.appendChild(entryImg);

  var divForSection = document.createElement('div');
  divForSection.setAttribute('class', 'column-half right');
  liRow.appendChild(divForSection);

  var sectionForText = document.createElement('section');
  divForSection.appendChild(sectionForText);

  var headerSection = document.createElement('h2');
  var h2TextContent = document.createTextNode(data.title);
  headerSection.appendChild(h2TextContent);
  sectionForText.appendChild(headerSection);

  var textSection = document.createElement('p');
  var pTextContent = document.createTextNode(data.notesInput);
  textSection.appendChild(pTextContent);
  sectionForText.appendChild(textSection);

  return liRow;
}

$formEntry.addEventListener('submit', handleSubmit2);
function handleSubmit2(event) {
  handleClick2();
  var $ulList = document.querySelector('.entry-list');
  var journalEntry = renderEntry(data.entries[0]);
  $ulList.prepend(journalEntry);
}

window.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
function handleDOMContentLoaded(event) {
  var $ulList = document.querySelector('.entry-list');
  for (var i = 0; i < data.entries.length; i++) {
    var journalEntryLoop = renderEntry(data.entries[i]);
    $ulList.appendChild(journalEntryLoop);
  }
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
