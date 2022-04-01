import { Avatar, Box, Button, Container, Paper, Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import Carousel from 'react-elastic-carousel'
import avatar1 from "../img/avatar1.jpg";
import avatar2 from "../img/avatar2.jpg";
import avatar3 from "../img/avatar3.jpg";
import avatar4 from "../img/avatar4.jpg";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#FFF7F5',
        marginTop: '5rem !important',
        paddingTop: '2rem'
    },
    title: {
        fontFamily: "'Nunito', sans-serif !important",
        fontWeight: 'bold !important'
    },
    boxQuotes: {
        width: 300,
        backgroundColor: '#fff',
        '&:hover': { backgroundColor: '#f46c3e', color: '#fff' },
        cursor: 'pointer',
        padding: '0 2rem'
    }
})
const quotes = [
    {
        name: "Luna Abigail",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a earum animi? Numquam, quo. Excepturi, est voluptatem. Quibusdam, magni enim.',
        avatar: avatar1
    },
    {
        name: 'Ellie Grace',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur itaque labore qui iste veniam omnis in voluptas voluptate, non ab.',
        avatar: avatar2
    },
    {
        name: "Lucy",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a earum animi? Numquam, quo. Excepturi, est voluptatem. Quibusdam, magni enim.',
        avatar: avatar3
    },
    {
        name: 'Bella Audrey',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur itaque labore qui iste veniam omnis in voluptas voluptate, non ab.',
        avatar: avatar4
    },
]
function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

const BeautyQuotes = () => {
    const classes = useStyles();
    const [showItemQuotes, setShowItemQuotes] = useState(0)
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.up('xs'));
    const md = useMediaQuery(theme.breakpoints.up('md'));
    const lg = useMediaQuery(theme.breakpoints.up('lg'));
    const [initialIndex, setInitialIndex] = useState(1);

    useEffect(() => {
        if (lg) {
            setShowItemQuotes(3);
        }
        else if (md) {
            setShowItemQuotes(2);
        }
        else {
            setShowItemQuotes(1);
        }
    }, [xs, md, lg])
    return (
        <>
            {/* <h1>
                Beauty Quotes
            </h1> */}
            <Box
                className={classes.root}
            >
                <Container
                    maxWidth="xl"
                >
                    <Box
                        sx={{ marginX: { xs: '0', md: '4rem' }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <Typography
                            variant="h4"
                            textAlign="center"
                            className={classes.title}
                        >
                            Beauty Quotes
                        </Typography>
                        <Typography
                            variant="body2"
                            component="div"
                            maxWidth="40rem"
                            sx={{ fontFamily: "'Nunito', sans-serif !important", textAlign: 'center', color: 'text.secondary', marginBottom: '2rem' }}
                        >
                            Lorem ipsum dolor sit
                            amet consectetur adipisicing
                            elit. Esse, quia earum quas
                            nostrum tenetur ad repellat
                            omnis rem nulla cupiditate?
                        </Typography>
                        <Carousel
                            itemsToShow={showItemQuotes}
                            showArrows={false}
                            enableAutoPlay
                        >
                            {quotes.map((quote, i) => (
                                <Box
                                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
                                >
                                    <Box
                                        className={classes.boxQuotes}
                                        sx={{ color: 'text.secondary' }}
                                    >
                                        <Typography
                                            sx={{ textAlign: 'center', marginTop: '4rem' }}
                                        >
                                            {quote.description}
                                        </Typography>
                                        <Typography
                                            variant="h1"
                                            sx={{ textAlign: 'center', fontFamily: "'Irish Grover', cursive", margin: 0, padding: 0 }}
                                        >
                                            “
                                        </Typography>
                                    </Box>
                                    <Avatar
                                        alt={quote.name}
                                        src={quote.avatar}
                                    />
                                    <Typography
                                        variant="h6"
                                        className={classes.title}
                                    >
                                        {quote.name}
                                    </Typography>
                                </Box>
                            ))}
                        </Carousel>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
export default BeautyQuotes;