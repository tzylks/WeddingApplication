export default function AppBar() {
    return(
        <div style={{background: 'transparent', position: 'sticky', fontFamily: "'Righteous', cursive", color: 'white', fontSize: '3rem'}}>
            <div style={{display: 'flex', flexDirection: 'row', columnGap: '150px'}}>
                <span style={{color: 'gold', marginLeft: '1vw'}}>// </span>
                <span style={{marginLeft: '30vw'}}>About </span>
                <span>RSVP </span>
                <span>Location</span>
            </div>
        </div>
    )
}