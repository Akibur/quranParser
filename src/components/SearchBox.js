import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Paper, Container} from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
 import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400
    },
    input: {
        marginLeft: 8,
        flex: 1
    },
    iconButton: {
        padding: 10
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4
    }
});

export default function SearchBox() {
    const classes = useStyles();

    return (
        <Container style={{backgroundColor:"black",padding:"70px",paddingRight:"auto",paddingLeft:"auto"}} align="center" maxWidth="md">
            <Paper
            elevation="5"
                style={{
                position: "flex",
                align: "center",
                margin:"20px"
            }}
                className={classes.root}>
             
                <InputBase
                    className={classes.input}
                    placeholder="Search For a word"
                    inputProps={{
                    'aria-label': 'search google maps'
                }}/>
                <IconButton className={classes.iconButton} aria-label="search">
                    <SearchIcon/>
                </IconButton>
                <Divider className={classes.divider}/>

            </Paper>
        </Container>

    );
}