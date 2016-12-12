/* Notes
* Hat eigentlich gut funktioniert
*   jedoch schlecht für komplexe applikationen
*   eingeschränkt
*   != interaktiv
* */

import React from 'react';

import MainSlide from '../components/MainSlide'

const slide = () => (
    <div>
        <MainSlide
            backgroundImage="images/020.jpg"
            orangeHeadline="und?"
            blueHeadline="hat funktioniert!"
        />
    </div>
);

slide.title = 'Server & Client - best friends und immer im sync';

export default slide;

