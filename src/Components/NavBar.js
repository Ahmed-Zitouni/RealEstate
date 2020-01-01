import React from 'react'
import Logo from '../Logo/Logo.png'
import { NavLink, Link } from 'react-router-dom'

const NavBar = (props) => {
        return (
            
                <div className = "NavBar">
                    <div className="NavBar_Div"> 
                        <li style={{marginLeft: 0}}>
                            <Link to="/">
                                <img src={Logo} alt="Logo"/>
                           </Link> 
                        </li>
                        <li>
                           <NavLink  to="/Find-A-Home"
                            activeStyle={{
                            color: '#0acc3c',
                            fontWeight: '600',
                            fontSize: '1.07rem'
                          }}>
                                <span>Buy</span>
                           </NavLink > 
                        </li>
                        <li>
                            <NavLink to="/Sell-A-Property"
                            activeStyle={{
                                color: '#0acc3c',
                                fontWeight: '600',
                                fontSize: '1.07rem'
                              }}>
                                <span>Sell</span>
                           </NavLink > 
                        </li>
                        <li>
                            <NavLink to="/Manage-Rentals"
                            activeStyle={{
                                color: '#0acc3c',
                                fontWeight: '600',
                                fontSize: '1.07rem'
                              }}>
                                <span>Rentals</span>
                           </NavLink > 
                        </li>
                        <div className="NavBar_Right_Div">
                        </div>
                    </div>
                </div>
        )
}
export default NavBar;