import React, { Component } from 'react';
import ImageSlide from '../components/ImageSlide';
import GifSlide from '../components/GifSlide';
import Code from '../components/BigCode';
import InputCode from '../components/InputCode';

class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: "React.createElement('div'),",
            focus: false,
        }
    }

    handleCodeChange = (ev) => {
        this.setState({
            code: ev.currentTarget.value,
        });
    }

    handleFocus = () => {
        this.setState({ focus: true });
    }

    handleBlur = () => {
        this.setState({ focus: false });
    }

    render() {
        const { code  } = this.state;
        let src;
        try {
            const expression = eval(this.state.code.slice(0, -1));
            if (expression) {
               if (expression.props.src) {
                   src = expression.props.src;
               }
            }
        } catch(e) {
            console.log(e)
        }

        const children = (
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}>
                <Code align="left" fade={this.state.focus}>ReactDOM.render(</Code>
                <div style={{ marginLeft: '4vw'}}>
                    <InputCode
                        align="left"
                        value={code}
                        onChange={this.handleCodeChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                    />
                    <Code align="left" fade={this.state.focus}>document.querySelector('#app')</Code>
                </div>
                <Code align="left" fade={this.state.focus}>)</Code>
            </div>
        );

        return (
            <ImageSlide style={{
                backgroundImage: 'url(images/react-elements.jpg)'
            }} code>
                {children}
                {src && (
                    <div style={{ position: 'relative', zIndex: '-1' }}>
                        <GifSlide src={`images/${src}`} />
                    </div>
                )}
            </ImageSlide>
        )
    }
}

Slide.title = 'React DOM';

export default Slide;