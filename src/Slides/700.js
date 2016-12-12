import React, { Component } from 'react';
import { Step } from 'react-presents';
import ImageSlide from '../components/ImageSlide';
import Code from '../components/BigCode';
import InputCode from '../components/InputCode';

window.Name = ({ value }) => React.DOM.p(null, value);

class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ''
        };
    }

    handleChange = (ev) => {
        this.setState({ code: ev.currentTarget.value });
    }

    render() {
        const { code  } = this.state;
        let value;
        try {
            const expression = eval(this.state.code.slice(0, -1));
            if (expression) {
                if (expression.props.value) {
                    value = expression.props.value;
                }
            }
        } catch(e) {
            console.log(e)
        }

        return (
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
                            <Code align="left">{`const Name = React.createClass({`}</Code>
                                <Code align="left" indent={1}>{`render: function() {`}</Code>
                                    <Code align="left" indent={2}>{`return React.DOM.p(null, this.props.value);`}</Code>
                                    <Code align="left" indent={1}>{`}`}</Code>
                                <Code align="left">{`};`}</Code>
                        </div>
                    </Step>
                    <Step index={1} exact>
                        <div>
                            <Code align="left">{`const Name = React.createClass({`}</Code>
                                <Code align="left" fade indent={1}>{`render: function() {`}</Code>
                                    <Code align="left" fade indent={2}>{`return React.DOM.p(null, this.props.value);`}</Code>
                                    <Code align="left" fade indent={1}>{`}`}</Code>
                                <Code align="left">{`};`}</Code>
                        </div>
                    </Step>
                    <Step index={2} exact>
                        <div>
                            <Code align="left" fade>{`const Name = React.createClass({`}</Code>
                                <Code align="left" indent={1}>{`render: function() {`}</Code>
                                    <Code align="left" fade indent={2}>{`return React.DOM.p(null, this.props.value);`}</Code>
                                    <Code align="left" indent={1}>{`}`}</Code>
                                <Code align="left" fade>{`};`}</Code>
                        </div>
                    </Step>
                    <Step index={3} exact>
                        <div>
                            <Code align="left" fade>{`const Name = React.createClass({`}</Code>
                                <Code align="left" fade indent={1}>{`render: function() {`}</Code>
                                    <Code align="left" indent={2}>{`return React.DOM.p(null, this.props.value);`}</Code>
                                    <Code align="left" fade indent={1}>{`}`}</Code>
                                <Code align="left" fade>{`};`}</Code>
                        </div>
                    </Step>
                    <Step index={4} exact>
                        <div>
                            <Code align="left">{`const Name = React.createClass({`}</Code>
                                <Code align="left" indent={1}>{`render: function() {`}</Code>
                                    <Code align="left" indent={2}>{`return React.DOM.p(null, this.props.value);`}</Code>
                                    <Code align="left" indent={1}>{`}`}</Code>
                                <Code align="left">{`};`}</Code>
                        </div>
                    </Step>
                    <Step index={5} exact>
                        <div>
                            <Code align="left" fade={!!value}>{`ReactDOM.render(`}</Code>
                            <InputCode
                                align="left"
                                indent={1}
                                placeholder={`// createElement`}
                                onChange={this.handleChange}
                                value={this.state.code}
                            />
                            <Code align="left" fade={!!value} indent={1}>{`document.querySelector('#app')`}</Code>
                            <Code align="left" fade={!!value}>{`);`}</Code>
                            {value && (
                                <div style={{ marginTop: '10vh' }}>
                                    <Code align="left">{`<p>${value}</p>`}</Code>
                                </div>
                            )}
                        </div>
                    </Step>
                </div>
            </ImageSlide>
        );
    }
}

Slide.title = 'React Component';

export default Slide;