import React from 'react';
import styled from 'styled-components';

const ImageSlideWrapper = styled.div`
    background-size: cover;
    height: 100vh;
    width: 100vw;
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(192, 142, 72, .5); 
    }
`;

const ImageSlideContent = styled.div`
    position: relative;
    z-index: 2;
    height: 100vh;
    width: 100vw;
`;

const ImageSlide = ({ children, style }) => (
    <ImageSlideWrapper style={style}>
        <ImageSlideContent>
            {children}
        </ImageSlideContent>
    </ImageSlideWrapper>
);

export default ImageSlide;