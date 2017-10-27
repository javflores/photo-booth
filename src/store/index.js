import photoReducer from '../reducers/index';

class PhotoStore{
    constructor(){
        this.state = {
           currentPhoto: {title: "", index: 0},
           allPhotos: []
       };
       this.listeners = [];
    }

    dispatch(action){
        this.state = photoReducer(this.state, action);
        this.listeners.forEach(listener => listener());
    }

     getState(){
        return this.state;
     }

     subscribe(listener){
         this.listeners.push(listener);
     }

}

export default PhotoStore;