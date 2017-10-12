class PhotoStore{
    initialState = {
        currentPhoto: undefined,
        allPhotos: []
    };

    constructor(reducers, initialState = this.initialState){
       this.state = initialState;
       this.reducers = reducers;
    }

    /*dispatch(it will get passed actionCreator like nextPhoto){
         Dispatch can be called anywhere in the application.
        store should call the reducer function based on the action. It passes current state and action, it gets back the next state,
         it updates it.
         It also should call the subscribers
     }

     getState(){
        return this.state;
     }

     subscribe(Input parameter: Function that will be called everytime changes, eg () => console.log(store.getState()){
     // subscribe() returns a function for unregistering the listener,
     // that is if I do let unsubscribe = subscribe();
     //unsubcribe()// listener will be removed
     )
    */

}

export default PhotoStore;