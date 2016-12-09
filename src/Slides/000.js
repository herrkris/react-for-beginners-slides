/* Notes
* Begrüßung
* Inhaltliche kurzzusammenfassung
*   exkurs in die Geschichte - wie haben wir früher programmiert
*   was ist React und wobei hilft es uns?
* Bei Fragen bitte Fragen
* Praktikum ist am Freitag
* */

import React from 'react';

import MainSlide from '../components/MainSlide'

const slide = () => (
    <div>
        <MainSlide
            backgroundImage="images/000.jpg"
            orangeHeadline="WTF IS"
            blueHeadline="REACT?"
        />
    </div>
);

slide.title = 'WTF IS REACT?';

export default slide;