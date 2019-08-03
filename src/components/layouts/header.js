import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>

                <Typography style={{fontWeight:'bold'}} variant="h6">
                    Quran Parser
                    <sub style={{fontSize:'12px'}} >beta</sub>
                </Typography>

            </Toolbar>
        </AppBar>
    )
}
