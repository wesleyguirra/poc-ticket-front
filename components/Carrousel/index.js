import {Button, Typography} from '@material-ui/core'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Markdown from 'react-markdown';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './styles.css';
import {CMS_URL} from '../../consts'

const CarouselContainer = styled.div`
  background-color: ${(props) => `#${props.bgColor}`};
  color: ${(props) => `#${props.txtColor}`};
  text-align: initial;
  padding-top: 30px;
  padding-bottom: 130px;
  flex: 1;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  z-index: -1 !important;
`;

const CarouselImage = styled.img``;
const CarouselContent = styled.div`
  margin: 0 40px;  
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const CarouselTitle = styled(Typography).attrs({ variant: "h3"})`
  text-align: left;
  font-weight: 700 !important;
`;
const CarouselSummary = styled(Markdown)`
  margin: 20px 0 !important;
  font-size: 20px;
`;
const CarouselCTA = styled(Button)`
  height: 44px;
  border-radius: 22px !important;
  font-size: 12px !important;
  padding-left: 20px !important;
  padding-right: 20px !important;
  min-width: 200px !important;
  color: ${(props) => `#${props.txtColor}`} !important;
  background-color: ${(props) => `#${props.bgColor}`} !important;
`;

const evaluateImageUrl = ({ url }) => `${CMS_URL}${url}`

export default ({ sliders }) => (
  <React.Fragment>
      <Carousel
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        interval={3000}
        emulateTouch
        autoPlay
        infiniteLoop
      >
          {sliders.map(({ id, Image, Title, Subtitle, BackgroundColor, TextColor, button }) => (
            <CarouselContainer key={id} bgColor={BackgroundColor} txtColor={TextColor}>
                <CarouselImage src={evaluateImageUrl(Image)} />
                <CarouselContent>
                    <CarouselTitle>{Title}</CarouselTitle>
                    <CarouselSummary source={Subtitle} />
                    <CarouselCTA variant="contained" txtColor={BackgroundColor} bgColor={TextColor}>{button.Rotulo}</CarouselCTA>
                </CarouselContent>
            </CarouselContainer>
          ))}
      </Carousel>
  </React.Fragment>
)
