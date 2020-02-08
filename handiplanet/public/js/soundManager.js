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

    if (state) {
      this.homeButtonImg.src = 'assets/SonW.svg';
      this.overlayButtonImg.src = 'assets/Son.svg';
    } else {
      this.homeButtonImg.src = 'assets/SonMuteW.svg';
      this.overlayButtonImg.src = 'assets/SonMute.svg';
    }
  }

}