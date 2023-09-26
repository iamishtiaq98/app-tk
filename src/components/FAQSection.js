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
            <Box mb={2} px={{md:10, xs:2 }} py={6} className='faq'>
                <Box className="blue__block">
                    <Box className="accordion__container" itemScope itemtype="https://schema.org/FAQPage">
                        <Accordion className='acc'>
                            <AccordionSummary className='accordion' expandIcon={<ExpandMoreIcon />} aria-controls="panel-1a-content" id="panel-1a-header">
                                <Typography itemprop="name">
                                    Why do I see an error when trying to download? <img src="/images/arrow.png" alt="" />
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className='panel'>
                                <Box itemScope itemtype="https://schema.org/Answer">
                                    <Typography itemprop="text">
                                        There are several reasons:
                                    </Typography>
                                    <ul>
                                        <li><b>video is private.</b> Sorry, we cannot deal with it.</li>
                                        <li><b>video is unavailable.</b> We are studying this case. We will fix it if possible.</li>
                                        <li><b>you paste the wrong type of links.</b> At this moment, we support downloading from pages which contain a single video. If you paste a user profile link or something else, you will see an error.</li>
                                        <li><b>something is wrong on our side.</b> If you are sure that your link is correct, try downloading one more time.</li>
                                    </ul>
                                </Box>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className='acc'>
                            <AccordionSummary className='accordion' expandIcon={<ExpandMoreIcon />} aria-controls="panel-1a-content" id="panel-1a-header">
                                <Typography itemprop="name">

                                    Video quality is low. Is there any way to download in HD?  <img src="/images/arrow.png" alt="" />
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className='panel'>
                                <Box itemScope itemtype="https://schema.org/Answer">
                                    <Typography itemprop="text">
                                        We do not change the resolution or any other parameters of the video.
                                        We do not edit videos which you download.
                                        We only provide a link to the original file which is located on TT servers.
                                    </Typography>
                                    <Typography itemprop="text">
                                        Basicly that means that we can't make better quality because the original file is in poor quality.
                                    </Typography>

                                </Box>
                            </AccordionDetails>
                        </Accordion>


                        <Accordion className='acc'>
                            <AccordionSummary className='accordion' expandIcon={<ExpandMoreIcon />} aria-controls="panel-1a-content" id="panel-1a-header">
                                <Typography itemprop="name">
                                    Seems like my IP got banned. What should I do?   <img src="/images/arrow.png" alt="" />
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className='panel' >
                                <Box itemScope itemtype="https://schema.org/Answer">
                                    <Typography itemprop="text">
                                        This could happen accidentally.
                                        Please, contact us at <a href='mailtoiamishtiaq@gmail.com'>tkdownloader@info.com</a> and provide the IPs which should be unbanned.
                                    </Typography>

                                </Box>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className='acc'>
                            <AccordionSummary className='accordion' expandIcon={<ExpandMoreIcon />} aria-controls="panel-1a-content" id="panel-1a-header">
                                <Typography itemprop="name">
                                    Can you add a feature of multiple files downloading?   <img src="/images/arrow.png" alt="" />
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className='panel' >
                                <Box itemScope itemtype="https://schema.org/Answer">
                                    <Typography itemprop="text">
                                        Not now. We will get back to this question later
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
