/* Notes
* Initale Vars deklarieren
* Fibonacci Zahlenfolge und ein leeres Array
* Ziel: alle Zahlen > 8 sollen in newNums schreiben.
* */

import React from 'react';

import AceSlide from '../components/AceSlide'

const slide = () => (
    <div>
        <AceSlide
            mainHeadline="Deklaratives programmieren"
            inputHeadline="Zeile 1+2"
            showOutput={false}
            inputCode={`const nums = [0, 1, 2, 3, 5, 8, 13, 20, 42];
let newNums = [];`}
        />
    </div>
);

slide.title = 'Imperative programming - line 1+2';

export default slide;