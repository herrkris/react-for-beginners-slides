/* Notes
* Kochen lassen anstatt selbst zu kochen
* Wir geben vor was wir an Zutaten haben und was wir daraus wollen
* Wie das Gericht gekocht wird überlassen wir dem Koch
* */

import React from 'react';

import MainSlide from '../components/MainSlide';

const slide = () => (
    <div>
        <MainSlide
            backgroundImage="images/070.jpg"
            orangeHeadline="Deklaratives"
            blueHeadline="programmieren"
        />
    </div>
);

slide.title = 'deklaratives programmieren';

export default slide;