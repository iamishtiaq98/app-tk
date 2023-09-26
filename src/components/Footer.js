import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import './Footer.css';



const Footer = () => {

    return (
        <Paper className='footerRoot' elevation={3}>
            <Typography variant="body1" component="p" className='footerText'>
                © {new Date().getFullYear()} TkDownloader.com 
            </Typography>&nbsp;&nbsp;
            <Typography variant="body2" component="p" className=''>
                Made with &#10084; &nbsp;&nbsp; By: &nbsp;
            </Typography> 
            <Typography variant="body2" component="p" className='footerText'>
                <a className='footer-link' href='https://codewithishtiaq.vercel.app' target="_blank" rel='noreferrer' ><strong>CodeWithIshtiaq.com</strong></a>
            </Typography>
        </Paper>
    );
};

export default Footer;
