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

    const [name, setName] = useState('')
    const [plusone, setPlusOne] = useState(false)

    const userForm = (e) => {
        setName(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault()
        const newUser = {
            name,
            plusone
        }
        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then(res => res.json()).then(console.log)
    }

    const slideCheck = () => {
        setPlusOne(!plusone)
    }

    return (
        <>
            <AppBar />
            <Box sx={{ background: `url(${Wedding})`, width: { xs: '300vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw' }, minHeight: { xs: '110vh', sm: '100vh', md: '100vh', lg: '110vh', xl: '110vh' }, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', webkitBackgroundStyle: 'cover' }}>
                <Box sx={{ position: 'absolute', top: 20, left: 30, overflow: 'none' }}>
                    <Typography sx={{ fontFamily: "'Righteous', cursive", color: 'white', opacity: .1, fontSize: '17rem' }}>Zaruba</Typography>
                    <Typography sx={{ fontFamily: "'Righteous', cursive", color: 'white', opacity: .1, fontSize: '17rem' }}>Zylks</Typography>
                </Box>
                <Box sx={{ position: 'absolute', right: 800, top: 300, display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
                    <Typography sx={{ fontFamily: "'Righteous', cursive", fontSize: '5rem', color: 'white' }}>Marija </Typography>
                    <Typography sx={{ fontFamily: "'Cinzel Decorative', cursive", fontSize: '7rem', color: 'gold', fontWeight: 700, opacity: .9 }}>&</Typography>
                    <Typography sx={{ fontFamily: "'Righteous', cursive", fontSize: '5rem', color: 'white' }}>Trevor</Typography>
                </Box>
                <Box sx={{ width: '40vw', position: 'absolute', top: 450, left: 60 }}>
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
                    <Box component='img' src={Crown} sx={{ width: '6.5%', position: 'absolute', right: 170, top: 313, zIndex: 1, transform: 'rotate(30deg)' }} />
                    <Typography onClick={openDialog} onMouseEnter={() => setRSVP(!rsvp)} onMouseLeave={() => setRSVP(!rsvp)} sx={{ fontFamily: "'Righteous', cursive", fontSize: '10rem', color: rsvp ? 'gold' : 'white', position: 'absolute', top: 300, right: 200, textDecoration: 'none' }}>RSVP</Typography>
                </Box>
                <Box>
                </Box>
            </Box>
            {open ?
                <Dialog open={open} onClose={openDialog} PaperProps={{style: {background: '#212121', border: '50px solid transparent', borderImage: `url(${Border}) 100 stretch`}}}>
                    <DialogTitle id="alert-dialog-title" sx={{textAlign: 'center', color: 'white', fontFamily: "'Poiret One', cursive;", fontSize: '4rem'}}>
                        {"RSVP"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description" sx={{textAlign: 'center', color: 'white', fontFamily: "'Poiret One', cursive;", fontSize: '1.2rem', mb: '4vh' }}>
                            We are so excited to have you! Please let us know if you will be attending with a guest -- as this will help us plan accordingly.
                        </DialogContentText>
                        <SignUp open={open} setOpen={setOpen} />
                    </DialogContent>
                </Dialog> : null}
        </>
    )
}