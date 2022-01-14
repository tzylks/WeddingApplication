import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

export default function AppBar() {
    const [color1, setColor1] = useState(false)
    const [color2, setColor2] = useState(false)
    const [color3, setColor3] = useState(false)

    return(
        <Box style={{background: 'transparent', position: 'fixed', fontFamily: "'Poiret One', cursive;", fontSize: '3rem', fontWeight: 'lighter', zIndex: 1}}>
            <Box style={{display: 'flex', flexDirection: 'row', columnGap: '150px', marginTop: '2vh'}}>
                <Typography style={{color: 'gold', marginLeft: '1vw', fontFamily: "'Poiret One', cursive", fontSize: '2rem'}}>// </Typography>
                <Typography onMouseEnter={() => setColor1(!color1)} onMouseLeave={() => setColor1(!color1)}style={{marginLeft: '30vw', fontFamily: "'Poiret One', cursive", fontSize: '2.4rem', color: color1 ? 'gold':'white'}}>About </Typography>
                <Typography onMouseEnter={() => setColor2(!color2)} onMouseLeave={() => setColor2(!color2)}style={{fontFamily: "'Poiret One', cursive", fontSize: '2.4rem', color: color2 ? 'gold':'white'}}>Guest List </Typography>
                <Typography onMouseEnter={() => setColor3(!color3)} onMouseLeave={() => setColor3(!color3)}style={{fontFamily: "'Poiret One', cursive", fontSize: '2.4rem', color: color3 ? 'gold':'white'}}>Location</Typography>
            </Box>
        </Box>
    )
}