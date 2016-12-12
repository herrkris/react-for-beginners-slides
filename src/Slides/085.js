/* Notes
* Ziel: alle Zahlen > 8 sollen in newNums schreiben.
* */

import React from 'react';

import AceSlide from '../components/AceSlide'

const slide = () => (
    <div>
        <AceSlide
            mainHeadline="Deklaratives programmieren"
            inputHeadline="Zeile 7-12: Imperatives Beispiel"
            showOutput={false}
            inputCode={`const nums = [0, 1, 2, 3, 5, 8, 13, 21, 34, 42];
let newNums = [];

// Deklarativ
newNums = nums.filter( (num) num > 8 );

// Imperativ
for(let i = 0; i < nums.length; i++) {
    if (nums[i] > 8) {
        newNums.push(nums[i]);
    }
}`}
        />
    </div>
);

slide.title = 'Imperative programming - line 7-12';

export default slide;