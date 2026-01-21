import styled from '@emotion/styled'
import { Box, Button, Grid, InputLabel, TextareaAutosize, TextField, Typography } from '@mui/material'
import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa6'

export default function Contact() {
    return (
        <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} gap={2} padding={5} id="contact">
            <Grid container rowSpacing={1} sx={{ textAlign: { xs: 'center', sm: 'start' } }} columnSpacing={6}>
                <Grid size={{ xs: 12, md: 6 }} data-aos="fade-right">
                    <CustomTitle color="white" sx={{ textTransform: 'uppercase', fontWeight: '900', marginBottom: '25px', fontSize: { xs: '3em', md: '4em' }, textAlign: 'center',whiteSpace:'nowrap' }}>GET IN TOUCH</CustomTitle>
                    <Grid container rowSpacing={4} sx={{ textAlign: { xs: 'center', sm: 'start' } }} columnSpacing={3}>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <InputLabel id="demo-simple-select-label" sx={{ color: 'white', width: 'fit-content', paddingBottom: '10px' }}>Email</InputLabel>
                            <CustomTextField type='email' variant='filled' />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <InputLabel id="demo-simple-select-label" sx={{ color: 'white', width: 'fit-content', paddingBottom: '10px' }}>Name</InputLabel>
                            <CustomTextField type='text' variant='filled' id='name' />
                        </Grid>
                        <Grid size={12}>
                            <InputLabel id="demo-simple-select-label" sx={{ color: 'white', width: 'fit-content', paddingBottom: '10px' }}>Message</InputLabel>
                            <CustomTextarea
                                minRows={3}
                                placeholder="Enter your message..."
                            />
                        </Grid>
                        <Grid size={12}>
                            <CustomButton variant="contained" type="submit">Send</CustomButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} height={'100%'} margin={'auto'} sx={{backgroundColor:'#353334',borderRadius:'10px'}} data-aos="fade-left">
                    {
                        ContactList.map((item, index) => (
                            <Grid key={index} size={ 12 } display={'flex'} alignItems={"center"}  direction={'row'} marginBottom={2} sx={{borderRadius:'5px',padding:'10px'}}  >
                                <IconButton >
                                    {item.icon}
                                </IconButton>
                                <Typography variant="subtitle1" color="#ffff" letterSpacing={'2px'}>
                                    {item.text}
                                </Typography>
                            </Grid>
                        ))
                    }
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
        content: '"GET IN TOUCH"',
        position: 'absolute',
        fontSize: '3.5rem',
        left: '0%',
        top: '20%',
        bottom: '0%',
        right: '0%',
        color: '#fff',
    }
})

const CustomTextField = styled(TextField)({
    backgroundColor: '#353334',
    borderRadius: '5px',
    width: '100%',

    '& .MuiFilledInput-root': {
        backgroundColor: '#353334',
        borderRadius: '5px',

        // REMOVE bottom underline
        '&:before, &:after': {
            borderBottom: 'none !important',
        },
        '&:hover:not(.Mui-disabled):before': {
            borderBottom: 'none !important',
        },
    },

    '& .MuiInputBase-input': {
        padding: '15px 20px',
        color: '#fff',
    },

    '& label': {
        display: 'none',
    },
});
const CustomTextarea = styled(TextareaAutosize)({
    width: '100%',
    backgroundColor: '#353334',
    borderRadius: '5px',
    padding: '15px 20px',
    color: '#fff',
    fontSize: '1rem',
    border: 'none',
    outline: 'none',
    resize: 'vertical',

    '&:hover': {
        boxShadow: 'none',
    },
});
const CustomButton = styled(Button)({
    color: '#fff',
    width: '100%',
    marginBottom: '25px',
    fontSize: '1.2em',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    border: '1px solid #353334',
    letterSpacing: '15px',
    padding: '10px 10px',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        letterSpacing: '18px',
        boxShadow: '0 0 10px #353334',
    },
})

const ContactList = [
    {icon:<FaEnvelope />, text:'seifmamdouh@yahoo.com'},
    {icon:<FaWhatsapp />, text:'+201018006567'},
    {icon:<FaMapMarkerAlt />, text:'123 Main Street, Anytown, USA'},
]
const IconButton = styled(Button)({
    '&:hover': {
        background: 'none',
    },
    'svg': {
        color: '#fff',
        fontSize: '1.5em',
    }
})