document.addEventListener('DOMContentLoaded', function(e) {
  var canvas, context;
  canvas = document.getElementById('canvas');

  context = canvas.getContext('2d');

  var g1 = context.createRadialGradient(
    160,  // x coord of grad. start
    120,  // y coord of grad. start
    0,    // radius of start circle
    320,  // x coord of grad. end
    220,  // y coord of grad. end
    300); // radius of end circle
  g1.addColorStop(0, '#ffffff');
  g1.addColorStop(1, '#999999');

  // base circle

  context.lineWidth = 0;
  context.strokeStyle = '#000000';
  context.fillStyle = g1;
  context.beginPath();
  context.arc(
    180,  // x coord of arc start
    180,  // y coord of arc start
    160,  // radius
    0,    // start angle
    Math.PI * 2,  // end angle
    true);  // anticlockwise

  context.fill();

  var g2 = context.createRadialGradient(
    360, 320, 0, 260, 220, 200);
  g2.addColorStop(0, '#ffffff');
  g2.addColorStop(1, '#999999');

  // inner circle

  context.fillStyle = g2;
  context.beginPath();
  context.arc(180, 180, 130, 0, Math.PI * 2, true);
  context.fill();

  context.fillStyle = '#ffffff';
  context.font = '280px Arial';
  context.fillText('D', 95, 280);

    // effects: scale and rotation:

  // show or hide this when using context.rotate(degreesToRadians(-15))
  //var degreesToRadians = function(degrees) {
   //var radians = (degrees * (Math.PI / 180));
    //return radians;
  //}

  var canvas = document.getElementById('canvas');
  var context = null;

  context = canvas.getContext('2d');

  context.translate(500, 0);

  var text, img = new Image();
  img.onload = function() {
    context.drawImage(img, 0, 0);

    context.fillStyle = '#ffffff';
    context.strokeStyle = '#000000';
    context.lineWidth = 6;

    text = 'Cute Puppies';
    context.font = '3em Arial';
    context.strokeText(text, 100, 55);
    context.fillText(text, 100, 55);

    text = 'will lick your face';
    context.font ='2em Arial';
    context.strokeText(text, 150, 500);
    context.fillText(text, 150, 500);

  };
  img.src = "img/puppies-02.jpg";

  //  un-comment to scale the chart
  //context.scale(.5, .5); // 0.5 orig. size
  //context.scale(2, 2);  // 2x orig. size

  // arguments do not need to be equal
  //context.scale(.25, .5);

  // rotation
  //context.rotate(0.2);

  // show or hide with var degreesToRadians above
  //context.rotate(degreesToRadians(-15));

});
