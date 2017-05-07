document.addEventListener('DOMContentLoaded', function(e) {
  var dragStart = function(e) {
    // IE does not support text/plain
    try {
      e.dataTransfer.setData('text/plain', e.target.id);
    } catch (ex) {
      e.dataTransfer.setData('Text', e.target.id);
    }
  };
  var cancel = function(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    return false;
  };
  var dropped = function(e) {
    var id;
    cancel(e);
    try {
      id = e.dataTransfer.getData('text/plain');
    } catch (ex) {
      id = e.dataTransfer.detData('Text');
    }
    e.target.appendChild(document.querySelector('#' + id));
  };

  var img = document.querySelector('#puppies-01');
  img.addEventListener('dragstart', dragStart, false);

  var target = document.querySelector('#target-container');
  target.addEventListener('drop', dropped, false);
  target.addEventListener('dragenter', cancel, false);
  target.addEventListener('dragover', cancel, false);
});
