"use client";

import { Box, Container, CssBaseline, Fab, Fade, LinearProgress, Stack, ThemeProvider, Typography, useScrollTrigger } from "@mui/material";
import About from "./components/HomeModule/About/About";
import Hero from "./components/HomeModule/Hero/Hero";
import Projects from "./components/HomeModule/Projects/Projects";
import Skills from "./components/HomeModule/Skills/Skills";
import { FaArrowUp, FaChevronUp } from "react-icons/fa6";
import styled from "@emotion/styled";
import Contact from "./components/HomeModule/Contact/Contact";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import theme from "./theme";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Footer from "./components/Footer/Footer";


export default function Home(props: Props) {
  let [isLoaded, setIsLoaded] = useState(true);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,    
    });
  }, []);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoaded(false);
  //   }, 5000);
  // }, []);
  // useEffect(() => {
  //   const duration = 4000; 
  //   const start = Date.now();

  //   const timer = setInterval(() => {
  //     const elapsed = Date.now() - start;
  //     const percentage = Math.min((elapsed / duration) * 100, 100);
  //     setProgress(percentage);

  //     if (percentage >= 100) { 
  //       clearInterval(timer);
  //       setProgress(100); 
  //       setIsLoaded(false);
  //     }
  //   }, 50);

  //   return () => clearInterval(timer);
  // }, []);
  // if (isLoaded) {
  //   return (
  //     <>
  //       <Stack bgcolor={'#151312'} minHeight={'100vh'} top={0} left={0} zIndex={100} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={2} id="home">
  //         <CssBaseline />
  //         <Typography textTransform={'uppercase'} color="white" fontSize={50} fontWeight={'900'} textAlign={'center'}>Welcome to my portfolio</Typography>
  //         <LinearProgress
  //           variant="determinate"
  //           value={progress}
  //           sx={{
  //             width: '300px',
  //             height: '10px',
  //             borderRadius: '5px',
  //             '& .MuiLinearProgress-bar': {
  //               backgroundColor: '#fff',
  //             },
  //           }}
  //         />
  //       </Stack>
  //     </>
  //   )
  // }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Stack flexDirection="column" justifyContent="center" alignItems="" bgcolor={'#151312'} >
          <Container maxWidth="lg" sx={{ mt: 10, mb: 0 }}>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <ScrollTop {...props}>
              <BacktoTop size="large" aria-label="scroll back to top" >
                <FaArrowUp />
              </BacktoTop>
            </ScrollTop>
          </Container>
        </Stack>
      </ThemeProvider>
            <Footer />

    </>
  );
}


interface Props {
  window?: () => Window;
  children?: React.ReactElement<unknown>;
}

function ScrollTop(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };
  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const BacktoTop = styled(Fab)({
  color: '#fff',
  backgroundColor: '#353334',
  fontSize: '1.5em',
  fontWeight: '900',
  '&:hover': {
    backgroundColor: '#ffffffff',
    color: '#353334',
    boxShadow: '0 0 10px #ffffffff',
  },
})