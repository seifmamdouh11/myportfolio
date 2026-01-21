import styled from '@emotion/styled'
import { Grid, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <Stack bgcolor={'#353334'} padding={5} id="footer">
            <Grid container rowSpacing={1} sx={{ textAlign: { xs: 'center', sm: 'start' } }} columnSpacing={3}>
                <Grid size={12} >
                    <Typography color="white" sx={{ textTransform: 'uppercase', fontWeight: '900', fontSize: '.8em', textAlign: 'center' }}>© 2026 Seif Mamdouh. All rights reserved.</Typography>
                </Grid>
                <Grid size={12} >
                    <SocialIcons direction={'row'} gap={5} justifyContent={'center'} m={2}>
                        {socialList.map((item, index) => (
                            <Link
                                key={index} 
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
        </Stack>
    )
}
const socialList = [
    { href: 'https://www.facebook.com/SeifMamd0uh', icon: <FaFacebook /> },
    { href: 'https://www.instagram.com/seifmamdouh10/', icon: <FaInstagram /> },
    { href: 'https://www.linkedin.com/in/seifmamdouh/', icon: <FaLinkedin /> },
]


const SocialIcons = styled(Stack)({
    'svg': {
        color: '#fff',
        opacity: '0.5',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            color: '#fff',
            opacity: '1',
        }
    }
})