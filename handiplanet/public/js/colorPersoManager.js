
class ColorPersoManager {
  constructor() {
    this.assets = [{
      face: 'assets/perso/perso_white_face.svg',
      back: 'assets/perso/perso_white_back.svg',
      side: 'assets/perso/perso_white_side.svg'
    },{
      face: 'assets/perso/perso_green_face.svg',
      back: 'assets/perso/perso_green_back.svg',
      side: 'assets/perso/perso_green_side.svg'
    },{
      face: 'assets/perso/perso_red_face.svg',
      back: 'assets/perso/perso_red_back.svg',
      side: 'assets/perso/perso_red_side.svg'
    }];

    this.selectedAssets = 1;
    this.observers = [];
  }

  getAsset() {
    return this.assets[this.selectedAssets];
  }

  setSelected(index) {
    this.selectedAssets = index;
    for(let i = 0; i<this.observers.length; i++) {
      this.observers[i](this.assets[this.selectedAssets]);
    }
  }

  addObserver(obs) {
    this.observers.push(obs);
  }
}