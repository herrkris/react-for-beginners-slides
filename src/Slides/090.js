/* Notes
* Ziel: alle Zahlen > 8 sollen in newNums schreiben.
* */

import React from 'react';

import MainSlide from '../components/MainSlide';
import TopAlignedCode from '../components/TopAlignedCode';

const slide = () => (
    <div>
        <MainSlide
            backgroundImage="images/070.jpg"
        />
        <TopAlignedCode>
            {`// WIE
function updateCount(newCount) {
    $('.badge').data('count', newCount);
}

function getCount() {
    return $('.badge').data('count');
}

function appendFrameWork(framework) {
    $('ul.frameworks').append('<li>' + framework + '</li>');
}

function addFramework(framework) {
    var count = getCount();
    count += 1;

    updateCount(newCount);

    appendFramework(appendFrameWork);
}

// WAS
addFramework('REACT');
`}
        </TopAlignedCode>
    </div>
);

slide.title = 'Imperative programming - line 7-12';

export default slide;