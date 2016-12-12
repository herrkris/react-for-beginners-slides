import React, {PropTypes} from 'react';
import styled from 'styled-components';

const ImageSlideWrapper = styled.div`
    background-size: cover;
    height: 100vh;
    width: 100vw;
    position: relative;
    background-position: center;
    
    &::after {
        content: '';
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(192, 142, 72, ${props => (
            props.code ? '.9' : props.noOverlay ? '.1' : '.5' 
        )}); 
    }
`;

const ImageSlideContent = styled.div`
    position: relative;
    z-index: 2;
    height: 100vh;
    width: 100vw;
`;

const ImageSlide = ({ children, style, hideColoredOverlay, code }) => (
    <ImageSlideWrapper style={style} code={code} noOverlay={hideColoredOverlay}>
        <ImageSlideContent>
            {children}
        </ImageSlideContent>
    </ImageSlideWrapper>
);

ImageSlide.propTypes = {
    hideColoredOverlay: PropTypes.bool,
    code: PropTypes.bool,
};

ImageSlide.defaultProps = {
    code: false,
};

export default ImageSlide;