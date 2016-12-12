/* Notes
* Typische Art&Weise wie man früher JS geschreiben hat.
* Jeder von uns und manchen sogar noch heute.
* In diesem Beispiel noch sehr überschaubar doch man muss sich immer gedanken machen welche Daten wir anzeigen wollen
* => und wo bzw wie wir das machen!
*
* Reflektion: was haben wir gelernt?
* - das "wie" wir Änderung vornehmen ist meist die häufigste Fehlerursache
* - Können wir das "wie" ändern wir vlt los werden?
* - cool wäre es doch wenn man sich nur noch um das was kümmern müsste
* */

import React from 'react';

import MainSlide from '../components/MainSlide'

const slide = () => (
    <div>
        <MainSlide
            backgroundImage="images/045.jpg"
            orangeHeadline="Imperatives"
            blueHeadline="programmieren"
        />
    </div>
);

slide.title = 'imperatives programmieren';

export default slide;