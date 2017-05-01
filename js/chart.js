document.addEventListener('DOMContentLoaded', function(e) {
  var chartData = [
      { month: 70, perf: 125 },
      { month: 105, perf: 280 },
      { month: 140, perf: 115 },
      { month: 175, perf: 45 },
      { month: 210, perf: 200 },
      { month: 245, perf: 245 },
      { month: 280, perf: 177 }
    ],
    canvas = document.getElementById('canvas-chart'),
    context = canvas.getContext('2d'),
    bkgImg = new Image();

  bkgImg.src = "img/chart-background-large.png";

  bkgImg.onload = function() {
    context.drawImage(bkgImg, 0, 0);
    drawSegment();
  };

  index = 0;

  drawSegment = function () {
    var x1, y1, x2, y2;

    x1 = chartData[index].month;
    y1 = chartData[index].perf;

    x2 = chartData[index + 1].month;
    y2 = chartData[index + 1].perf;

    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    index++;
  };

  context.strokeStyle = 'rgb(31, 172, 242)';
  context.lineWidth = 4;
  context.lineCap = 'round';

  var frame = setInterval(function () {
    drawSegment();

    if (!(index < chartData.length - 1)) {
      clearInterval(frame);
    }
  }, 750);

});
