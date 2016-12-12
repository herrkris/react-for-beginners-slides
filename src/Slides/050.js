/* Notes
* Beispiel für einen typischen codeblock im imperativen CodeStyle
* Als erstes fügen wir ein neues Framework in unser UL ein.
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
    .append('<li>React</li>');`}
        </TopAlignedCode>
    </div>
);

slide.title = 'Imperative programming - line 1';

export default slide;