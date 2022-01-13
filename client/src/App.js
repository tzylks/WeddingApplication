import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Wedding from './wedding.jpeg'
import AppBar from './components/AppBar'
import './App.css'

function App() {
  const [users, setUsers] = useState(false);

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
      <Box sx={{ background: `url(${Wedding})`, width: { xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw' }, height: { xs: '100vh', sm: '100vh', md: '100vh', lg: '100vh', xl: '100vh' }, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', webkitBackgroundStyle: 'cover' }}>
        <AppBar />
        <Box sx={{position: 'absolute', top: 20, left: 30}}>
          <Typography sx={{fontFamily: "'Righteous', cursive", color: 'white', opacity: .1, fontSize: '17rem'}}>Zaruba</Typography>
          <Typography sx={{fontFamily: "'Righteous', cursive", color: 'white', opacity: .1, fontSize: '17rem'}}>Zylks</Typography>
          
        </Box>
        <Box sx={{ position: 'absolute', right: 800, top: 300, display: 'flex', flexDirection: 'row' }}>
          <Typography sx={{ fontFamily: "'Righteous', cursive", fontSize: '5rem', color: 'white' }}>Marija </Typography>
          <Typography sx={{ fontFamily: "'Cinzel Decorative', cursive", fontSize: '7rem', color: 'gold', fontWeight: 700, opacity: .7 }}>&</Typography>
          <Typography sx={{ fontFamily: "'Righteous', cursive", fontSize: '5rem', color: 'white' }}>Trevor</Typography>
        </Box>
        <Box sx={{width: '40vw', position: 'absolute', top: 450, left: 60}}>
          <Typography sx={{ fontFamily: "'Poiret One', cursive;", color: 'white', fontSize: '1.2rem' }}>Lorum ipsom Lorum ipsom Lorum ipsom Lorum ipsom Lorum ipsom Lorum ipsom Lorum ipsom Lorum ipsom Lorum ipsomLorum ipsom Lorum ipsom Lorum ipsom Lorum ipsom Lorum ipsom Lorum ipsom Lorum ipsom Lorum ipsom Lorum ipsom</Typography>
        </Box>
      </Box>
    </>
    // <BrowserRouter>
    //   <div className="Apsp">
    //     <Switch>
    //       <Route path="/testing">
    //         <h1>Test Route</h1>
    //       </Route>
    //       <Route path="/">
    //         <h1>Page Count: {count}</h1>
    //       </Route>
    //     </Switch>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
