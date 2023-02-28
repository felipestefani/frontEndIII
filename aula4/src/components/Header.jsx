const Header = () => {
    return (
        <header style={header}>
            <div style={{backgroundColor:'white', width:'50px', height:'50px', borderRadius:'100%', margin:'0 0 0 40px'}}></div>
            <ul style={{display:'flex', listStyle:'none', height:'50px', alignItems:'center'}}>
                <li style={{margin:'0 20px', }}><a href="#" style={anchor}>Home</a></li>
                <li style={{margin:'0 20px', }}><a href="#" style={anchor}>Contato</a></li>
                <li style={{margin:'0 20px', }}><a href="#" style={anchor}>Quem Somos</a></li>
            </ul>
        </header>
    )
}

const anchor = {
    color:'white',
    textDecoration:'none',
    fontSize:'22px'
}

const header = {
    display:'flex',
    justifyContent:'space-between',
    backgroundColor:'red',
    padding:'20px 0'
}

export default Header;