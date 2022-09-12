var $image = document.querySelector('img');
var $photoUrl = document.querySelector('.photo-url');

$photoUrl.addEventListener('input', handleInput);

function handleInput(event) {
  $image.setAttribute('src', event.target.value);
}
