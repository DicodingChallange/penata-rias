import { Box, Button, Container, Grid, Grow, IconButton, ImageList, ImageListItem, ImageListItemBar, Slide, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/system";
import React, { useEffect, useState } from "react";
import artist1 from "../artist1.png";
import { ThemeProvider, createTheme as createMaterial } from '@mui/material/styles';
import serviceImage1 from "../img/excellent_service1.jpg";
import serviceImage2 from "../img/excellent_service2.jpg";
import { StarBorder } from "@mui/icons-material";

const serviceImages = [
    {
        img: serviceImage1,
        title: "Excellent Service 1"
    },
    {
        img: serviceImage2,
        title: "Excellent Service 2"
    }
]
const useStyles = makeStyles({
    root: {
        backgroundColor: '#FFF7F5'
    },
    heading3: {
        fontWeight: 'bold !important',
        maxWidth: '33rem',
        fontFamily: "'Nunito', sans-serif !important",
        fontSize: '2.7rem !important'
    },
    rightSection: {
        margin: '0.5rem 0 !important'
    }
})
const theme = createMaterial({
    transitions: {
        duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            // most basic recommended timing
            standard: 300,
            // this is to be used in complex animations
            complex: 375,
            // recommended when something is entering screen
            enteringScreen: 225,
            // recommended when something is leaving screen
            leavingScreen: 195,
        }
    }
})
const HeroSection = () => {
    const classes = useStyles();
    const [mounted, OnMounted] = useState(false);
    const [hoverServices, onHoverServices] = useState(null);
    useEffect(() => {
        OnMounted(true);
    }, [])
    return (
        <>
            <Box className={classes.root}>
                <Container
                    maxWidth="xl"
                    sx={{ display: 'flex', justifyContent: 'center' }}

                >
                    <Grid container
                        sx={{ alignItems: 'center' }}
                    >
                        <Grid item md={6} xs={12} >
                            <img src={artist1} style={{ width: '100%' }} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Button
                                variant="text"
                                sx={{ fontWeight: 'bold' }}
                                color="warning"
                                className={classes.rightSection}
                            >
                                All Natural
                            </Button>
                            <Typography variant="h3" className={classes.heading3}>
                                The Power Of Natural Stem Cells to Turn Back Time.
                            </Typography>
                            <Typography variant="body2" component="div" sx={{ maxWidth: '33rem', color: 'GrayText', marginTop: '1rem', marginBottom: '1rem' }}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Omnis magnam quos
                                neque voluptatem nostrum! Dicta
                                inventore ex porro vitae non
                                molestiae ipsam beatae quisquam quo?
                            </Typography>
                            <ImageList
                                cols={2}
                                sx={{ maxWidth: '35rem' }}
                            >
                                {serviceImages.map((item) => (
                                    <ImageListItem sx={{ cursor: 'pointer' }} key={item.img}
                                        onMouseEnter={() => {
                                            onHoverServices(item.title)
                                        }}
                                        onMouseLeave={() => {
                                            onHoverServices(null);
                                        }}
                                    >
                                        <img
                                            src={`${item.img}?fit=crop&auto=format`}
                                            srcSet={`${item.img}?fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                        {hoverServices === item.title ? (
                                            <ImageListItemBar
                                                sx={{
                                                    background:
                                                        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                                }}
                                                title={item.title}
                                                position="top"
                                                actionIcon={
                                                    <IconButton
                                                        sx={{ color: 'white' }}
                                                        aria-label={`star ${item.title}`}
                                                    >
                                                        <StarBorder />
                                                    </IconButton>
                                                }
                                                actionPosition="left"
                                            />
                                        ) : (null)}
                                    </ImageListItem>

                                ))}
                            </ImageList>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
export default HeroSection;