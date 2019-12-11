import React, { useContext } from 'react';
import { HouseContext } from '../context/HouseContext';
import HouseListing from '../Components/HouseListing';


const DashBoard = () => {
    const {houses} = useContext(HouseContext)
    let Home = houses.Homes[0]
    let Found = houses.Input.passed
    let Result = Found ? "Results" : "No Results";
    return ( 
        <div className = "DashBoard">
            <h1>{`${Result}`} <span>in {Home.city}, {Home.state}</span></h1>
            <div>
                {houses.Homes.map((x,i) => <HouseListing key={i} elem = {i}/>)}
            </div>
        </div>
     );
}
export default DashBoard;