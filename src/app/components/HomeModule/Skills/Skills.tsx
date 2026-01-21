import styled from '@emotion/styled'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { SiBootstrap, SiCss3, SiHtml5, SiJavascript, SiMui, SiNextdotjs, SiReact, SiReaddotcv, SiTailwindcss } from "react-icons/si";

export default function Skills() {
    return (
        <>
            <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} gap={2} padding={5}>
                <CustomTitle color="white" sx={{ textTransform: 'uppercase', fontWeight: '900', marginBottom: '25px', fontSize: { xs: '3em', md: '4em' }, textAlign: 'center' }} data-aos="fade-up">SKILLs</CustomTitle>
                <Grid container rowSpacing={8} sx={{ textAlign: { xs: 'center', sm: 'start' } }} columnSpacing={0} alignItems={'center'} justifyContent={'center'}>
                    {
                        IconsButtons.map((icon, index) => (
                            <Grid key={index} size={{ xs: 4, md: 2 }} data-aos="fade-right" data-aos-delay={index * 250}  >
                                <CustomIcon fontSize={80} color="#ffff" >
                                    {icon}
                                </CustomIcon>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </>
    )
}

const CustomTitle = styled(Typography)({
    color: '#353334',
    fontWeight: '900',
    position: 'relative',
    textAlign: 'center',

    '&:after': {
        content: '"SKILLS"',
        position: 'absolute',
        fontSize: '3.5rem',
        left: '0%',
        top: '20%',
        bottom: '0%',
        right: '0%',
        color: '#fff',
    }
})


const IconsButtons = [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <SiReact />, <SiNextdotjs />, <SiBootstrap />, <SiTailwindcss />, <SiMui />]
const CustomIcon = styled(Typography)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    'svg': {
        color: '#353334',
        transition: 'all 0.3s ease-in-out',
        textAlign: 'center',
        cursor: 'pointer',
        '&:hover': {
            color: '#fff',
        }
    }
})