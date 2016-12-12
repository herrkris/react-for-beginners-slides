/* Notes
* Darstellung des neuen Badge Counts
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
frameworkCount += 1;

$('.badge').data('count', frameworkCount);`}
        </TopAlignedCode>
    </div>
);

slide.title = 'Imperative programming - line 6';

export default slide;