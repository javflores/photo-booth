class ImageStore {
  constructor(triggerPhotoChanged){
      this.allPhotos = [
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
      const photo = this.allPhotos[this._currentPhoto - 1];
      return {
          bigSrc: photo.bigSrc,
          title: photo.title
      };
  }

  getAllPhotos(){
      return this.allPhotos;
  }

  photoSelected(photoSelected){
      this._currentPhoto = photoSelected;
      this.allPhotos = this.allPhotos.map((photo) => {
          photo.selected = this._currentPhoto === photo.index;
          return photo;
      }, this);
      this._triggerPhotoChanged(this._currentPhoto);
  }

  _isFirstPhoto(){
      return this._currentPhoto === 1;
  }

  _isLastPhoto(){
      return this._currentPhoto === this.allPhotos.length;
  }

  previous(){
      this.photoSelected(this._isFirstPhoto() ? this.allPhotos.length : this._currentPhoto - 1);
  }

  next(){
      this.photoSelected(this._isLastPhoto() ? 1 : this._currentPhoto + 1);
  }
};

export default ImageStore;