"use client";
import { Slide, useMediaQuery, useScrollTrigger, useTheme } from '@mui/material'
import React from 'react'
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IoIosMenu } from 'react-icons/io';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styled from '@emotion/styled';

const drawerWidth = 240;
const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  {label:'Projects',id:'projects'},
  { label: 'Contact', id: 'contact' },
];
const socialIcons = [<FaLinkedin />, <FaFacebook />, <FaInstagram />];






export default function Navbar(props: any) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

   const drawer = (
    <Box
        onClick={handleDrawerToggle}
        sx={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}
    >
        <Typography variant="h6" sx={{ my: 2 }}>
            Seif Mamdouh
        </Typography>
        <Divider />
        <List sx={{ flexGrow: 1 }}>
            {navItems.map((item) => (
                <ListItem key={item.label} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleScroll(item.id)}>
                        <ListItemText primary={item.label} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
        <Box sx={{ py: 2, display: 'flex', justifyContent: 'center', gap: '10px' }}>
            {socialIcons.map((icon, index) => (
                <Button key={index} sx={{ color: '#fff' }}>
                    {icon}
                </Button>
            ))}
        </Box>
    </Box>
);

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} id="back-to-top-anchor" >
            <CssBaseline />
            <HideOnScroll {...props}>
                <CustomAppBar component="nav" sx={{ backgroundColor: 'transparent', boxShadow: 'none', p: '10px' }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: { sm: 'space-around', xs: 'flex-start' } }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <IoIosMenu />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' }, textTransform: 'uppercase', fontWeight: 'bold' }}
                        >
                            Seif mamdouh
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '30px' }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.label}
                                    sx={{ color: '#fff' }}
                                    onClick={() => handleScroll(item.id)}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{display:'flex' ,flexDirection:'row',justifyContent:"flex-end",width:{xs:'100%',sm:'auto'}}}>
                            {socialIcons.map((icon, index) => (
                                <Button key={index} sx={{ color: '#fff', fontSize: '1rem' }}>
                                    {icon}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </CustomAppBar>
            </HideOnScroll>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    )
}



interface Props {
    window?: () => Window;
    children?: React.ReactElement<unknown>;
}

function HideOnScroll(props: Props) {
    const { children, window } = props;

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 50,
    });


    const shouldHide = isLargeScreen ? trigger : false;

    return (
        <Slide appear={false} direction="down" in={!shouldHide}>
            {children ?? <div />}
        </Slide>
    );
}

const CustomAppBar = styled(AppBar)<AppBarProps>({
    backgroundColor: '#151312',
    '&:after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '2px',
        background: '#353334',
    },
})

const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};