import {Button, TextField} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components';
import fetch from '../../pages'

const CustomToolbar = styled(Toolbar)`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

const MenuContainer = styled.div``;

const MenuLink = styled.a`
  margin-left: 15px;
  margin-right: 15px;
  color: #000 !important;
`;

const MenuButton = styled(Button)`
  height: 44px;
  border-radius: 22px !important;
  font-size: 12px !important;
  padding-left: 20px !important;
  padding-right: 20px !important;
  min-width: 200px !important;
`;

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Header = ({ menus }) => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <Grid component="div" container>
        <TextField
          placeholder='O que você procura'
        />
      </Grid>
      <AppBar position="static" elevation={1}>
        <CustomToolbar style={{ backgroundColor: '#fff', justifyContent: 'space-between' }}>
          <img src="/assets/logo.png" alt="" style={{ height: 55 }}/>
          <MenuContainer>
            {menus.filter(({Nivel}) => Nivel === 1).map(({ Titulo, Url }) => <MenuLink href={Url}>{Titulo}</MenuLink>)}
            <MenuButton variant="contained" color="primary">Simule e Compre</MenuButton>
          </MenuContainer>
        </CustomToolbar>
      </AppBar>
    </div>
  );
}

export default Header;
