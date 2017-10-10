class ImageStore {
  constructor(notifyPhotoChanged){
      this.allPhotos = [
          {
              index: 1,
              title: "Baseball",
              tinySrc: "http://lorempixel.com/200/200/sports/1",
              bigSrc: "http://lorempixel.com/500/500/sports/1"
          },
          {
              index: 2,
              title: "Surf",
              tinySrc: "http://lorempixel.com/200/200/sports/2",
              bigSrc: "http://lorempixel.com/500/500/sports/2"
          },
          {
              index: 3,
              title: "Bike",
              tinySrc: "http://lorempixel.com/200/200/sports/3",
              bigSrc: "http://lorempixel.com/500/500/sports/3"
          },
      ];
      this.currentPhoto = 1;
      this.notifyPhotoChanged = notifyPhotoChanged;
  }

  getPhotoMetadata(currentPhoto){
      const photo = this.allPhotos[currentPhoto - 1];
      return {
          bigSrc: photo.bigSrc,
          title: photo.title
      };
  }

  getAllPhotos(){
      return this.allPhotos;
  }

  photoSelected(photoSelected){
      this.currentPhoto = photoSelected;
      this.notifyPhotoChanged(this.currentPhoto);
  }

  isFirstPhoto(){
      return this.currentPhoto === 1;
  }

  isLastPhoto(){
      return this.currentPhoto === this.allPhotos.length;
  }

  previous(){
      this.currentPhoto = this.isFirstPhoto() ? this.allPhotos.length : this.currentPhoto - 1;
      this.notifyPhotoChanged(this.currentPhoto);
  }

  next = () => {
      this.currentPhoto = this.isLastPhoto() ? 1 : this.currentPhoto + 1;
      this.notifyPhotoChanged(this.currentPhoto);
  }
};

export default ImageStore;