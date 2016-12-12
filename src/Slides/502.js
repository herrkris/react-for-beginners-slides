import React from 'react';
import ImageSlide from '../components/ImageSlide';
import TextSlide from '../components/TextSlide';

const slide = () => (
  <ImageSlide style={{
    backgroundImage: `url(images/inception-2.jpg)`
  }}>
    <div style={{
      position: 'absolute',
      bottom: '6vh',
      left: '50%',
      marginLeft: '-1.73vw',
      transform: 'translateX(-50%)'
    }}>
      <TextSlide headline="Virtual" subline="DOM" color="white" />
    </div>
  </ImageSlide>
);

slide.title = 'React programming';

export default slide;