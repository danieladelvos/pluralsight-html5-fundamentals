document.addEventListener('DOMContentLoaded', function(e) {
  var sourceContainerId;
  var dragStart = function(e) {
    // IE does not support text/plain
    try {
      e.dataTransfer.setData('text/plain', e.target.id);
    } catch (ex) {
      e.dataTransfer.setData('Text', e.target.id);
    }
    sourceContainerId = this.parentElement.id;
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
    if (this.id !== sourceContainerId) {
      cancel(e);
      try {
        id = e.dataTransfer.getData('text/plain');
      } catch (ex) {
        id = e.dataTransfer.detData('Text');
      }
      e.target.appendChild(document.querySelector('#' + id));
    }
  };
  var targets = document.querySelectorAll('[data-role="drag-drop-target"]');
  [].forEach.call(targets, function(target) {
    target.addEventListener('drop', dropped, false);
    target.addEventListener('dragenter', cancel, false);
    target.addEventListener('dragover', cancel, false);
  });
  var sources = document.querySelectorAll('[draggable="true"]');
  [].forEach.call(sources, function(source) {
    source.addEventListener('dragstart',dragStart, false);
  })
});
