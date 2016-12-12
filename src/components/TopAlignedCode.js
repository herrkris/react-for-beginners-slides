import React from 'react';
import Code from '../components/BigCode';
import styled from 'styled-components';

const CenteredCode = styled(Code)`
    position: absolute;
    top: 10vh;
    left: 50%;
    width: 80vw;
    background: rgba(255,255,255, 0.3);
    transform: translateX(-50%);
    margin: 0;
    font-size: 2.2vw;
    
    pre {
        margin: 10px 15px;
    }
`;

const TopAlignedCode = ({children}) => (
    <CenteredCode align="left">
        <pre>
            {children}
        </pre>
    </CenteredCode>
);
export default TopAlignedCode;