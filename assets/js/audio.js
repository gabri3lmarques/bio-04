

function togglePlay (btnel, audioel, progel) {
  var timer;
  var percent = 0;
  var audio = document.getElementById(audioel);
  audio.addEventListener("playing", function(_event) {
    var duration = _event.target.duration;
    advance(duration, audio);
  });
  audio.addEventListener("pause", function(_event) {
    clearTimeout(timer);
  });
  var advance = function(duration, element) {
    var progress = document.getElementById(progel);
    increment = 10/duration
    percent = Math.min(increment * element.currentTime * 10, 100);
    progress.style.width = percent+'%'
    startTimer(duration, element);
  }
  var startTimer = function(duration, element){ 
    if(percent < 100) {
      timer = setTimeout(function (){advance(duration, element)}, 100);
    }
  }

  var btn = document.getElementById(btnel)
  if (!btn.classList.contains('active')) {
    btn.classList.add('active');
    audio.play();
    return
  }
  else {
    btn.classList.remove('active');
    audio.pause();
  }
}