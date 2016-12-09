import React, {PropTypes} from 'react';
import styled from 'styled-components';

import ImageSlide from './ImageSlide'

const StyledMainSlide = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`;

const LargeHeadline = styled.h1`
    font-style: italic;
    font-size: 120px;
    line-height: 100px;
    position: absolute;
`;

const OrangeHeadline = styled(LargeHeadline)`
    color: #b54f15;
    bottom: 25%;
    left: 30%;
    text-align: right;
    text-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
`;

const BlueHeadline = styled(LargeHeadline)`
    color: #022550;
    bottom: 15%;
    left: 14%;
    text-shadow: 3px 3px 7px rgba(0, 0, 0, 0.6);
`;

const WhiteHeadline = styled.h3`
    color: white;
    position: absolute;
    right: 50px;
    bottom: 10px;
    font-size: 80px;
    letter-spacing: 10px;
`;

const AceSlide = (props, {style}) => (
    <StyledMainSlide>

        <ImageSlide style={{backgroundImage: `url(${props.backgroundImage})`}}>
            {props.orangeHeadline && <OrangeHeadline>{props.orangeHeadline}</OrangeHeadline>}
            {props.blueHeadline && <BlueHeadline>{props.blueHeadline}</BlueHeadline>}
            {props.whiteHeadline && <WhiteHeadline>{props.whiteHeadline}</WhiteHeadline>}
        </ImageSlide>

    </StyledMainSlide>
);

AceSlide.propTypes = {
    orangeHeadline: PropTypes.string,
    blueHeadline: PropTypes.string,
    whiteHeadline: PropTypes.string,
    backgroundImage: PropTypes.string.isRequired
};

export default AceSlide;