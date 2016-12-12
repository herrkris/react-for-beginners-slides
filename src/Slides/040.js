/* Notes
* Websiten und deren Funktionsumfang wurden immer komplexer
*   Benutzer gibt Daten ein oder verändert bestehende
* BE & FE nicht mehr im Sync
* Was tun im Fehlerfall?
*   Alles wieder rückgängig machen
*   Anwendungen wurden komplexer, Code aufwendiger zu warten.
* BE === Rest-API
* */

import React from 'react';

import MainSlide from '../components/MainSlide'

const slide = () => (
    <div>
        <MainSlide
            backgroundImage="images/040.jpg"
            orangeHeadline="synchron?"
            blueHeadline="nope - nicht mehr"
        />
    </div>
);

slide.title = 'Sync?';

export default slide;

