import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Box, Grid, Card, CardHeader, CardContent, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import loadingimg from '../fonts/loading.gif';
import './TkDownloader.css';
import HelpSection from './HelpSection';

function TkDownloader() {
    const [videoUrl, setVideoUrl] = useState('');

    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [error, setError] = useState('');
    const [audio, setAudio] = useState('');
    const [hdSize, setHdSize] = useState('');
    const [playSize, setPlaySize] = useState('');
    const [wmSize, setWmSize] = useState('');
    const [wmplay, setWmPlay] = useState('');

    const [loading, setLoading] = useState(false)

    const handleDownload = async () => {
        try {
            setLoading(true);
            // const response = await fetch(`http://localhost:5000/download?url=${videoUrl}`);
            const response = await fetch(`https://apitk.vercel.app/download?url=${videoUrl}`);

            const data = await response.json();
            if (data.msg === 'success') {
                setWmPlay(data?.data?.wmplay);
                setAudio(data?.data?.wmplay);
                setTitle(data?.data?.title);
                setName(data?.data?.name);
                setAvatar(data?.data?.avatar);



                const nwmBlobResponse = await fetch(data?.data?.nwmurl);
                const wmplayBlobResponse = await fetch(data?.data?.wmplay);
                const hdplayBlobResponse = await fetch(data?.data?.hdplay);
                const audioBlobResponse = await fetch(data?.data?.audio);

                if (!nwmBlobResponse.ok || !wmplayBlobResponse.ok || !hdplayBlobResponse.ok || !audioBlobResponse.ok) {
                    throw new Error('One or more blob responses were not ok');
                }

                const nwmBlob = await nwmBlobResponse.blob();
                const wmplayBlob = await wmplayBlobResponse.blob();
                const hdplayBlob = await hdplayBlobResponse.blob();
                const audioBlob = await audioBlobResponse.blob();
                setLoading(false);
                setError('');
                setTimeout(() => {
                    setWmSize((data?.data?.wmSize / (1024 * 1024)).toFixed(2));
                    setPlaySize((data?.data?.playSize / (1024 * 1024)).toFixed(2));
                    setHdSize((data?.data?.hdSize / (1024 * 1024)).toFixed(2));
                    // Create download links
                    const nwmBlobUrl = URL.createObjectURL(nwmBlob);
                    const wmplayBlobUrl = URL.createObjectURL(wmplayBlob);
                    const hdplayBlobUrl = URL.createObjectURL(hdplayBlob);
                    const audioBlobUrl = URL.createObjectURL(audioBlob);

                    // Create download links
                    const nwmDownloadLink = document.createElement('a');
                    nwmDownloadLink.href = nwmBlobUrl;
                    nwmDownloadLink.download = 'nwm_video.mp4';
                    nwmDownloadLink.textContent = `No Watermark .mp4 (${playSize} MB)`;

                    const wmplayDownloadLink = document.createElement('a');
                    wmplayDownloadLink.href = wmplayBlobUrl;
                    wmplayDownloadLink.download = 'wmplay_video.mp4';
                    wmplayDownloadLink.textContent = `Watermark .mp4 (${wmSize} MB)`;

                    const hdplayDownloadLink = document.createElement('a');
                    hdplayDownloadLink.href = hdplayBlobUrl;
                    hdplayDownloadLink.download = 'hdplay_video.mp4';
                    hdplayDownloadLink.textContent = `HD Video .mp4 (${hdSize} MB)`;

                    const audioDownloadLink = document.createElement('a');
                    audioDownloadLink.href = audioBlobUrl;
                    audioDownloadLink.download = 'audio-file.mp3';
                    audioDownloadLink.textContent = `Music .mp3`;

                    // Append download links to the DOM
                    const downloadLinkElement = document.querySelector('.download_link');
                    downloadLinkElement.appendChild(nwmDownloadLink);
                    downloadLinkElement.appendChild(wmplayDownloadLink);
                    downloadLinkElement.appendChild(hdplayDownloadLink);
                    downloadLinkElement.appendChild(audioDownloadLink);

                }, 1200)
            } else {
                setError(data.response);
                setLoading(false);
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            setLoading(false);
        }
    };


    return (
        <>
            <Box className='tkroot'>
                <Grid container >
                    <Grid item xs={12}>
                        <Box marginTop={'1rem'}>
                            <Card className='mui-card-c'>
                                <CardHeader title="Download Your Video" />
                                <CardContent>
                                    <Typography variant='h6' className='para'>Paste the copied link here <ArrowDownwardIcon /></Typography>
                                    <Box >
                                        <Grid container spacing={4}>
                                            <Grid item sm={8} xs={12}>
                                                <input
                                                    className='input'
                                                    type="text"
                                                    placeholder="Enter TikTok video URL"
                                                    value={videoUrl}
                                                    onChange={(e) => setVideoUrl(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item sm={4} xs={12}>
                                                <Button className='btnReset' onClick={handleDownload}> <SearchIcon /> Search</Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box><Typography variant='p' className='error'>{error}</Typography></Box>
                                </CardContent>
                                <Box className='textAreaTk'>
                                    <Grid container spacing={2} >
                                        {loading ?
                                            <Box className="center-circular" width={"100%"} >
                                                <img src={loadingimg} alt='loading please.....' />
                                                {/* <CircularProgress color="warning" /> */}
                                            </Box>
                                            :
                                            wmplay && (
                                                <>
                                                    <Grid item lg={4} md={6} xs={12}>
                                                        <CardContent className='text-center'>
                                                            <video className='video' width="250" height="400" controls >
                                                                <source src={wmplay} type="video/mp4" />
                                                            </video>
                                                        </CardContent>
                                                    </Grid>

                                                    <Grid item lg={8} md={6} xs={12}>
                                                        <CardContent className='text-center'>
                                                            <Typography variant='h5'>Download Links</Typography>
                                                            <br />
                                                            <CardContent className='text-start'>
                                                                <Box className='flex text'>
                                                                    <img className='avater' src={avatar} alt={name} />
                                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <Typography variant='p'> {name} </Typography>
                                                                </Box>
                                                                <Box className='flex text'>
                                                                    <Typography variant='p' className='title t1'>Video Title:&nbsp;&nbsp;</Typography>
                                                                    <Typography variant='p' className='text'> {title} </Typography><br />
                                                                </Box>
                                                            </CardContent>
                                                            <Box>
                                                                <audio className='audio' controls>
                                                                    <source src={audio} type="audio/mp3" />
                                                                </audio>
                                                            </Box>
                                                            <Box className='download_link'></Box>
                                                        </CardContent>
                                                    </Grid>
                                                </>
                                            )}
                                    </Grid>
                                </Box>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </Box >
            <HelpSection />
        </>
    );
}


export default TkDownloader;
