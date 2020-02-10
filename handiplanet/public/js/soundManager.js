class SoundManager {
  constructor() {
    this.homeButton = document.getElementById('home-sound-button');
    this.homeButtonImg = document.getElementById('home-sound-img');
    this.overlayButton = document.getElementById('overlay-sound-button');
    this.overlayButtonImg = document.getElementById('overlay-sound-img');

    this.homeButton.addEventListener('click', () => {
      this.toggleSound();
    });
    this.overlayButton.addEventListener('click', () => {
      this.toggleSound();
    })
    this.setSoundActivated(true);
  }

  toggleSound() {
    this.setSoundActivated(!this.isSoundActivated);
  }

  setSoundActivated(state) {
    this.isSoundActivated = state;
    if (this.audio) {
      this.audio.muted = !this.isSoundActivated;
    }

    if (state) {
      this.homeButtonImg.src = 'assets/SonW.svg';
      this.overlayButtonImg.src = 'assets/Son.svg';
    } else {
      this.homeButtonImg.src = 'assets/SonMuteW.svg';
      this.overlayButtonImg.src = 'assets/SonMute.svg';
    }
  }

  play(file) {
    if (!this.audio) {
      this.audio = new Audio(file);
    } else {
      this.audio.pause();
      this.audio.src = file;
    }
    this.audio.load();
    this.audio.muted = !this.isSoundActivated;
    this.audio.play();
  }

  pause() {
    if (this.audio) {
      this.audio.pause();
    }
  }

}