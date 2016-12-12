/* Notes
* Typische Art&Weise wie man früher JS geschreiben hat.
* Jeder von uns und manchen sogar noch heute.
* In diesem Beispiel noch sehr überschaubar doch man muss sich immer gedanken machen welche Daten wir anzeigen wollen
* => und wo bzw wie wir das machen!
* */

import React from 'react';

import AceSlide from '../components/AceSlide'

const slide = () => (
    <div>
        <AceSlide
            mainHeadline="Imperatives programmieren"
            inputHeadline="Zeile 6: Anzeige wird aktuallisiert"
            showOutput={false}
            inputCode={`$('.frameworks').append('<li>React</li>');

var frameworkCount = $('.badge').data('count');
frameworkCount += 1;

$('.badge').data('count', frameworkCount);`}
        />
    </div>
);

slide.title = 'Imperative programming - line 6';

export default slide;