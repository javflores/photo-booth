import React from 'react';
import { shallow } from 'enzyme';

import Thumbnails from './thumbnails';

describe('Thumbnails', () => {
    let renderer, thumbnailSelected;

    beforeEach(() => {
        const allPhotos = [{
            title: "first",
            index: 1
        }, {
            title: "second",
            index: 2
        }, {
            title: "third",
            index: 3
        }];
        thumbnailSelected = jest.fn();
        renderer = shallow(<Thumbnails
            allPhotos={allPhotos}
            currentPhoto={{index: 3}}
            thumbnailSelected={thumbnailSelected}
        />);
    });

    it('loads with as many thumbnails as photos are read', () => {
        let thumbnails = renderer.find('Thumbnail');
        expect(thumbnails.length).toBe(3);
    });

    it('renders current photo as selected thumbnail', () => {
        let selectedThumbnail = renderer
            .find('Thumbnail.selected');

        expect(selectedThumbnail.props().alt).toBe("third");
    });

    it('call thumbnail selected with thumbnail index when clicked', () => {
        let thumbnail = renderer
            .find('Thumbnail')
            .first();
        thumbnail.simulate('click');

        expect(thumbnailSelected).toHaveBeenCalledWith(1);
    });
});


