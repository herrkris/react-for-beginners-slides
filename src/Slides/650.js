import React from 'react';
import styled from 'styled-components';
import { Step } from 'react-presents';
import ImageSlide from '../components/ImageSlide';
import TextSlide from '../components/TextSlide';

const Paragraph = styled.p`
    font-family: Roboto;
    font-size: 3.3vw;
    line-height: 1.4;
    color: #002452;
    
    code {
        font-family: monospace;
        font-style: italic;
        background-color: transparent;
        color: #B74E00;
    }
`;

const slide = () => (
    <ImageSlide style={{
        backgroundImage: `url(images/components.jpg)`
    }}>
        <div style={{
            position: 'absolute',
            bottom: '26vh',
            right: '18vw',
        }}>
            <TextSlide headline="React" subline="Component" />
        </div>
    </ImageSlide>
);

slide.title = 'React Component'

export default slide;