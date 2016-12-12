import React from 'react';

import AceSlide from '../components/AceSlide'

const slide = () => (
    <div>
        <AceSlide
            mainHeadline="Imperatives programmieren"
            inputHeadline="Zeile 3+4: auslesen der Anzahl an frameworks und um eins erhöhen"
            showOutput={false}
            inputCode={`$('.frameworks').append('<li>React</li>');

var frameworkCount = $('.badge').data('count');
frameworkCount += 1;`}
        />
    </div>
);

slide.title = 'Imperative programming - line 3+4';

export default slide;