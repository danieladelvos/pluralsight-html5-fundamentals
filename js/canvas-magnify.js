document.addEventListener('DOMContentLoaded', function(e) {
  var canvas = document.getElementById('canvas-magnify');
  var context = canvas.getContext('2d');
  var img = new Image();
  var isMagnified = false;
  var dataUrl;

  var init = function() {
    img.onload = function() {
      context.drawImage(img, 0, 0);
      dataUrl = canvas.toDataURL();
    };
    img.src = 'img/puppies-01.jpg';
    isMagnified = false;
  };

  var magnify = function() {
    context.save();
    context.lineWidth = 10;
    context.shadowColor = '#000';
    context.shadowBlur = 15;
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;

    context.save();
    context.beginPath();
    context.moveTo(200, 280);

    context.lineCap = 'round';
    context.lineWidth = 30;
    context.lineTo(400, 185);
    context.stroke();

    context.beginPath();

    context.arc(450, 150, 115, 0, Math.PI * 2, true);

    context.clip();

    var magnified = new Image();
    magnified.src = dataUrl;

    context.scale(1.5, 1.5);
    context.drawImage(img, -40, -40);

    context.restore();

    context.arc(450, 150, 115, 0, Math.PI * 2, true);
    context.stroke();
    context.restore();

    isMagnified = true;
  };

  init();

  canvas.addEventListener('click', function(e) {
    if (isMagnified) {
      init();
    }
    else {
      magnify();
    }
  });

});


