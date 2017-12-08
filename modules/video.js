var video = {
  //variables at top
  videoPlayer : document.querySelector('video'),
  vidThumbs : document.querySelectorAll('.vid-thumb'),
  volumeIndicator : document.querySelector('.vol-indicator'),

  //functionality
  volOn() {
    video.videoPlayer.muted = false;
    video.volumeIndicator.classList.replace('fa-volume-off', 'fa-volume-up')
  },
  //functionality

  volOff() {
    video.videoPlayer.muted = true;
    video.volumeIndicator.classList.replace('fa-volume-up', 'fa-volume-off')
  },

  popOverlay() {
    let overlay = document.querySelector('.vid-overlay');
    overlay.classList.add('show-overlay');
    overlay.querySelector('i').addEventListener('click', video.replayVideo);

  },

  replayVideo() {
    //debugger;
    video.videoPlayer.currentTime = 0;
    video.videoPlayer.play();

    let overlay = document.querySelector('.vid-overlay');
    overlay.classList.remove('show-overlay');
    overlay.querySelector('i').addEventListener('click', video.replayVideo);
  },

  init() {
    console.log('video module added');

  }

}

video.init();
