document.addEventListener('DOMContentLoaded', function(e) {
  var canvas = document.getElementById('canvas-static-chart');
  var context = canvas.getContext('2d');
  var img = new Image();
  img.onload = function() {
    context.drawImage(img, 0, 0);
  };

  img.src = "img/chart-background-large.png";
});
