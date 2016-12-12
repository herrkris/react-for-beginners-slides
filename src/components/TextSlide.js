import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: right;
  display: inline-block;
`;

export const Headline = styled.h1`
  font-size: 11vw;
  font-family: Roboto;
  color: ${props => props.color ? props.color : '#B74E00'};
  margin: 0;
  text-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
 `;

export const Subline = styled.h2`
  font-size: 10vw;
  font-family: Mathlete;
  color: ${props => props.color ? props.color : '#002452'};
  text-transform: uppercase;
  margin-top: -6vw;
  text-shadow: 3px 3px 7px rgba(0, 0, 0, 0.6);
  text-align: ${props => props.align ? props.align : null};
`;

const TextSlide = ({ headline, subline, color }) => (
  <Wrapper>
    <Headline color={color}>{headline}</Headline>
    <Subline color={color}>{subline}</Subline>
  </Wrapper>
);

export default TextSlide;
