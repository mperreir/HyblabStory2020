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
    });
    this.hoverSound = this.hoverSound.bind(this);
    this.homeButton.addEventListener('mouseenter', this.hoverSound);
    this.overlayButton.addEventListener('mouseenter', this.hoverSound);
    
    const savedSound = localStorage.getItem('SOUND_ACTIVATED');
    if (savedSound !== null) {
      this.setSoundActivated(savedSound === 'true');
    } else {
      this.setSoundActivated(true);
    }
  }

  toggleSound() {
    this.setSoundActivated(!this.isSoundActivated);
  }

  hoverSound() {
    if (this.isSoundActivated) {
      window.soundManager.play('sound/hover/sound_disable.mp3');
    }
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
    localStorage.setItem('SOUND_ACTIVATED', state);
  }

  async play(file) {
    if (!this.audio) {
      this.audio = new Audio(file);
    } else {
      this.pause();
      this.audio.src = file;
      this.audio.load();
    }
    this.audio.muted = !this.isSoundActivated;
    this.audio.play().catch(() => {});
  }

  async pause() {
    if (this.audio) {
      if (this.playPromise) {
        const res = await this.playPromise;
        this.playPromise = null;
      }
      this.audio.pause();
    }
  }

}