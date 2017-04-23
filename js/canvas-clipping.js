document.addEventListener('DOMContentLoaded', function(e) {
  var canvas = document.getElementById('canvas-clipping');
  var context = canvas.getContext('2d');
  var x = 40,
      y = 25,
      width = height = 200;

  context.beginPath();
  context.rect(x, y, width, height);
  //context.clip();

  var img = new Image();
  img.onload = function () {
    context.drawImage(img, 0, 0);

    context.lineWidth = 15;
    context.strokeStyle = '#cccccc';
    context.strokeRect(x, y, width, height);

    context.fillStyle = 'rgba(153, 153, 153, 0.75)';
    context.fillRect(0, 0, 100, 100);
  };
  img.src = 'img/puppies-01.jpg';

});
