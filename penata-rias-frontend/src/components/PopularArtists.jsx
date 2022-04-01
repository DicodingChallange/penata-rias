import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useState } from "react";
import favoriteArtist1 from "../img/favorites_artist1.jpg";
import favoriteArtist2 from "../img/favorites_artist2.jpg";
import favoriteArtist3 from "../img/favorites_artist3.jpg";
import favoriteArtist4 from "../img/favorites_artist4.jpg";


const useStyles = makeStyles({
    root: {
        backgroundColor: '#FFF7F5'
    },
    title: {
        fontFamily: "'Nunito', sans-serif !important",
        fontWeight: 'bold !important',
        marginTop: '5rem !important'
    },
    hoverArtist: {
        boxShadow: 2
    }
})
const favoritesArtist = [
    {
        img: favoriteArtist1,
        name: 'Artist 1'
    },
    {
        img: favoriteArtist2,
        name: 'Artist 2'
    },
    {
        img: favoriteArtist3,
        name: 'Artist 3'
    },

]
const PopularArtists = () => {
    const classes = useStyles();
    const [hoverArtist, OnHoverArtist] = useState(null);
    return (
        <>
            <h1>
                <Box>
                    <Container
                        maxWidth="xl"
                    >
                        <Box
                            sx={{ marginX: { xs: '0', md: '4rem' } }}
                        >
                            <Typography
                                variant="h4"
                                textAlign="center"
                                className={classes.title}
                            >
                                Meet with most popular artists
                            </Typography>
                            <Grid
                                container
                                spacing={5}
                                sx={{ marginTop: '1rem', padding: { xs: '0 0', md: '0 4rem', lg: '0 6rem' } }}
                            >
                                {favoritesArtist.map((artist) => (
                                    <Grid item xs={12} md={6} lg={4} key={artist.name}>
                                        <Card
                                            sx={{ maxWidth: 290, margin: '0 auto', boxShadow: `${hoverArtist === artist.name ? 20 : 2}` }}
                                            onMouseEnter={() => {
                                                OnHoverArtist(artist.name);
                                            }}
                                            onMouseLeave={() => {
                                                OnHoverArtist(null);
                                            }}
                                            className={`${hoverArtist === artist.name ? classes.hoverArtist : ''}`}
                                        >
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    image={artist.img}
                                                    height={194}
                                                />
                                                <CardContent>
                                                    <Typography
                                                        gutterBottom
                                                        variant="h5"
                                                        component="div"
                                                    >
                                                        {artist.name}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="text.secondary"
                                                    >
                                                        Lorem ipsum dolor sit amet,
                                                        consectetur adipisicing elit.
                                                        Magni perspiciatis, unde a
                                                        illo soluta alias dolorem
                                                        maiores corrupti sunt
                                                        reprehenderit.
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button
                                                    size="small"
                                                    color="warning"
                                                    sx={{ fontWeight: 'bold' }}
                                                >
                                                    Show profile
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}

                            </Grid>
                        </Box>
                    </Container>
                </Box>
            </h1>
        </>
    )
}
export default PopularArtists;