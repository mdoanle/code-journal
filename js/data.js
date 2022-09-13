/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', handleBeforeUnload);
function handleBeforeUnload(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('Journal Entry', dataJSON);
}
