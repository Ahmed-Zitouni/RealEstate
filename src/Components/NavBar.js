import React from 'react'
import Logo from '../Logo/Logo.png'

const NavBar = (props) => {
        return (
            
                <div className = "NavBar">
                    <div className="NavBar_Div"> 
                        <li style={{marginLeft: 0}}><a href="#contact"><img src={Logo}/></a></li>
                        <li><a href="#home"><span>Find A Home</span></a></li>
                        <li><a href="#news"><span>Sell</span></a></li>
                        <li><a href="#hoae"><span>Buy</span></a></li>
                        <li><a className="active" href="#about"><span>Manage Rentals</span></a></li>
                        <div className="NavBar_Right_Div">
                            <li><a href="#houe"><span>Help</span></a></li>
                            <li><a href="#hoae"><span>Login</span></a></li>
                        </div>
                    </div>
                </div>
        )
}
const LogoIc = {
    display: 'block',
    color: 'rgb(18, 180, 124)',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '3.2vw',
    width: '20vw',
    fontWeight: 'bold'
}
export default NavBar;