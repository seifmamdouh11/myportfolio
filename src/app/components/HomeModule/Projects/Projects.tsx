import styled from '@emotion/styled'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaEarthAfrica } from 'react-icons/fa6'

export default function Projects() {
    return (
        <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} gap={2} padding={5} id="projects">
            <CustomTitle color="white" sx={{ textTransform: 'uppercase', fontWeight: '900', marginBottom: '25px', fontSize: { xs: '3em', md: '4em' }, textAlign: 'center' }} data-aos="fade-up">projects</CustomTitle>
            <Grid container rowSpacing={4} sx={{ textAlign: { xs: 'center', sm: 'start' } }} columnSpacing={3} justifyContent={'center'}>
                {
                    ProjectsList.map((item, index) => (
                        <Grid key={index} size={{ xs: 12, md: 4 }} data-aos="zoom-in" data-aos-delay={index * 350}  >
                            <Card >
                                <img src={`${item.image}`} alt="Profile" className='card-image' />
                                <Stack padding={1} gap={2} >
                                    <Typography variant='h5'>{item.title}</Typography>
                                    <Typography fontSize={14} gutterBottom>{item.description}</Typography>
                                    <Grid container rowSpacing={1} sx={{ textAlign: { xs: 'center', sm: 'start' } }} columnSpacing={0}>
                                        <Grid size={{xs:6, md: 6 }} >
                                            <CardButton><FaEarthAfrica /><Link href={`${item.Demo}`} rel="noopener noreferrer" target="_blank">Demo</Link></CardButton>
                                        </Grid>
                                        <Grid size={{xs:6, md: 6 }} textAlign={'end'}>
                                            <CardButton><FaGithub /><Link href={`${item.Respo}`} rel="noopener noreferrer" target="_blank">Repository</Link></CardButton>
                                        </Grid>
                                    </Grid>
                                </Stack>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

const ProjectsList = [
    {
        title: 'Rent Cars',
        image: '/rentcars.png',
        description: 'Developed a responsive car rental frontend using React, featuring reusable components, dynamic API-driven data, and client-side routing to manage multiple application views efficiently.',
        Demo: 'https://seifmamdouh11.github.io/rentcar/',
        Respo: 'https://github.com/seifmamdouh11/rentcar',
    },
    {
        title: 'Rent Cars',
        image: '/rentcars.png',
        description: 'Developed a responsive car rental frontend using React, featuring reusable components, dynamic API-driven data, and client-side routing to manage multiple application views efficiently.',
        Demo: 'https://seifmamdouh11.github.io/rentcar/',
        Respo: 'https://github.com/seifmamdouh11/rentcar',
    },
    {
        title: 'Rent Cars',
        image: '/rentcars.png',
        description: 'Developed a responsive car rental frontend using React, featuring reusable components, dynamic API-driven data, and client-side routing to manage multiple application views efficiently.',
        Demo: 'https://seifmamdouh11.github.io/rentcar/',
        Respo: 'https://github.com/seifmamdouh11/rentcar',
    },
    {
        title: 'Rent Cars',
        image: '/rentcars.png',
        description: 'Developed a responsive car rental frontend using React, featuring reusable components, dynamic API-driven data, and client-side routing to manage multiple application views efficiently.',
        Demo: 'https://seifmamdouh11.github.io/rentcar/',
        Respo: 'https://github.com/seifmamdouh11/rentcar',
    },
    {
        title: 'Rent Cars',
        image: '/rentcars.png',
        description: 'Developed a responsive car rental frontend using React, featuring reusable components, dynamic API-driven data, and client-side routing to manage multiple application views efficiently.',
        Demo: 'https://seifmamdouh11.github.io/rentcar/',
        Respo: 'https://github.com/seifmamdouh11/rentcar',
    },
    
]

const Card = styled(Box)({
    overflow: 'hidden',
    color: '#fff',
    height: '100%',
    backgroundColor: '#353334',
    borderRadius: '10px',
    margin: '10px',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
        boxShadow: '0 0 20px #353334',
    },
    '&:hover .card-image': {
        transform: 'scale(1.1)',
    },
})

const CardButton = styled(Button)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    color: '#353334',
    fontSize: '1em',
    fontWeight: 'bold',
    backgroundColor: '#ffffffff',
    borderRadius: '5px',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        boxShadow: '0 0 10px #353334',
    },
    'a': {
        color: '#353334',
        textDecoration: 'none',
        transition: 'all 0.3s ease-in-out',
    }
})
const CustomTitle = styled(Typography)({
    color: '#353334',
    fontWeight: '900',
    position: 'relative',
    textAlign: 'center',

    '&:after': {
        content: '"Projects"',
        position: 'absolute',
        fontSize: '3.5rem',
        left: '0%',
        top: '20%',
        bottom: '0%',
        right: '0%',
        color: '#fff',
    }
})
