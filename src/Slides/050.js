/* Notes
* Beispiel für einen typischen codeblock im imperativen CodeStyle
* Als erstes fügen wir ein neues Framework in unser UL ein.
* */
import React from 'react';

import AceSlide from '../components/AceSlide'

const slide = () => (
    <div>
        <AceSlide
            mainHeadline="Imperatives programmieren"
            inputHeadline="Zeile 1: ein neus Framework einfügen"
            showOutput={false}
            inputCode={`$('ul.frameworks').append('<li>React</li>');`}
        />
    </div>
);

slide.title = 'Imperative programming - line 1';

export default slide;