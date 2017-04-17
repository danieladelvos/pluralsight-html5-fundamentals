document.addEventListener('DOMContentLoaded', function(e) {
  var canvas, context;
  canvas = document.getElementById('canvas');

  if (canvas && canvas.getContext) {
    context = canvas.getContext('2d');
  context.beginPath();
  context.moveTo(75, 50);
  context.lineTo(75, 100);
  context.lineTo(25, 100);
  context.fill();
  }
});
