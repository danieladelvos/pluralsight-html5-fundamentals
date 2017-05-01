document.addEventListener('DOMContentLoaded', function(e) {
  var video = document.querySelector('#video');
  var canvas = document.querySelector('#canvas-thumbnail');
  var context = canvas.getContext('2d');
  var btn = document.querySelector('#btn');
  var thumbs = document.querySelector('#thumbs');
  var width =
        video.width =
        canvas.width =
        video.offsetWidth = 320;

  var height =
        video.height =
        canvas.height =
        video.offsetHeight = 180;

  var getThumb = function () {
        var thumb;
        context.drawImage(video, 0, 0, width, height);
        thumb = new Image();
        thumb.src = canvas.toDataURL('image/png');
        thumb.width = 60;
        thumbs.appendChild(thumb);
  };

  btn.addEventListener('click', getThumb);
});
