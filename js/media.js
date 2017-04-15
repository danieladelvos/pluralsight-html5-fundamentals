document.addEventListener('DOMContentLoaded', function(e) {
  var
    video = document.getElementById('vid'),
    remainingTime = document.getElementById('remainingTime'),
    totalTime = document.getElementById('totalTime'),
    playPause = document.getElementById('playPause'),
    stop = document.getElementById('stop'),
    rewind = document.getElementById('rewind'),
    begin = document.getElementById('begin'),
    end = document.getElementById('end'),
    fastForward = document.getElementById('fastForward'),
    volume = document.getElementById('volume'),
    mute = document.getElementById('mute'),
    scrubber = document.getElementById('scrubber'),
    playbackRate = document.getElementById('playbackRate'),
    TIME_STEP = 5,
    vol = 0;

  var formatTime = function (seconds) {
    seconds = Math.round(seconds);
    var minutes = 0;
    if (seconds >= 60) {
      minutes = Math.floor(seconds / 60);
      seconds = (seconds - (minutes * 60));
    }
    seconds = seconds + '';
    if (seconds.length == 1) {
        seconds = '0' + seconds;
    }
    return minutes + ':' + seconds;
  };

});
