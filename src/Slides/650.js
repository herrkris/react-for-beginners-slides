import React from 'react';
import ImageSlide from '../components/ImageSlide';
import TextSlide from '../components/TextSlide';

const slide = () => (
    <ImageSlide style={{
        backgroundImage: `url(images/components.jpg)`
    }}>
        <div style={{
            position: 'absolute',
            bottom: '26vh',
            right: '18vw',
        }}>
            <TextSlide headline="React" subline="Component" />
        </div>
    </ImageSlide>
);

slide.title = 'React Component'

export default slide;