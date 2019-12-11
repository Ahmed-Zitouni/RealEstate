import React, {useContext} from 'react';

import { FaToilet } from 'react-icons/fa';
import { FaBed } from 'react-icons/fa';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { HouseContext } from '../context/HouseContext';


const HouseListing = ({ x, elem }) => {
    const {houses,dispatch} = useContext(HouseContext)
    let house = houses.Homes[elem];
    const MoreInfo = () => {
        dispatch({type:'HOUSE_INFO', dash: false, Item: elem})
    }
    return ( 
        <div onClick = {() => MoreInfo()} className = "DashBoardItems">
                <div className = "DashBoardImg">
                    <img src = {house.images[0]} name={elem}/>
                </div>
                <div className = "DashBoardMainData">
                    <li> {house.street}</li>
                    <li>{house.city}, {house.state}</li>
                    <li>${house.amount ? house.amount : house.rent}</li>
                </div>
            <div style = {underline}/>
            <div className = "DashBoardIcons">
                <li style={{paddingLeft: 0}}><FaBed style = {Icons}/> {house.bedrooms}</li>
                <li><FaToilet style = {Icons}/> {house.bathrooms}</li>
                <li><FaExternalLinkSquareAlt style = {Icons}/>{house.finishedSqFt} ft<sup>2</sup></li>
            </div>
        </div>
     );
}
const Icons = {
    style: { verticalAlign: 'middle' },
    padding: '0 0.2em 0 0.2em',
}
const underline = {
    borderBottom: '2px solid #DEE1E1',
    width: '87%',
    marginLeft: '4%',
}
export default HouseListing;