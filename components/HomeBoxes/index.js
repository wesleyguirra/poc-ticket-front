import React, { Fragment } from 'react';
import styled from 'styled-components';

import {Typography, Grid,Paper} from '@material-ui/core'

const HomeBoxContainer = styled(Paper)`
  padding: 20px;
  min-height: 200px;
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
  color: ${(props) => `#${props.txtColor}`} !important;
`
const HomeBoxLink = styled.a`
  color: #162056;
  text-decoration: underline;
  font-size: 17px ;
  display: block;
  margin: 10px;

  &:before {  
    content: "> ";
    font-family: FontAwesome;
    margin-right: 5px;
    color: inherit !important;
    display: inline-block;
    font-size: 10px;
    vertical-align: middle;
    position: relative;
    top: -1px;
    font-weight: bold;
  }
`;

import {CMS_URL} from '../../consts';

const boxesImageUrl = ({ url }) => `${CMS_URL}${url}`


export default function HomeBoxes ({ homeBoxes }) {  

  console.log(homeBoxes);

  return (
    <Fragment>     
      <div style={{ position: 'relative', marginTop: '-200px', zIndex: 2 }}>
          <Grid container justify="center" spacing={3}>
            {homeBoxes.map(({ id, Title: title, Color: color, Icone: icone, links }) => (
                  <Grid item xs={3} key={id}>
                    <HomeBoxContainer>
                      <HomeBoxHeaderContainer>
                        <HomeBoxIcon src={boxesImageUrl(icone)}/>
                        <HomeBoxTitle txtColor={color} >{title}</HomeBoxTitle>
                      </HomeBoxHeaderContainer>                    
                      {links.map(({Rotulo: rotulo, Url: url}) => (   
                          <a href={url}><HomeBoxLink>{rotulo}</HomeBoxLink></a>
                      ))}                                    
                    </HomeBoxContainer>
                  </Grid>        
            ))}
          </Grid>
        </div>
    </Fragment>              
  );
}

