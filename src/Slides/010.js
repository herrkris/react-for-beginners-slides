/* Notes
* Wir beginnen mit einer kleinen Geschichtskunde
* */

import React from 'react';

import MainSlide from '../components/MainSlide'

const slide = () => (
    <div>
        <MainSlide
            backgroundImage="images/010.jpg"
            whiteHeadline="DAFUQ?"
        />
    </div>
);

slide.title = 'Was machen wir eigenltich? Dafuq!';

export default slide;

