/* Notes
* Ziel: alle Zahlen > 8 sollen in newNums schreiben.
* */

import React from 'react';

import AceSlide from '../components/AceSlide'

const slide = () => (
    <div>
        <AceSlide
            mainHeadline="Deklaratives programmieren"
            inputHeadline="Zeile 4+5: Deklaratives Beispiel"
            showOutput={false}
            inputCode={`const nums = [0, 1, 2, 3, 5, 8, 13, 21, 34, 42];
let newNums = [];

// Deklarativ
newNums = nums.filter( (num) num > 8 );`}
        />
    </div>
);

slide.title = 'Imperative programming - line 4+5';

export default slide;