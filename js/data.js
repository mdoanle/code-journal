/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var journalEntryJSON = localStorage.getItem('Journal Entry');
if (journalEntryJSON !== null) {
  data = JSON.parse(journalEntryJSON);
}

window.addEventListener('beforeunload', handleBeforeUnload);
function handleBeforeUnload(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('Journal Entry', dataJSON);
}

function renderEntry(data) {
  var liRow = document.createElement('li');
  liRow.setAttribute('class', 'row');

  var divForImg = document.createElement('div');
  divForImg.setAttribute('class', 'column-half');
  liRow.appendChild(divForImg);

  var entryImg = document.createElement('img');
  entryImg.setAttribute('alt', 'journal-image');
  entryImg.setAttribute('src', data.entries[0].photoUrl);
  divForImg.appendChild(entryImg);

  var divForSection = document.createElement('div');
  divForSection.setAttribute('class', 'column-half-right');
  liRow.appendChild(divForSection);

  var headerSection = document.createElement('h2');
  headerSection.textContent = data.entries[0].title;
  divForSection.appendChild(headerSection);

  var textSection = document.createElement('p');
  textSection.textContent = data.entries[0].notesInput;
  divForSection.appendChild(textSection);

  return liRow;
}
var $ulElement = document.querySelector('.entry-list');
$ulElement.appendChild(renderEntry(data));
