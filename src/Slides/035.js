/* Notes
* Performance
* interaktiver da keine reloads benötigt wurden
* sehr flexibel
* Client und Server konnten gleichzeitig agieren
* Client konnte Teile im HTML manipulieren
* Anfang Austausch von HTML-Schnipseln
* Backend-Generierung des HTMLs
* Warum Backend nicht als reinen Datenlieferanten?
* Warum nicht im Frontend HTML generieren?
* */

import React from 'react';

import MainSlide from '../components/MainSlide'

const slide = () => (
    <div>
        <MainSlide
            backgroundImage="images/035.jpg"
            whiteHeadline="Vorteile von AJAX?"
        />
    </div>
);

slide.title = 'Vorteile von AJAX?';

export default slide;

