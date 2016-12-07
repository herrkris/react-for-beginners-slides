import React from 'react';
import ImageSlide  from '../components/ImageSlide';

const slide = () => (
    <ImageSlide style={{ backgroundImage: 'url(images/000.jpg)' }}>
        <p>Hallo Welt</p>
    </ImageSlide>
);

slide.title = 'Das ist nur ein Test';

export default slide;