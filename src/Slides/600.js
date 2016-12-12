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
        backgroundImage: `url(images/react-elements.jpg)`
    }}>
        <div style={{
            position: 'absolute',
            bottom: '6vh',
            left: '8vw',
        }}>
            <TextSlide headline="React" subline="Elements" />
        </div>

        <Step index={1}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                paddingTop: '3vh',
                paddingLeft: '2vw',
                width: '42vw',
            }}>
                <Paragraph>A <code>ReactElement</code> is a light,
                    stateless, immutable, virtual
                    representation of  a DOM
                    Element.</Paragraph>
            </div>
        </Step>
    </ImageSlide>
);

slide.title = 'React programming';

export default slide;