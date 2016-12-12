import React from 'react';
import styled from 'styled-components';
import ImageSlide from '../components/ImageSlide';
import Code from '../components/BigCode';

const slide = () => (
    <ImageSlide style={{
        backgroundImage: `url(images/components.jpg)`
    }} code>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}>
                <Code align="left">{`const Element = React.createClass({`}</Code>
                <Code align="left" indent={1}>{`render: function() {`}</Code>
                <Code align="left" indent={2}>{`return React.createElement('div');`}</Code>
                <Code align="left" indent={1}>{`}`}</Code>
                <Code align="left">{`}`}</Code>
            </div>
    </ImageSlide>
);

slide.title = 'React Component'

export default slide;