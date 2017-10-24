describe('Photo reducer', () => {
    let store, reducer;
    beforeAll(() => {
        jest.enableAutomock();
        jest.dontMock("./index");
        const PhotoStore = require('./index').default;
        store = new PhotoStore();
    });

    it('initializes with empty state', () => {
        let initialState = store.getState();
        expect(initialState.allPhotos).toEqual([]);
        expect(initialState.currentPhoto).toEqual({
            title: "",
            index: 0
        });
    });

    it('calls reducer with current state when action is dispatched', () => {
        let reducer = require('../reducers/index').default;

        store.dispatch("NEW ACTION");
        expect(reducer).toHaveBeenCalledWith(
            {
                "allPhotos": [],
                "currentPhoto": {
                    "index": 0,
                    "title": ""
                }
            },
            "NEW ACTION"
        );
    });

    it('calls listener when action is dispatched', () => {
        let listener = jest.fn();
        store.subscribe(listener);

        store.dispatch("NEW ACTION");

        expect(listener).toHaveBeenCalled();
    });
});


