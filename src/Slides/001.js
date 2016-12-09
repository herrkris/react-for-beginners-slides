import React from 'react';

import MainSlide from '../components/MainSlide'

const slide = () => (
    <div>
        <MainSlide
            backgroundImage="images/000.jpg"
            orangeHeadline="WTF IS"
            blueHeadline="REACT?"
            whiteHeadline="AJAX"
        />
    </div>
);

slide.title = 'Test';

export default slide;