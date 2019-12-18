import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Typography, Grid, Button} from '@material-ui/core';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import './styles.css';

const SectionContainer = styled.section`
  position: relative;
  padding-top: 50px;
`

const SectionTitle = styled(Typography).attrs({ variant: 'h6' })`
  border-bottom-color: #2f86c8;
  color: #2f86c8;
  text-transform: uppercase;
  padding-bottom: 5px;
`;

const SectionSummary = styled(Typography).attrs({ variant: 'h4' })``;
const SectionParagraph = styled(Typography).attrs({ variant: 'body1' })``;
const SectionLink = styled.a`
  display: block;
`
const SectionCTA = styled(Button)`
  height: 44px;
  border-radius: 22px !important;
  font-size: 12px !important;
  padding-left: 20px !important;
  padding-right: 20px !important;
  min-width: 200px !important;
  color: #422863 !important;
  background-color: #a1d6ca !important;
`;

const SectionImage = styled.img``;

const SectionImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const ColoredBg = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 64%;
  z-index: -2;
  border-top-left-radius: 250px;
  border-bottom-left-radius: 250px;
  background-color: ${(props) => props.color};
`;

export default function forCompany() {

    return (
        <React.Fragment>
            <SectionContainer>
              <Grid component="div" container>
                <Grid component="div" item xs={5}>
                  <SectionTitle>Para sua empresa</SectionTitle>
                  <SectionSummary>Vantagens de contratar o <b>benefício Ticket</b> para seus colaboradores</SectionSummary>
                  <SectionParagraph>
                    Economia, gestão de benefícios prática e fácil e uma gama de produtos para sua empresa oferecer aos seus colaboradores.
                    <br/>
                    <br/>
                    Conheça nossos produtos:
                  </SectionParagraph>
                  <Grid container>
                    <Grid item xs={6}>
                      <SectionLink>Ticket Alimentação</SectionLink>
                      <SectionLink>Ticket Plus</SectionLink>
                      <SectionLink>Ticket Transporte</SectionLink>
                      <SectionLink>Cartão RH</SectionLink>
                      <SectionLink>Presente Perfeito Kids</SectionLink>
                      <SectionLink>Ticket Saúde</SectionLink>
                    </Grid>
                    <Grid item xs={6}>
                      <SectionLink>Ticket Alimentação Natal</SectionLink>
                      <SectionLink>Ticket Restaurante</SectionLink>
                      <SectionLink>Ticket Cultura</SectionLink>
                      <SectionLink>Presente Perfeito</SectionLink>
                      <SectionLink>Duo Card</SectionLink>
                    </Grid>
                  </Grid>
                  <SectionCTA>Conhecer todos os produtos</SectionCTA>
                </Grid>
                <Grid item xs={7}>
                  <SectionImageContainer>
                    <SectionImage src="/assets/ticket-para-sua-empresa2.png" />
                    <ColoredBg right color="#2788d2" />
                  </SectionImageContainer>
                </Grid>
              </Grid>
            </SectionContainer>
        </React.Fragment>
    );
}
