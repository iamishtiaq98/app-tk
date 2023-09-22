import React from 'react';
import { Box, Grid, Typography, ListItemText } from '@mui/material';
import fileimg from '../fonts/assets/endless.png';
import nwmimg from '../fonts/assets/no-watermark.png';
import audioimg from '../fonts/assets/audio.png';
import './HelpSection.css';



function HelpSection() {

    return (

        <Box className='tkroot'>
            <Grid container spacing={5} className='main-highlights' textAlign={'center'}>
                <Grid item lg={4} xs={12}>
                    <Box>
                        <img src={fileimg} alt='icon' /><br />
                        <Typography variant='h5'>Unrestricted</Typography>
                        <Typography className='content'>Save an unlimited number of videos without any limitations or restrictions.</Typography>
                    </Box>
                </Grid>
                <Grid item lg={4} xs={12}>
                    <Box>
                        <img src={nwmimg} alt='icon' /><br />
                        <Typography variant='h5'>No Watermark!</Typography>
                        <Typography className='content'>TikTok video download without watermark, remove a TT logo.</Typography>
                    </Box>
                </Grid>
                <Grid item lg={4} xs={12}> <Box>
                    <img src={audioimg} alt='icon' /><br />
                    <Typography variant='h5'>MP4 and MP3 Options</Typography>
                    <Typography className='content'>Preserve your videos in high-definition quality in the MP4 file format, or convert them into MP3 audio files.</Typography>
                </Box>
                </Grid>
            </Grid>
            <Box className="blue__block">
                <Typography variant="h3">How to download TikTok video without watermark?</Typography>
                <ol type='1'>
                    <li className='a1'>
                        <ListItemText>
                            <strong>Go To TT</strong> - Discover a video you'd like to save on your mobile device using the TikTok app.
                        </ListItemText>
                    </li>
                    <li className='a1'>
                        <ListItemText>
                            <strong>Copy the Video Link:</strong>
                            <ul type="i">
                                <li> Tap the "Share" icon (usually represented as an arrow) located at the top of the chosen video.</li>
                                <li>Select "Copy link" from the sharing options.</li>
                            </ul>
                        </ListItemText>
                    </li>
                    <li className='a1'>
                        <ListItemText>
                            <strong>Download TikTok Video:</strong>
                            <ul type="i">
                                <li>Return to the TK-Downloader video download service.</li>
                                <li>Paste the copied link into the text field on the page.</li>
                                <li>Tap the "Serach" button to initiate the download process.</li>
                            </ul>

                        </ListItemText>
                    </li>
                </ol>
            </Box>
        </Box >
    );
}


export default HelpSection;
