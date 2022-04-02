import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Slide, Toolbar, Tooltip, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
const pages = ['Home', 'Artists', 'Reviews', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const useStyles = makeStyles({
    textAppBar: {
        color: '#2B3044'
    },
    textWhite: {
        color: 'white'
    },
    titleAppBar: {
        fontWeight: 'bold',
        color: '#2B3044',
    }
})
const Header = (props) => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [hoverMenu, onHoverMenu] = useState(false);
    const classes = useStyles();
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    }
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <>
            <AppBar
                position="fixed"
                sx={{ backgroundColor: '#FFF7F5', boxShadow: 'none' }}
                className={classes.textAppBar}
            >
                <Container
                    maxWidth="xl"
                >
                    <Toolbar
                        disableGutters
                        sx={{ justifyContent: 'space-between', alignItems: 'center', marginX: { xs: '0', md: '4rem' } }}
                    >
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: "'Nunito', sans-serif",
                                fontWeight: 'bold'
                            }}
                            className={classes.titleAppBar}
                        >
                            Make-up Artists
                        </Typography>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'flex', md: 'none' }
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                                onClick={handleOpenNavMenu}

                            >
                                <MenuIcon className={classes.textAppBar} />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left'
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left'
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                                TransitionComponent={Slide}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center"
                                            className={classes.textAppBar}
                                            sx={{ fontWeight: 'bold' }}
                                        >
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'flex', md: 'none' },
                                fontFamily: "'Nunito', sans-serif",
                                fontWeight: 'bold'
                            }}
                            className={classes.textAppBar}
                        >
                            Make-up Artists
                        </Typography>
                        <Box
                            sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', gap: '1rem' }}
                        >
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            my: 2,
                                            display: 'block',
                                            textTransform: 'capitalize',
                                            fontWeight: 'bold',
                                            color: '#2B3044'
                                        }}
                                    // className={classes.textAppBar}

                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>
                            <Box>
                                <Tooltip
                                    title="Open settings"
                                >
                                    <IconButton sx={{ backgroundColor: 'black' }} onClick={handleOpenUserMenu}
                                        onMouseEnter={() => {
                                            onHoverMenu(true);
                                        }}
                                        onMouseLeave={() => {
                                            onHoverMenu(false);
                                        }}

                                    >
                                        <RedeemOutlinedIcon className={`${hoverMenu ? classes.textAppBar : classes.textWhite}`} />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                    TransitionComponent={Slide}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem
                                            key={setting}
                                            onClick={handleCloseUserMenu}

                                        >
                                            <Typography textAlign="center">
                                                {setting}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
export default Header;


if (document.getElementById('home')) {
    ReactDOM.render(<Header />, document.getElementById('home'));
}