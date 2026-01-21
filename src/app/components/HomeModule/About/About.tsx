"use client";
import styled from '@emotion/styled'
import { Box, Button, Grid, Link, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { FaCertificate, FaFacebook, FaGraduationCap, FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { MdOutlineWork } from 'react-icons/md';
export default function About() {
    return (
        <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} gap={2} padding={5} id="about">
            <Grid container rowSpacing={1} sx={{ textAlign: { xs: 'center', sm: 'start' } }} columnSpacing={3}>
                <Grid size={{ xs: 12, md: 6 }} data-aos="fade-right">
                    <Image src='/Profile.jpg' alt="Profile" width={500} height={500} className='profile' />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} data-aos="fade-left">
                    <CustomTitle color="white" sx={{ textTransform: 'uppercase', fontWeight: '900', marginBottom: '25px', fontSize: { xs: '3em', md: '4em' }, textAlign: { xs: 'center', sm: 'start' } }}>
                        ABOUT ME
                    </CustomTitle>
                    <Typography variant="subtitle1" color="#ffff" sx={{ letterSpacing: '1px', marginBottom: '25px' }}>
                        “ I am passionate about web development and creating practical solutions that make a real impact. I enjoy learning new technologies, building responsive and modern applications, and solving complex challenges with clean, efficient code. ”
                    </Typography>

                    <Stack width={'100%'}>
                        {
                            AboutMe.map((item, index) => (
                                <Typography key={index} color="#ffff" sx={{ opacity: '.5', marginBottom: '25px' }} display={{ md: 'flex', xs: 'none' }} alignItems={'center'} gap={2} >
                                    {item.icon}{item.text}
                                </Typography>
                            ))
                        }
                    </Stack>
                    <ContactButton>Contact Me</ContactButton>
                    <SocialIcons direction={'row'} gap={5} justifyContent={{ md: 'flex-start', xs: 'center' }}>
                        {socialList.map((item, index) => (
                            <Link
                                key={index} // unique key
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Typography color="#ffff" display="flex" alignItems="center" fontSize={35}>
                                    {item.icon}
                                </Typography>
                            </Link>
                        ))}
                    </SocialIcons>
                </Grid>
            </Grid>
        </Box>
    )
}

const CustomTitle = styled(Typography)({
    color: '#353334',
    fontWeight: '900',
    position: 'relative',
    textAlign: 'center',

    '&:after': {
        content: '"ABOUT ME"',
        position: 'absolute',
        fontSize: '3.5rem',
        left: '0%',
        top: '20%',
        bottom: '0%',
        right: '0%',
        color: '#fff',
    }
})
const AboutMe = [
    { icon: <FaGraduationCap fontSize={25} />, text: 'AASTMT | Year 4 | Semester 8 | GPA 3.7' },
    { icon: <MdOutlineWork fontSize={25} />, text: 'Internship @ Engineering Consultant Group (ECG)-IT Division' },
    { icon: <FaCertificate fontSize={25} />, text: 'Frontend Web Development Diploma @ Upskilling ' }
]
const socialList = [
    { href: 'https://www.facebook.com/SeifMamd0uh', icon: <FaFacebook /> },
    { href: 'https://www.instagram.com/seifmamdouh10/', icon: <FaInstagram /> },
    { href: 'https://www.linkedin.com/in/seifmamdouh/', icon: <FaLinkedin /> },
]
const SocialIcons = styled(Stack)({
    'svg': {
        color: '#353334',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            color: '#fff',
        }
    }
})
const ContactButton = styled(Button)({
    color: '#fff',
    marginBottom: '25px',
    fontSize: '1.2em',
    fontWeight: 'bold',
    backgroundColor: '#353334',
    letterSpacing: '2px',
    padding: '10px 10px',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        padding: '10px 40px 10px 10px',
        letterSpacing: '5px',
        boxShadow: '0 0 10px #353334',
    },
    '&:after': {
        content: '"➜"',
        position: 'absolute',
        right: '5px',
        color: '#fff',
        opacity: '0',
        transition: 'all 0.3s ease-in-out',
    },
    '&:hover:after': {
        content: '"➜"',
        opacity: '1',
    },
})