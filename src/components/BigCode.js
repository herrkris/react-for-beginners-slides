import styled from 'styled-components';

const BigCode = styled.code`
    background-color: transparent;
    font-size: 3.3vw;
    font-family: monospace;
    font-weight: bold;
    color: ${props => props.fade ? 'rgba(0, 36, 82, .3)' : '#002452'};
    display: block;
    margin-bottom: 3vh;
    text-align: ${props => props.align ? props.align : 'center'};
    transition: color .125s ease-in-out;
`;

export default BigCode;