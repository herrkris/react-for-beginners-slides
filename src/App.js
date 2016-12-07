import React from 'react';
import { DropDownNav, Presentation, Slide } from 'react-presents';
import './App.css';

const slides = require.context('./Slides/', false, /\.js$/)
    .keys()
    .map(filename => filename.replace('./', ''))
    .map(filename => require(`./Slides/${filename}`).default);

const options = slides
    .map((slide, index) => ({
        label: slide.title,
        value: index,
    }))
    .filter(option => option.label);

const App = () => (
    <Presentation>
        {slides.map((Component, index) => (
            <Slide
                component={Component}
                key={index}
            />
        )).concat(
            <DropDownNav
                options={options}
                key="DropDownNav"
            />
        )
        }
    </Presentation>
);

export default App;
