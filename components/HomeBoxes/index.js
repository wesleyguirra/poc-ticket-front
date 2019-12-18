import {Typography} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import React from 'react';
import styled from 'styled-components';
import './styles.css';

const HomeBoxContainer = styled(Paper)`
  padding: 20px;
  min-height: 170px;
`;

const HomeBoxHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
`;

const HomeBoxIcon = styled.img`
  width: 41px;
  margin: 0 15px 0 0;
`
const HomeBoxTitle = styled(Typography).attrs({ variant: 'h5'})`
`
const HomeBoxLink = styled.a`
  display: block;
`;

export default function HomeBoxes() {
    return (
        <React.Fragment>
            <div style={{ position: 'relative', marginTop: '-200px', zIndex: 2 }}>
              <Grid container justify="center" spacing={3}>
                <Grid item xs={3}>
                  <HomeBoxContainer>
                    <HomeBoxHeaderContainer>
                      <HomeBoxIcon src="/assets/homebox_icon.png"/>
                      <HomeBoxTitle>Para você,<br/> <b>usuário:</b></HomeBoxTitle>
                    </HomeBoxHeaderContainer>
                    <HomeBoxLink>Consultar saldo</HomeBoxLink>
                    <HomeBoxLink>Veja todos os serviços</HomeBoxLink>
                  </HomeBoxContainer>
                </Grid>
                <Grid item xs={3}>
                  <HomeBoxContainer>
                    <HomeBoxHeaderContainer>
                      <HomeBoxIcon src="/assets/homebox_icon.png"/>
                      <HomeBoxTitle>Para sua <br/> <b>empresa</b></HomeBoxTitle>
                    </HomeBoxHeaderContainer>
                    <HomeBoxLink>Faça uma simulação</HomeBoxLink>
                    <HomeBoxLink>Contrate agora</HomeBoxLink>
                    <HomeBoxLink>Acesse seus pedidos</HomeBoxLink>
                    <HomeBoxLink>Veja todos os produtos</HomeBoxLink>
                  </HomeBoxContainer>
                </Grid>
                <Grid item xs={3}>
                  <HomeBoxContainer>
                    <HomeBoxHeaderContainer>
                      <HomeBoxIcon src="/assets/homebox_icon.png"/>
                      <HomeBoxTitle>Para seu <br/> <b>estabelecimento</b></HomeBoxTitle>
                    </HomeBoxHeaderContainer>
                    <HomeBoxLink>Aceite Ticket na sua máquina</HomeBoxLink>
                    <HomeBoxLink>Antecipe seu reembolso</HomeBoxLink>
                    <HomeBoxLink>Atualize seus dados</HomeBoxLink>
                    <HomeBoxLink>Veja todos os serviços</HomeBoxLink>
                  </HomeBoxContainer>
                </Grid>
              </Grid>
            </div>
        </React.Fragment>
    );
}
