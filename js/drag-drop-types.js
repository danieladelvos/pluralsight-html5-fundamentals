document.addEventListener('DOMContentLoaded', function(e) {
  var cancel = function(e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
    return false;
  };

  var dragLeave = function(e) {
    this.classList.remove('over');
  };

  var dragOver = function(e) {
    cancel(e);
    this.classList.add('over');
  };

  var dropped = function(e) {
    cancel(e);
    var target = this, content = '';
    var types = e.dataTransfer.types;
    if (types.length > 0) {
      if (types[0] === 'Text') {
        target.innerText = e.dataTransfer.getData('Text');
      } else {
        types.forEach(function(type) {
          content = e.dataTransfer.getData(type);
          var p = document.createElement('p');
          p.innerHTML =
                      '<b>Type</b>: ' + type + '<br>' +
                      '<b>Content</b>: ' + content;
          target.appendChild(p);
        });
      }
    }
  };

  var target = document.getElementById('target');
  target.addEventListener('drop', dropped, false);
  target.addEventListener('dragenter', cancel, false);
  target.addEventListener('dragover', dragOver, false);
  target.addEventListener('dragLeave', dragLeave, false);

  var clearButton = document.getElementById('clear');
  clearButton.addEventListener('click', function(e) {
    e.preventDefault();
    target.innerHTML = '';
  });
});
