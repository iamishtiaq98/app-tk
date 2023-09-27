import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Paper, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './FAQSection.css';

function FAQSection() {
    return (
        <>
            <Paper className='banner'>
                <Box className='overlay'></Box>
                <Box>
                    <Typography variant="h4" className='heading-title'>Frequently Asked question's</Typography>
                </Box>
            </Paper>
            <Box mb={2} px={{ md: 10, xs: 2 }} py={6} className='faq'>
                <Box className="blue__block">
                    <Box className="accordion__container" itemScope itemtype="https://schema.org/FAQPage">
                        <Accordion className='acc'>
                            <AccordionSummary className='accordion' expandIcon={<ExpandMoreIcon />} aria-controls="panel-1a-content" id="panel-1a-header">
                                <Typography itemprop="name">
                                    Why am I encountering errors when attempting to download a video? <img src="/images/arrow.png" alt="" />
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className='panel'>
                                <Box itemScope itemtype="https://schema.org/Answer">
                                    <Typography itemprop="text">
                                        There could be several reasons for this issue:
                                    </Typography>
                                    <ul>
                                        <li><b>The video is private:</b> Unfortunately, we cannot handle private videos.</li>
                                        <li><b>The video is unavailable:</b> We are investigating this issue and will address it if possible.</li>
                                        <li><b>Ensure you're pasting the correct type of link:</b> we currently support downloads from pages containing a single video. If you paste a user profile link or something else, you may encounter an error.</li>
                                        <li><b>There might be an issue on our end:</b> If you're certain that your link is correct, please try downloading again.</li>
                                    </ul>
                                </Box>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className='acc'>
                            <AccordionSummary className='accordion' expandIcon={<ExpandMoreIcon />} aria-controls="panel-1a-content" id="panel-1a-header">
                                <Typography itemprop="name">
                                    Why is the video quality low, and can I download it in HD?<img src="/images/arrow.png" alt="" />
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className='panel'>
                                <Box itemScope itemtype="https://schema.org/Answer">
                                    <Typography itemprop="text">
                                        We do not alter the resolution or any other video parameters. We do not edit the videos you download.
                                        Our service simply provides a link to the original file hosted on TikTok servers.
                                    </Typography>
                                    <Typography itemprop="text">
                                        Essentially, we can't improve the quality because the original file itself may be of low quality.
                                    </Typography>

                                </Box>
                            </AccordionDetails>
                        </Accordion>


                        <Accordion className='acc'>
                            <AccordionSummary className='accordion' expandIcon={<ExpandMoreIcon />} aria-controls="panel-1a-content" id="panel-1a-header">
                                <Typography itemprop="name">
                                    It appears that my IP address has been banned. What should I do? <img src="/images/arrow.png" alt="" />
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className='panel' >
                                <Box itemScope itemtype="https://schema.org/Answer">
                                    <Typography itemprop="text">
                                        This could be an accidental occurrence.
                                        Please contact us at <a href='mailtoiamishtiaq@gmail.com'>tkdownloader@info.com</a> and provide the IP addresses that need to be unbanned.
                                    </Typography>

                                </Box>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className='acc'>
                            <AccordionSummary className='accordion' expandIcon={<ExpandMoreIcon />} aria-controls="panel-1a-content" id="panel-1a-header">
                                <Typography itemprop="name">
                                    Is it possible to add a feature for downloading multiple files at once? <img src="/images/arrow.png" alt="" />
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className='panel' >
                                <Box itemScope itemtype="https://schema.org/Answer">
                                    <Typography itemprop="text">
                                        Not at this time. We may revisit this question later.
                                    </Typography>

                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default FAQSection;
