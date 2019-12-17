import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { TextField } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

// import './styles.js';

export default function SearchBar() {

  return (
    <React.Fragment>
      <div className='container'>
        <TextField
          placeholder='O que você procura'
          classes={{
            // root: classes.root, // class name, e.g. `classes-nesting-root-x`
            // label: classes.label, // class name, e.g. `classes-nesting-label-x`
          }}
        />
      </div>
    </React.Fragment>
  );
}
