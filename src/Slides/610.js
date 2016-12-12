import React, { Component } from 'react';
import ImageSlide from '../components/ImageSlide';
import Code from '../components/BigCode';
import InputCode from '../components/InputCode';

class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ""
        }
    }

    handleCodeChange = (ev) => {
        this.setState({
            code: ev.currentTarget.value,
        });
    }

    render() {
        const { code } = this.state;
        let output = '';
        try {
            const expression = eval(this.state.code);
            if (expression) {
                const element = { ...expression };
                delete element._owner;
                delete element.$$typeof;
                delete element._store;
                delete element.key;
                delete element.ref;

                if (!Object.keys(element.props).length) {
                    delete element.props;
                }
                output = JSON.stringify(element);
            }
        } catch(e) {}
        return (
            <ImageSlide style={{
                backgroundImage: `url(images/react-elements.jpg)`
            }} code>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}>
                    <InputCode
                        value={code}
                        onChange={this.handleCodeChange}
                        placeholder="React.createElement('div')"
                    />
                    {output !== '' && code !== '' && (
                        <div>
                            <Code>
                                {output}
                            </Code>
                        </div>
                    )}
                </div>
            </ImageSlide>
        );
    }
}

Slide.title = 'React Element example';

export default Slide;