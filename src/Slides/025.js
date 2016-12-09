/* Notes
* Buzzword Bingo (AJAX, jQuery, Bootstrap)
* alte Websiten durch integration von neuen Technologien etwas aufgübschen und modernisieren
* AJAX
* */

import React from 'react';

import MainSlide from '../components/MainSlide'

const slide = () => (
    <div>
        <MainSlide
            backgroundImage="images/025.jpg"
            whiteHeadline="Buzzword Bingo"
        />
    </div>
);

slide.title = 'Buzzword Bingo';

export default slide;

