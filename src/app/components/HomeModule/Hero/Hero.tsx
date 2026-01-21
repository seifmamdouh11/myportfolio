"use client";

import { Box, Button, Grid, keyframes, Stack, styled, Typography } from "@mui/material";
import { SiBootstrap, SiCss3, SiHtml5, SiJavascript, SiMui, SiNextdotjs, SiReact, SiReaddotcv, SiTailwindcss } from "react-icons/si";
import Link from "next/link";
import { RiShakeHandsLine } from "react-icons/ri";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
export default function Hero() {
  return (
    <>
    <Box marginTop={'85px'} display={'flex'} justifyContent={'center'} flexDirection={'column'} gap={2} id="home">
      <Grid container rowSpacing={1} sx={{ alignItems: 'center',textAlign:'center' }} >
        <Grid size={{xs:12,md:8}} data-aos="fade-right" margin={'auto'}>
          <Typography variant="h2" color="white" sx={{ textTransform: 'uppercase', fontWeight: '900', color: '#353334', letterSpacing: '3px' }}>
            Hello I'm
          </Typography>
          <Typography variant="h2" color="white" sx={{ textTransform: 'uppercase', fontWeight: '900', letterSpacing: '3px',marginBottom:'25px' }}>
            Seif Mamdouh
          </Typography>
          <Typography variant="subtitle1" color="white" sx={{ letterSpacing: '1px',marginBottom:'25px' }}>
            I build modern, responsive web applications with clean architecture,
            scalable code, and great user experience.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ m: '20px 0' ,justifyContent:'center' }}>
            {
              IconsButtons.map((icon, index) => (
                <IconsButton key={index} variant="h4">
                  {icon}
                </IconsButton>
              ))
            }
          </Stack>
          <Stack spacing={2} sx={{ mt: 2, width: { xs: 'fit-content' }, margin: { xs: '10px auto', sm: '15px auto' } }} direction={{ xs: 'column', sm: 'row' }}>
            <StyledButton1 sx={{ display: 'flex', gap: 2 }} onClick={()=>handleScroll()}><RiShakeHandsLine />Let's work together</StyledButton1>
            <StyledButton2 sx={{ display: 'flex', gap: 2 }}>
              <Link href="/MyCV.pdf" download target="_blank" rel="noopener noreferrer">
            <SiReaddotcv/>My RESUME
            </Link>
            </StyledButton2>
          </Stack>
        </Grid>
      </Grid>
      <Stack width={'100%'} >
        <MdOutlineKeyboardDoubleArrowDown className="scrollIcon" fontSize={80}/>
      </Stack>
      </Box>
    </>
  );
}

const IconsButton = styled(Typography)({
  'svg': {
    color: '#353334',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      color: '#fff',
    }
  }
})
const IconsButtons = [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <SiReact />, <SiNextdotjs />, <SiBootstrap />, <SiTailwindcss />, <SiMui />]

const StyledButton1 = styled(Button)({
  color: '#fff',
  fontSize: '1.2em',
  fontWeight: 'bold',
  backgroundColor: '#353334',
  borderRadius: '5px',
  letterSpacing: '2px',
  padding: '10px 20px',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 0 10px #353334',
  }
})
const StyledButton2 = styled(Button)({
  color: '#fff',
  fontSize: '1.2em',
  fontWeight: 'bold',
  border: '1px solid #353334',
  borderRadius: '5px',
  letterSpacing: '2px',
  padding: '10px 20px',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroubndColor: '#353334',
  },
  'a': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    color: '#fff',
    textDecoration: 'none',
    transition: 'all 0.3s ease-in-out',
  }
})
const handleScroll = () => {
    const section = document.getElementById('contact');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};