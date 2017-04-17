document.addEventListener('DOMContentLoaded', function(e) {
  var canvas, context;
  canvas = document.querySelector('#canvas');

  if (Modernizr.canvas) {

    context = canvas.getContext('2d');

  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(100, 300);
  context.lineTo(150, 300);
  context.lineTo(150, 155);
  context.lineTo(205, 155);
  context.lineTo(205, 100);
  context.closePath();

  context.fillStyle = '#0099ff';
  context.fill();

  context.lineWidth = 6;
  context.lineJoin = 'round';
  context.strokeStyle = '#cccccc';
  context.stroke();
  }
});
