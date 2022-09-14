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
