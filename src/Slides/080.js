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
        {`const nums = [0, 1, 2, 3, 5, 8, 13, 21, 34, 42];
let newNums = [];

// Deklarativ
newNums = nums.filter( (num) num > 8 );`}
        </TopAlignedCode>
    </div>
);

slide.title = 'Imperative programming - line 4+5';

export default slide;