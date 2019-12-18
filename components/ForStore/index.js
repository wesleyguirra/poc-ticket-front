import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Typography, Grid, Button} from '@material-ui/core';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import './styles.css';

const SectionContainer = styled.section`
  position: relative;
  padding-top: 50px;
  background-color: #422863;
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

const SectionImage = styled.img`
  z-index: 1;
`;

const SectionImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const ColoredBg = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  height: 100%;
  border-top-left-radius: 250px;
  border-top-right-radius: 250px;
  background-color: ${(props) => props.color};
`;

export default function ForStore() {

  return (
    <React.Fragment>
      <SectionContainer>
        <Grid component="div" container>
          <Grid item xs={7}>
            <SectionImageContainer>
              <SectionImage src="/assets/ticket-para-su-credescimento.png" />
              <ColoredBg right color="#a1d6ca" />
            </SectionImageContainer>
          </Grid>
          <Grid component="div" item xs={5}>
            <SectionTitle>PARA SEU ESTABELECIMENTO</SectionTitle>
            <SectionSummary>Aceitar Ticket em seu estabelecimento traz mais fluxo de caixa para você</SectionSummary>
            <SectionParagraph>
              Quem faz parte da rede credenciada Ticket ganha mais: mais clientes, mais visibilidade e mais faturamento..
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
        </Grid>
      </SectionContainer>
    </React.Fragment>
  );
}
