var $image = document.querySelector('img');
var $photoUrl = document.querySelector('.photo-url');
var $formEntry = document.querySelector('form');
var $allViews = document.querySelectorAll('.view');
var $ul = document.querySelector('ul');

$photoUrl.addEventListener('input', handleInput);

function handleInput(event) {
  $image.setAttribute('src', event.target.value);
}

$formEntry.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (data.editing === null) {
    var formObj = {};
    formObj.entryID = data.nextEntryId;
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
    var $ulList = document.querySelector('.entry-list');
    var journalEntry = renderEntry(data.entries[0]);
    $ulList.prepend(journalEntry);

  } else {
    for (var i = 0; i < data.entries.length; i++) {
      var editedID = parseInt(data.editing.entryID);
      if (parseInt(data.entries[i].entryID) === editedID) {
        var existingEntryData = data.entries[i];
        existingEntryData.title = $formEntry.elements.title.value;
        existingEntryData.photoURL = $formEntry.elements.image.value;
        existingEntryData.notes = $formEntry.elements.notes.value;
        existingEntryData.entryID = data.editing.entryID;
        var $editedEntry = document.querySelectorAll('[data-entry-id]');
        $editedEntry[i].replaceWith(renderEntry(existingEntryData));
      }
    }
  }
  viewSwap('entries');
}

function renderEntry(data) {
  var liRow = document.createElement('li');
  liRow.setAttribute('class', 'row');
  liRow.setAttribute('data-entry-id', data.entryID);

  var divForImg = document.createElement('div');
  divForImg.setAttribute('class', 'column-half');
  liRow.appendChild(divForImg);

  var entryImg = document.createElement('img');
  entryImg.setAttribute('alt', 'journal-image');
  entryImg.setAttribute('src', data.photoUrl);
  divForImg.appendChild(entryImg);

  var divForJournalEntry = document.createElement('div');
  divForJournalEntry.setAttribute('class', 'column-half right');
  liRow.appendChild(divForJournalEntry);

  var headerSection = document.createElement('h2');
  var h2TextContent = document.createTextNode(data.title);
  headerSection.appendChild(h2TextContent);
  divForJournalEntry.appendChild(headerSection);

  var divForButton = document.createElement('div');
  divForButton.setAttribute('class', 'edit-button');
  divForJournalEntry.appendChild(divForButton);

  var editButton = document.createElement('button');
  editButton.setAttribute('type', 'button');
  editButton.setAttribute('class', 'edit');
  divForButton.appendChild(editButton);

  var pencilImage = document.createElement('i');
  pencilImage.setAttribute('class', 'fa-solid fa-pencil');
  editButton.appendChild(pencilImage);

  var textSection = document.createElement('p');
  var pTextContent = document.createTextNode(data.notesInput);
  textSection.appendChild(pTextContent);
  divForJournalEntry.appendChild(textSection);

  return liRow;
}

window.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
function handleDOMContentLoaded(event) {
  var $ulList = document.querySelector('.entry-list');
  for (var i = 0; i < data.entries.length; i++) {
    var journalEntryLoop = renderEntry(data.entries[i]);
    $ulList.appendChild(journalEntryLoop);
  }
}

document.addEventListener('click', handleClick);
function handleClick(event) {
  if (event.target.matches('.view-switch') === true) {
    viewSwap('entry-form');
  } else if (event.target.matches('.entry-anchor') === true) {
    viewSwap('entries');
  }
}

function viewSwap(desiredView) {
  for (var i = 0; i < $allViews.length; i++) {
    if ($allViews[i].getAttribute('data-view') === desiredView) {
      $allViews[i].className = 'view';
    } else {
      $allViews[i].className = 'view hidden';
    }
  }
}

$ul.addEventListener('click', handleUlClick);
function handleUlClick(event) {
  if (event.target.matches('.fa-pencil') === true) {
    viewSwap('entry-form');
    var $targetLi = event.target.closest('[data-entry-id]');
    var editEntryID = parseInt($targetLi.getAttribute('data-entry-id'));
    for (var i = 0; i < data.entries.length; i++) {
      if (editEntryID === data.entries[i].entryID) {
        data.editing = data.entries[i];
      }
    }
    var $titleInput = document.querySelector('.title');
    var $photoInput = document.querySelector('.photo-url');
    var $notesInput = document.querySelector('.notes');
    $image.setAttribute('src', data.editing.photoUrl);
    $titleInput.setAttribute('value', data.editing.title);
    $photoInput.setAttribute('value', data.editing.photoUrl);
    $notesInput.textContent = data.editing.notesInput;
  }
  viewEditHeader();

}

function viewEditHeader() {
  var $editHeader = document.querySelectorAll('h1');
  for (var i = 0; i < $editHeader.length; i++) {
    if ($editHeader[i].textContent === 'New Entry') {
      $editHeader[i].textContent = 'Edit Entry';
    }
  }
}
