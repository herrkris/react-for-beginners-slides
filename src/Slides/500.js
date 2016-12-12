import React from 'react';
import ImageSlide from '../components/ImageSlide';
import TextSlide from '../components/TextSlide';

const slide = () => (
  <ImageSlide style={{
    backgroundImage: `url(images/declarative.jpg)`
  }}>
    <div style={{
      position: 'absolute',
      bottom: '6vh',
      left: '50%',
      transform: 'translateX(-50%)'
    }}>
      <TextSlide headline="React" subline="Programming" />
    </div>
  </ImageSlide>
);

slide.title = 'React programming';

export default slide;