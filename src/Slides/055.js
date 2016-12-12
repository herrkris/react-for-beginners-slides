/* Notes
* Auslesen der aktuellen Anzahl an frameworks (aus .badge)
* anschließend erhöhen wir den count um 1
* */
import React from 'react';

import MainSlide from '../components/MainSlide';
import TopAlignedCode from '../components/TopAlignedCode';

const slide = () => (
    <div>
        <MainSlide
            backgroundImage="images/045.jpg"
        />
        <TopAlignedCode>
            {`$('ul.frameworks')
    .append('<li>React</li>');

var frameworkCount = $('.badge').data('count');
frameworkCount += 1;`}
        </TopAlignedCode>
    </div>
);

slide.title = 'Imperative programming - line 3+4';

export default slide;