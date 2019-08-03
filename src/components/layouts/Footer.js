import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'

export default function Footer() {
    return (
        <AppBar style={footer} position="static" align='center'>
            <Toolbar align='center'>

                <Typography align='center' variant="body1">
                    Developed by  
                    <a
                        style={{
                       
                        color: 'inherit',
                        textDecoration: 'none',
                        fontWeight: 'bold'
                    }}
                        target='_blank'
                        rel="noopener noreferrer"
                        href="https://akiburrahman.com">
                        Akibur Rahman</a>
                </Typography>

            </Toolbar>
        </AppBar>
    )
}

const footer = {
    position: 'relative',
    bottom: '0'
}