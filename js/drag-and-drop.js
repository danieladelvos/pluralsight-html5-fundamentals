document.addEventListener('DOMContentLoaded', function(e) {
  var dragStart = function(e) {

  };
  var cancel = function(e) {
    e.preventDefault();
  };
  var dropped = function(e) {
    console.log(e);
  };

  var img = document.querySelector('#puppies-01');
  img.addEventListener('dragstart', dragStart, false);

  var target = document.querySelector('#target-container');
  target.addEventListener('drop', dropped, false);
  target.addEventListener('dragenter', cancel, false);
  target.addEventListener('dragover', cancel, false);
});
