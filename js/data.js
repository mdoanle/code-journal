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
  entryImg.setAttribute('src', data.photoUrl);
  divForImg.appendChild(entryImg);

  var divForSection = document.createElement('div');
  divForSection.setAttribute('class', 'column-half-right');
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

window.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

function handleDOMContentLoaded(event) {
  var $ulList = document.querySelector('.entry-list');
  for (var i = 0; i < data.entries.length; i++) {
    var journalEntryLoop = renderEntry(data.entries[i]);
    $ulList.appendChild(journalEntryLoop);
  }
}
