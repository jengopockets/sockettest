import React from 'react';
import { AppBar, Typography, Toolbar, IconButton, CardMedia } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import { Image } from '@mui/icons-material';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        marginBottom: '2rem',
        background:'linear-gradient(to top, #780206, #061161)'
    }
})
//background: 'linear-gradient(to top, #780206, #061161)'

export default function Header(){
    const classes = useStyles();
    return(
        <AppBar className={classes.root} position="static" image="../img/eternal_soldiers_mark.jpg">
            <Toolbar>
                <IconButton size="large" edge="start" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <CardMedia image="../img/eternal_soldiers_mark.jpg"/>
                {/* <Typography variant="h3" components="div" sx={{ flexGrow: 1 }} position="center">
                    Eternal Soldiers
                </Typography> */}
            </Toolbar>
        </AppBar>
    );
}