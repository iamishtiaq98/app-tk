import React from 'react';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import './AboutSection.css';

function AboutSection() {
    return (
        <>
            <Paper className='banner'>
                <Box className='overlay'></Box>
                <Box>
                    <Typography variant="h4" className='heading-title'>About Us</Typography>
                </Box>
            </Paper>
            <Box mb={2} px={{md:10, xs:2 }} py={6} className='about'>
                <Box className="blue__block">
                    <Typography variant="h2" className="mantine-5ddqmx h2">
                        TkDownloader.com
                    </Typography>
                    <Typography px={1} >Tiktok Video Downloader</Typography>
                    <Typography px={1}>
                        A web app that downloads TikTok videos without the annoying TikTok watermark.
                    </Typography>
                    <Box p={1}>
                        <Typography variant="h5" >
                            Why you should use this kind of service?
                        </Typography>
                        <Typography px={2}>
                            Use this service to repost TikTok videos on other social media sites without the annoying watermark.
                        </Typography>
                        <div className="mantine-10n1qni"></div>
                    </Box>
                    <Box p={1}>
                        <Typography variant="h5" >
                            How to use the service?
                        </Typography>
                        <Typography px={2}>
                            Just paste TikTok video link in the textbox and click getVideo, wait for it to load the video info and
                            download button.
                        </Typography>
                    </Box>
                    <Box p={1}>
                        <Typography variant="h5" >
                            <strong> Tech used </strong>
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckIcon />
                                </ListItemIcon>
                                <ListItemText primary="React.js" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckIcon />
                                </ListItemIcon>
                                <ListItemText primary="Mantine (a frontend components framework)" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckIcon />
                                </ListItemIcon>
                                <ListItemText primary="Tiktokwm Api" />
                            </ListItem>
                        </List>
                        <div className="mantine-1q1idfv"></div>
                        <Typography variant="h5" >
                            <strong> Developed by </strong>
                        </Typography>
                        <Typography px={2}>Ishtiaq Amjad</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default AboutSection;
