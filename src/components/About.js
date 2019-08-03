import React from 'react'
import {Typography, Container, Paper} from '@material-ui/core'
import ReactPlayer from 'react-player'
 
const containerStyle = {
    padding:"40px",
    margin:"25px"
 }

 
const About = () => {
    return (
        <div>
            <Container   align="center" maxWidth="md">
                <Paper style={containerStyle}  m={0} p={20} className="br3">
                    <Typography align="center" variant="h4" component="h3">
                        Quran Word Search 
                    </Typography>
                    <Typography style={{margin:"10px"}} component="p">
                        This application is built to verify some of the patterns in the quran with regards to word count. Some of those patterns are outlined in the video below
                    </Typography>
                    <ReactPlayer width="auto" height="400px" url='https://www.youtube.com/watch?v=B3QHYELlo1s'   />
                </Paper>

                <Paper style={containerStyle}  m={0} p={20} className="br3">
                    <Typography align="center" variant="h4" component="h3">
                        Quran Word Search 
                    </Typography>
                    <Typography style={{margin:"10px"}} component="p">
                        This application is built to verify some of the patterns in the quran with regards to word count. Some of those patterns are outlined in the video below
                    </Typography>
                </Paper>
            </Container>

        </div>
    )
}

export default About
