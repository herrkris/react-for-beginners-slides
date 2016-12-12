import React from 'react';
import ImageSlide from '../components/ImageSlide';
import TextSlide, { Headline, Subline } from '../components/TextSlide';
import { Step } from 'react-presents';

const slide = () => (
    <ImageSlide style={{
        backgroundImage: `url(images/000.jpg)`
    }}>
        <div style={{
            position: 'absolute',
            bottom: '21vh',
            left: '3vw',
            transform: 'translateX(-50%)'
        }}>
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                whiteSpace: 'nowrap',
                width: '60vw',
                textAlign: 'right',
            }}>
            <Step index={0} exact>
                <TextSlide headline="WTF IS" subline="React?" />
            </Step>
            <Step index={1} maxIndex={5}>
                <div>
                <Headline>React is</Headline>
                <Step index={1} exact>
                    <Subline align="right">a library</Subline>
                </Step>
                <Step index={2} exact>
                    <Subline align="right">component based</Subline>
                </Step>
                <Step index={3} exact>
                    <Subline align="right">declarative</Subline>
                </Step>
                <Step index={4} exact>
                    <Subline align="right">fast to learn</Subline>
                </Step>
                <Step index={5} exact>
                    <Subline align="right">hard to master</Subline>
                </Step>
                </div>
            </Step>
                <Step index={6} exact>
                    <div style={{ transform: 'scale(.7)', marginLeft: '18vw'}}>
                    <TextSlide headline="Richard Saul" subline={`"Give it 5 minutes."`} />
                    </div>
                </Step>
                <Step index={7} exact>
                    <TextSlide headline="Thanks!" subline="Questions?"/>
                </Step>
                </div>
        </div>
    </ImageSlide>
);

slide.title = 'React Component'

export default slide;