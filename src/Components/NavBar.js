import React from 'react'
import Logo from '../Logo/Logo.png'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
        return (
            
                <div className = "NavBar">
                    <div className="NavBar_Div"> 
                        <li style={{marginLeft: 0}}>
                            <Link to="/">
                                <img src={Logo}/>
                           </Link> 
                        </li>
                        <li>
                           <Link to="/Find-A-Home">
                                <span>Find A Home</span>
                           </Link> 
                        </li>
                        <li>
                            <Link to="/Sell-A-Property">
                                <span>Sell A Property</span>
                           </Link> 
                        </li>
                        <li>
                            <Link to="/Manage-Rentals">
                                <span>Manage Rentals</span>
                           </Link> 
                        </li>
                        <div className="NavBar_Right_Div">
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