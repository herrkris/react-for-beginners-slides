import React, {PropTypes} from 'react';
import styled from 'styled-components';

const ImageSlideWrapper = styled.div`
    background-size: cover;
    height: 100vh;
    width: 100vw;
    position: relative;
    
    &.no-overlay::after {
        background-color: rgba(192, 142, 72, 0.1);    
    }
    
    &::after {
        content: '';
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(192, 142, 72, .3); 
    }
`;

const ImageSlideContent = styled.div`
    position: relative;
    z-index: 2;
    height: 100vh;
    width: 100vw;
`;

const ImageSlide = ({ children, style, hideColoredOverlay }) => (
    <ImageSlideWrapper style={style} className={hideColoredOverlay && "no-overlay"}>
        <ImageSlideContent>
            {children}
        </ImageSlideContent>
    </ImageSlideWrapper>
);

ImageSlide.propTypes = {
    hideColoredOverlay: PropTypes.bool
};

export default ImageSlide;