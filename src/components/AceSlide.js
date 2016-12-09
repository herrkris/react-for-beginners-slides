import React, { PropTypes } from 'react';
import styled from 'styled-components';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

const Babel = require('../../node_modules/babel-standalone/babel.min.js');

const AceSlideStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const AceEditorWrapper = styled.div`
    width: 50%;
    flex: 1;
    align-items: stretch;
`;

const StyledAceEditor = styled(AceEditor)`
    width: 100%;
    height: 80vh;
    border: 2px solid #ccc;
`;

const AceHeadline = styled.h2`
    display: block;
    width: 100%;
    padding-left: 23px;
    margin-bottom: 2px;
`;

const MainHeadline = styled.h1`
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 18px;
`;

class AceSlide extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            outputCode: props.outputCode,
            inputCode: props.inputCode
        };
    }

    aceOnChange(newValue) {
        try {
            let transformed = Babel.transform(newValue, {
                presets: [
                    'es2015',
                    'es2015-loose',
                    'es2016',
                    'es2017',
                    'latest',
                    'react',
                    'stage-0',
                    'stage-1',
                    'stage-2',
                    'stage-3'
                ]
            });

            this.setState({
                outputCode: transformed.code,
                inputCode: newValue
            })
        } catch (e) {
        }
    }

    componentDidMount() {
        if(this.props.transformOnMount) {
            this.aceOnChange(this.props.inputCode);
        }
    }

    render() {
        return (
            <AceSlideStyled>
                <MainHeadline>
                    {this.props.mainHeadline}
                </MainHeadline>
                <AceEditorWrapper>
                    <AceHeadline>
                        {this.props.inputHeadline}
                    </AceHeadline>
                    <StyledAceEditor
                        mode="javascript"
                        theme="monokai"
                        onChange={(v) => this.aceOnChange(v)}
                        value={this.state.inputCode}
                        width=""
                        height=""
                    />
                </AceEditorWrapper>
                {this.props.showOutput &&
                    <AceEditorWrapper>
                        <AceHeadline>
                            {this.props.outputHeadline}
                        </AceHeadline>
                        <StyledAceEditor
                            mode="javascript"
                            theme="monokai"
                            readOnly={true}
                            value={this.state.outputCode}
                            width=""
                            height=""
                        />
                    </AceEditorWrapper>
                }
            </AceSlideStyled>
        )
    }
}

AceSlide.propTypes = {
    inputHeadline: PropTypes.string,
    outputHeadline: PropTypes.string,
    mainHeadline: PropTypes.string.isRequired,
    inputCode: PropTypes.string,
    outputCode: PropTypes.string,
    transformOnMount: PropTypes.boolean,
    showOutput: PropTypes.boolean
};

AceSlide.defaultProps = {
    inputHeadline: 'Input',
    outputHeadline: 'Output',
    mainHeadline: 'MainHeadline',
    inputCode: '',
    outputCode: '',
    transformOnMount: false,
    showOutput: true

};

export default AceSlide;