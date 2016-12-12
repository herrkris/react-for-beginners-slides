import React from 'react';
import { Step } from 'react-presents';
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
                <Step index={0} exact>
                    <div>
                    <Code align="left">{`const Element = React.createClass({`}</Code>
                    <Code align="left" indent={1}>{`render: function() {`}</Code>
                    <Code align="left" indent={2}>return React.createElement('div');</Code>
                    <Code align="left" indent={1}>}</Code>
                    <Code align="left">};</Code>
                    </div>
                </Step>
                <Step index={1} exact>
                    <div>
                    <Code align="left">{`const Element = React.createClass({`}</Code>
                    <Code align="left" fade indent={1}>{`render: function() {`}</Code>
                    <Code align="left" fade indent={2}>return React.createElement('div');</Code>
                    <Code align="left" fade indent={1}>}</Code>
                    <Code align="left">};</Code>
                    </div>
                </Step>
                <Step index={2} exact>
                    <div>
                    <Code align="left" fade>{`const Element = React.createClass({`}</Code>
                    <Code align="left" indent={1}>{`render: function() {`}</Code>
                    <Code align="left" fade indent={2}>return React.createElement('div');</Code>
                    <Code align="left" indent={1}>}</Code>
                    <Code align="left" fade>};</Code>
                    </div>
                </Step>
                <Step index={3} exact>
                    <div>
                    <Code align="left" fade>{`const Element = React.createClass({`}</Code>
                    <Code align="left" fade indent={1}>{`render: function() {`}</Code>
                    <Code align="left"  indent={2}>return React.createElement('div');</Code>
                    <Code align="left" fade indent={1}>}</Code>
                    <Code align="left" fade>};</Code>
                    </div>
                </Step>
                <Step index={4} exact>
                    <div>
                    <Code align="left">{`const Element = React.createClass({`}</Code>
                    <Code align="left" indent={1}>{`render: function() {`}</Code>
                    <Code align="left" indent={2}>return React.createElement('div');</Code>
                    <Code align="left" indent={1}>}</Code>
                    <Code align="left">};</Code>
                    </div>
                </Step>
                <Step index={5} exact>
                    <div>
                    <Code align="left">{`const Element = React.createClass({`}</Code>
                    <Code align="left" indent={1}>{`render: function() {`}</Code>
                    <Code align="left" indent={2}>return React.DOM.div();</Code>
                    <Code align="left" indent={1}>}</Code>
                    <Code align="left">};</Code>
                    </div>
                </Step>
            </div>
    </ImageSlide>
);

slide.title = 'React Component';

export default slide;