import React, { Component } from 'react'
import { FaTwitch } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

class MNavbar extends Component {
    render() {
        return (
            <React.Fragment>
                <ul style={divStyle}>
                    <li style={navPosition}><a style={twIcon} href="#hoae"><FaTwitch /></a></li>
                    <li style={navPosition}><a style={navText} href="#home">Discover</a></li>
                    <li style={navPosition}><a style={navText} href="#news">Following</a></li>
                    <li style={navPosition}><a style={navText} href="#contact">Browse</a></li>
                    <li style={navPosition}><a style={navText} class="active" href="#about">Try Prime</a></li>
                    <li style={SearchPosition}><input style={seachBar} type="text" className="input" placeholder="Search..." /></li>
                    <li style={navPosition}><a style={navText} href="#hoae"><FaSearch /></a></li>

                 </ul>
            </React.Fragment>
        )
    }
}
const divStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  overFlow: 'hidden',
  backgroundColor: '#212126',
  width: '100%',
  height: '3.2rem',
  };
const navPosition = {
    float: 'left',
    //backgroundColor: 'red'

}
const SearchPosition = {
    float: 'left',
    //backgroundColor: 'red',
    paddingLeft: '50px',
    //borderRadius: '25px',

}
const seachBar = {
    navPosition,
    marginTop: '0.5rem',
    width: '16rem',
    height: '2rem',
    fontSize: '20px',
    backgroundColor: '#333',
    color: '#fff',
    paddingLeft: '0.3rem',
    left: '10rem',
    borderRadius: '5px',
    border: '1px solid #333',
    boxShadow: 'none',
    boxSizing: 'border-box',


    //backgroundColor: 'green'
}
const navText = {
  display: 'block',
  color: 'white',
  textAlign: 'center',
  padding: '14px 10px',
  textDecoration: 'none',
  fontSize: '0.9rem',
  height: '100%'
}
const twIcon = {
    display: 'block',
    color: '#9147ff',
    textAlign: 'center',
    padding: '18px 8px',
    textDecoration: 'none',
    fontSize: '1.7rem',
    marginTop: '-4px',
    //backgroundColor: 'green',
  }
  const pStyle = {
    fontSize: '8px',
    textAlign: 'center'
  };
export default MNavbar;