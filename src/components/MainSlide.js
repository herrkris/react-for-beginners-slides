import React, {PropTypes} from 'react';
import styled from 'styled-components';

import ImageSlide from './ImageSlide';
import TextSlide from './TextSlide';

const StyledMainSlide = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`;

const WhiteHeadline = styled.h3`
    font-size: 9vw;
    font-family: Roboto;
    color: white;
    position: absolute;
    right: 90px;
    bottom: 10px;
`;

const MainSlide = (props, {style}) => (
    <StyledMainSlide>

        <ImageSlide
            style={{backgroundImage: `url(${props.backgroundImage})`}}
            hideColoredOverlay={props.noColoredImageOverlay}
        >
            <div style={{
              position: 'absolute',
              bottom: '6vh',
              left: '50%',
              transform: 'translateX(-50%)'
            }}>
                <TextSlide headline={props.orangeHeadline} subline={props.blueHeadline} />
            </div>

            {props.whiteHeadline && <WhiteHeadline>{props.whiteHeadline}</WhiteHeadline>}
        </ImageSlide>

    </StyledMainSlide>
);

MainSlide.propTypes = {
    orangeHeadline: PropTypes.string,
    blueHeadline: PropTypes.string,
    whiteHeadline: PropTypes.string,
    backgroundImage: PropTypes.string.isRequired,
    noColoredImageOverlay: PropTypes.bool
};

export default MainSlide;