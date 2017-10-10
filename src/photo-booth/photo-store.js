class ImageStore {
  constructor(triggerPhotoChanged){
      this._allPhotos = [
          {
              index: 1,
              title: "Baseball",
              tinySrc: "http://lorempixel.com/200/200/sports/1",
              bigSrc: "http://lorempixel.com/500/500/sports/1",
              selected: true
          },
          {
              index: 2,
              title: "Surf",
              tinySrc: "http://lorempixel.com/200/200/sports/2",
              bigSrc: "http://lorempixel.com/500/500/sports/2",
              selected: false
          },
          {
              index: 3,
              title: "Bike",
              tinySrc: "http://lorempixel.com/200/200/sports/3",
              bigSrc: "http://lorempixel.com/500/500/sports/3",
              selected: false
          },
      ];
      this._currentPhoto = 1;
      this._triggerPhotoChanged = triggerPhotoChanged;
  }

  getBigPhoto(){
      const photo = this._allPhotos[this._currentPhoto - 1];
      return {
          bigSrc: photo.bigSrc,
          title: photo.title
      };
  }

  getAllPhotos(){
      return this._allPhotos;
  }

  photoSelected(photoSelected){
      this._currentPhoto = photoSelected;
      this._allPhotos = this._allPhotos.map((photo) => {
          photo.selected = this._currentPhoto === photo.index;
          return photo;
      }, this);
      this._triggerPhotoChanged(this._currentPhoto);
  }

  _isFirstPhoto(){
      return this._currentPhoto === 1;
  }

  _isLastPhoto(){
      return this._currentPhoto === this._allPhotos.length;
  }

  previous(){
      let previousPhoto = this._isFirstPhoto() ? this._allPhotos.length : this._currentPhoto - 1;
      this.photoSelected(previousPhoto);
  }

  next(){
      let nextPhoto = this._isLastPhoto() ? 1 : this._currentPhoto + 1;
      this.photoSelected(nextPhoto);
  }

  random(){
      let random = this._generateNextRandom();
      this.photoSelected(random);
  }

  _generateNextRandom() {
      let random = Math.floor(Math.random() * this._allPhotos.length) + 1;
      if(random === this._currentPhoto){
          return this._generateNextRandom();
      }
      else{
          return random;
      }
  }
};

export default ImageStore;