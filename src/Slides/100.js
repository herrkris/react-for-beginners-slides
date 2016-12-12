import React from 'react';

import AceSlide from '../components/AceSlide'

const slide = () => (
    <div>
        <AceSlide
            inputHeadline="JSX"
            outputHeadline="Real JS"
            mainHeadline="Basic JSX to JS"
            transformOnMount={true}
            showOutput={true}
            inputCode={`const Test = () => {
    <div className="link-wrapper">
        <a href="#jumpto">
            Link Text
        </a>
    </div>
}`}
        />
    </div>
);

slide.title = 'Das ist nur ein Test';

export default slide;