/* Notes
* Kris Dreier & Jannik Egger
* Vorstellung Kris
* Vorstellung Jannik
* diva-e
*   Full Service Agentur / ca. 410 Mitarbeiter / 7 Standorte in Deutschland
*   FC Bayern / Deutsche Bank / GoPro / Red Bull / E.ON
*
* Überblick verschaffen wer schonmal was von React gehört hat.
* */

import React from 'react';

import MainSlide from '../components/MainSlide'

const slide = () => (
    <div>
        <MainSlide
            backgroundImage="images/005.jpg"
            noColoredImageOverlay={true}
        />
    </div>
);

slide.title = 'diva-e';

export default slide;

