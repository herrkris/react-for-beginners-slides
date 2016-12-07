import React from 'react';
import styled from 'styled-components';

const GifBlurred = styled.div`
    display: flex;
    flex-direction: row; 
    background-size: cover;
    filter: blur(40px);
    height: 100vh;
    width: 100vw;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
`;

const Gif = styled.div`
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const GifSlide = ({ src, style }) => (
    <div>
        <GifBlurred style={{ backgroundImage: `url(${src})` }} />
        <Gif style={{ backgroundImage: `url(${src})` }} />
    </div>
);

export default GifSlide;