document.addEventListener('DOMContentLoaded', function(e) {
  var video = document.getElementById('video01'),
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
      vol = 0,
      firstFileName,
      secondFileName,
      forEach;

  forEach = Array.prototype.forEach;
  firstFileName = video.getAttribute('data-firstfile');
  secondFileName = video.getAttribute('data-secondfile');

  var formatTime = function (seconds) {
    seconds = Math.round(seconds);
    var minutes = 0;
    if (seconds >= 60) {
      minutes = Math.floor(seconds / 60);
      seconds = (seconds - (minutes * 60));
    }
    seconds = seconds + '';
    if (seconds.length === 1) {
      seconds = '0' + seconds;
    }
    return minutes + ':' + seconds;
  };

  var playOrPauseVideo = function (){
    if (video.paused || video.ended) {
      video.play();
      playPause.innerText = 'Pause';
    }
    else {
      video.pause();
      playPause.innerText = 'Play';
    }
  };

  video.addEventListener('click', playOrPauseVideo, false);
  playPause.addEventListener('click', playOrPauseVideo, false);

  stop.addEventListener('click', function() {
    video.pause();
    video.currentTime = 0;
    playPause.innerText = 'Play';
    video.playbackRate = 1;
    playbackRate.value = 1;
  }, false);

  begin.addEventListener('click', function() {
    video.currentTime = 0;
  }, false);

  rewind.addEventListener('click', function() {
    video.currentTime -= TIME_STEP;
    }, false);

  fastForward.addEventListener('click', function() {
    video.currentTime += TIME_STEP;
  }, false);

  end.addEventListener('click', function() {
    video.currentTime = video.duration;
    playPause.innerText = 'Play';
  }, false);

  volume.addEventListener('change', function () {
    video.volume = this.value;
  }, false);

  mute.addEventListener('click', function() {
    if (!video.muted) {
      vol = volume.value;
    }

    video.muted = !video.muted;

    if (video.muted) {
      volume.value = 0;
      mute.innerText = 'Unmute';
    }

    else {
      volume.value = vol;
      mute.innerText = 'Mute';
    }
  }, false);

  scrubber.addEventListener('change', function() {
    video.currentTime = this.value;
  }, false);

  playbackRate.addEventListener('change', function() {
    video.playbackRate = this.value;
  }, false);

  video.addEventListener('play', function() {
    totalTime.innerText = formatTime(video.duration);
  }, false); //I added false here

  video.addEventListener('ended', function() {
    var sources = this.getElementsByTagName('source');

    playPause.innerText = 'Play';

    // check to see if the last video is not loaded
    if(sources[0].src.indexOf(secondFileName) === -1) {
      forEach.call(sources, function(source) {
        source.src = source.src.replace(firstFileName, secondFileName);
      });

      this.load();
      this.play();
    }
  }, false);

  video.addEventListener('timeupdate', function() {
    remainingTime.innerText = formatTime(video.currentTime);
    scrubber.value = video.currentTime;
  }, false);

});
