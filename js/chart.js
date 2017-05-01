document.addEventListener('DOMContentLoaded', function(e) {
  var canvas = document.getElementById('canvas-static-chart');
  var context = canvas.getContext('2d');
  var img = new Image();
  img.onload = function() {
    context.drawImage(img, 0, 0);
    context.beginPath();
    context.moveTo(70, 105);
    context.lineTo(105, 132);
    context.lineTo(142, 250);
    context.lineTo(130, 115);
    context.stroke();
  };

  img.src = "img/chart-background-large.png";
});
