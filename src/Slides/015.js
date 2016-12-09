/* Notes
* Wir hatten Server und Client
* Server reagiert auf eine Anfrage (klick, form submit)
* Holt Daten (MySQL oÄ), baut HTML, liefert es aus
* Client zeigt es an, hübsch gemacht mit CSS
* Datenänderung mit Formular
* Server verarbeitet alles, schickt neues HTML raus
* Server und Client waren immer synchron
* Datenänderung hat refresh ausgelöst
* */

import React from 'react';

import MainSlide from '../components/MainSlide'

const slide = () => (
    <div>
        <MainSlide
            backgroundImage="images/015.jpg"
            orangeHeadline="Server & Client - best friends und immer in sync"
        />
    </div>
);

slide.title = 'Server & Client - best friends und immer im sync';

export default slide;

