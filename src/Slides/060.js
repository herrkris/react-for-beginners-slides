/* Notes
* Darstellung des neuen Badge Counts
* */

import React from 'react';

import AceSlide from '../components/AceSlide'

const slide = () => (
    <div>
        <AceSlide
            mainHeadline="Imperatives programmieren"
            inputHeadline="Zeile 6: Anzeige wird aktuallisiert"
            showOutput={false}
            inputCode={`$('ul.frameworks').append('<li>React</li>');

var frameworkCount = $('.badge').data('count');
frameworkCount += 1;

$('.badge').data('count', frameworkCount);`}
        />
    </div>
);

slide.title = 'Imperative programming - line 6';

export default slide;