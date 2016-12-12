import styled from 'styled-components';
import AutoInput from 'react-input-autosize';

const InputCode = styled(AutoInput)`
    margin-left: ${props => props.indent ? `${props.indent * 3}vw` : 0};
    input {
        background-color: transparent;
        font-size: 3.3vw;
        font-family: monospace;
        font-weight: bold;
        color: #002452;
        display: block;
        margin-bottom: 5vh;
        text-align: ${props => props.align ? props.align : 'center'};
        border: 0;
        outline: 0;
        
        &::-webkit-input-placeholder {
            color: rgba(0, 36, 82, .3);
        }
    }
`;

export default InputCode;