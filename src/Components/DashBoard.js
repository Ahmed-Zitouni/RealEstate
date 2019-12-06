import React, { useContext } from 'react';
import { HouseContext } from '../context/HouseContext';
import HouseListing from '../Components/HouseListing';
import SimpleBarReact from "simplebar-react";

const DashBoard = () => {
    const {houses} = useContext(HouseContext)
    let Home = houses.Homes[0]
    return ( 
        <div className = "DashBoard">
            <h1>Results <span>in {Home.city}, {Home.state}</span></h1>
            <div>
                {houses.Homes.map((x,i) => <HouseListing key={i} elem = {i}/>)}
            </div>
        </div>
     );
}
export default DashBoard;