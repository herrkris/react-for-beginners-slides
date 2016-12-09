/* Notes
* AJAX bliebt über die Jahre bestehen
* nützliches Werkzeug (Performance, interaktiver, sehr flexibel)
* */

import React from 'react';

import MainSlide from '../components/MainSlide'

const slide = () => (
    <div>
        <MainSlide
            backgroundImage="images/030.jpg"
            whiteHeadline="AJAX"
        />
    </div>
);

slide.title = 'AJAX';

export default slide;

