import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Wedding from '../wedding.jpeg'
import Crown from '../crown.png'
import AppBar from './AppBar'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SignUp from './SignUp'
import Border from '../border.png'


export default function Home() {
    const [users, setUsers] = useState(false);
    const [rsvp, setRSVP] = useState(false);
    const [open, setOpen] = useState(false);

    const openDialog = () => {
        setOpen(!open)
    }

    useEffect(() => {
        fetch("/users")
            .then((r) => r.json())
            .then((data) => {
                console.log(data)
                setUsers(data)
            });
    }, []);

    return (
        <>
            <AppBar />
            <Box sx={{ background: `url(${Wedding})`, width: { xs: '100%', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw' }, minHeight: { xs: '100vh', sm: '100vh', md: '100vh', lg: '110vh', xl: '110vh' }, backgroundSize: {xs: '400%',lg:'cover'}, backgroundRepeat: 'no-repeat', webkitBackgroundStyle: 'cover' }}>
                <Box sx={{ display: {xs: 'none', sm: 'none', md: 'inline', lg: 'inline' }, position: 'absolute', top: {xs: 150, sm: 10 , md: 10, lg: 20 }, left: 30, overflow: 'none' }}>
                    <Typography sx={{ fontFamily: "'Righteous', cursive", color: 'white', opacity: .1, fontSize: {xs: '5rem', sm: '10rem', md:'17rem', lg: '17rem'} }}>Zaruba</Typography>
                    <Typography sx={{ fontFamily: "'Righteous', cursive", color: 'white', opacity: .1, fontSize: {xs: '5rem', sm: '10rem', md:'17rem', lg: '17rem'} }}>Zylks</Typography>
                </Box>
                <Box sx={{ position: 'absolute', right: {xs: 10, sm: 10, md: 800, lg: 850, xl: 800}, top: 310, display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
                    <Typography sx={{ fontFamily: "'Righteous', cursive", fontSize: {xs: '3rem', lg: '5rem', xl:'5rem'}, color: 'white' }}>Marija </Typography>
                    <Typography sx={{ fontFamily: "'Cinzel Decorative', cursive", fontSize: {xs: '4rem',xl:'7rem'}, color: 'gold', fontWeight: 700, opacity: .9 }}>&</Typography>
                    <Typography sx={{ fontFamily: "'Righteous', cursive", fontSize: {xs: '3rem', lg: '5rem', xl:'5rem'}, color: 'white' }}>Trevor</Typography>
                </Box>
                <Box sx={{ width: {xs: '80vw', sm: '80vw', md: '40vw', lg: '40vw'}, position: 'absolute', top: {xs: 400, lg: 420 ,xl: 450}, left: {xs: 40, sm: 60, md: 60, lg: 60, xl: 60}}}>
                    <Typography sx={{ fontFamily: "'Poiret One', cursive;", color: 'white', fontSize: '1.2rem' }}>
                        Together with their families
                        Marija Zaruba
                        and
                        Trevor Zylks
                        invite you to share in the joy
                        and celebration of their marriage
                        on Sunday, the first of May
                        at two o'clock
                    </Typography>
                </Box>
                <Box>
                    {/* <Box component='img' src={Crown} sx={{ width: '6.5%', position: 'absolute', right: 170, top: 313, zIndex: 1, transform: 'rotate(30deg)' }} /> */}
                    <Typography onClick={openDialog} onMouseEnter={() => setRSVP(!rsvp)} onMouseLeave={() => setRSVP(!rsvp)} sx={{ fontFamily: "'Righteous', cursive", fontSize: {xs: '5rem', sm: '5rem', md: '10rem', lg: '10rem', xl: '10rem'}, color: rsvp ? 'gold' : 'white', position: 'absolute', top: {xs: 650, lg: 300, xl: 150}, right: {xs: 88, sm: 200, md: 200, lg: 200, xl: 200}, textDecoration: 'none' }}>RSVP</Typography>
                </Box>
               
              
            </Box>
            {open ?
                <Dialog open={open} onClose={openDialog} PaperProps={{style: {background: '#212121', border: {xs: 'none', xl: '50px solid transparent'}, borderImage: {xs: 'none', sm: 'none', xl: `url(${Border}) 100 stretch`}}}}>
                    <DialogTitle id="alert-dialog-title" sx={{textAlign: 'center', color: 'white', fontFamily: "'Poiret One', cursive;", fontSize: '4rem'}}>
                        {"RSVP"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description" sx={{textAlign: 'center', color: 'white', fontFamily: "'Poiret One', cursive;", fontSize: '1.2rem', mb: '4vh', width: '100%' }}>
                            We are so excited to have you! Please let us know if you will be attending with a guest -- as this will help us plan accordingly.
                        </DialogContentText>
                        <SignUp open={open} setOpen={setOpen} />
                    </DialogContent>
                </Dialog> : null}
        </>
    )
}