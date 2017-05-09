document.addEventListener('DOMContentLoaded', function(e) {
  var dragStart = function(e) {
    var element = document.querySelector('input[name="allowed"]:checked');
    e.dataTransfer.effectAllowed = element.value;
    try {
      e.dataTransfer.setData('text/plain', '');
    } catch (e) {
      e.dataTransfer.setData('Text', '');
    }
  };

  var dragEnd = function(e) {
    document.getElementById('msg').innerText = e.dataTransfer.dropEffect;
  };

  var cancel = function(e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
    return false;
  };

  var dropped = function(e) {
    cancel(e);
    var countElement = document.getElementById('count'),
        count = countElement.innerText;
    count++;
    countElement.innerText = count;
    target.classList.remove('over');
  };

  var dragLeave = function(e) {
    this.classList.remove('over');
  };

  var dragOver = function(e) {
    cancel(e);
    var element = document.querySelector('input[name="effect"]:checked');
    e.dataTransfer.dropEffect = element.value;
    this.classList.add('over');
  };

  var source = document.getElementById('source');
  source.addEventListener('dragstart', dragStart, false);
  source.addEventListener('dragend', dragEnd, false);

  var target = document.getElementById('target');
  target.addEventListener('dragenter', cancel, false);
  target.addEventListener('dragover', dragOver, false);
  target.addEventListener('dragleave', dragLeave, false);
  target.addEventListener('drop', dropped, false);
});
