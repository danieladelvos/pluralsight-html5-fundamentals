document.addEventListener('DOMContentLoaded', function(e) {
  var canvas = document.getElementById('canvas-clear-clipping');
  var context = canvas.getContext('2d');
  var width = canvas.width, height = canvas.height;

  context.fillStyle = 'rgba(0, 200, 200, 0.75)';
  context.strokeStyle = '#999900';
  context.lineWidth = 5;
  context.lineCap = 'round';

  context.save();

  context.beginPath();
  context.moveTo(105, 105);
  context.lineTo(200, 100);
  context.lineTo(250, 300);
  context.lineTo(300, 0);
  context.closePath();
  context.stroke();
  context.clip();

  context.fillRect(0, 0, 215, 215);

  // you CANNOT reset the clip like this:
  // context.rect(0, 0, width, height);
  // context.clip();
  // use state management instead:

  context.restore();

  context.save();

  context.fillRect(200, 200, 50, 50);

  context.rect(0, 350, 100, 100);
  context.rect(105, 350, 100, 100);

  context.clip();

  context.stroke();

  context.fillRect(0, 350, 300, 300);

  context.restore();

  context.fillRect(0, 455, 100, 100);


});
