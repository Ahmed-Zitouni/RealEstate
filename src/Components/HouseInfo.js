import React, { useState, useContext } from 'react';
import { HouseContext } from '../context/HouseContext';
import { FaToilet, FaBed, FaImage, FaAngleDoubleRight, FaChevronRight } from 'react-icons/fa';

import { Gallery, GalleryImage } from 'react-gesture-gallery';

function HouseInfo(props) {

    const [imageNum, setImageNum] = useState(0);
    const {houses, dispatch} = useContext(HouseContext)
    const num = houses.Display.Item;
    console.log('OOOO',houses);
    let Home = houses.Homes[num];

    //{<div style={{backgroundImage : `url('')`}}></div>}
    return (
    <div className="HouseInfo-Wrap">
        <div className="HouseInfo">
            <div className="HouseInfo-small">
                <img src={Home.images[0]} alt={Home.state}/>
            </div>
            <div className="HouseInfo-small-o">
                <img src={Home.images[0]} alt={Home.city}/>
                <div>
                    <div><FaImage style={Image}/></div>
                    <span>{Home.images.length}</span>
                </div>
            </div>
            <Gallery 
            index={imageNum}
            onRequestChange={i => {
                setImageNum(i);
            }}
            >
            {Home.images.map(image => (
                <GalleryImage objectFit="cover" key={image} src={image} />
            ))}
            </Gallery>
            <li style={{gridArea: 'mt'}}>{Home.street}, <span>{Home.state}</span></li>
            <li style={{gridArea: 'pt'}}>${Home.rent}</li>
            <li style={{gridArea: 'st'}}>{Home.city}</li>
            <ul style={{gridArea: 'd1'}}>
                <li>Bedrooms</li>
                <li>{Home.bedrooms} <FaBed style = {Icons}/></li>
            </ul>
            <ul style={{gridArea: 'd2'}}>
                <li>Bathrooms</li>
                <li>{Home.bathrooms} <FaToilet style = {Icons}/></li>
            </ul>
            <ul style={{gridArea: 'd3'}}>
                <li>Area</li>
                <li>{Home.finishedSqFt} ft<sup>2</sup></li>
            </ul>
            <ul style={{gridArea: 'd4'}}>
                <li>Built</li>
                <li>{Home.yearBuilt}</li>
            </ul>
            <ul style={{gridArea: 'd5'}}>
                <li>Parking</li>
                <li>{Home.parkingType}</li>
            </ul>
            <ul style={{gridArea: 'd6'}}>
                <li>Area</li>
                <li>1,042 ft</li>
            </ul>
            <li style={{gridArea: 'dt'}}>Description: </li>
            <li style={{gridArea: 'ds'}}>{Home.desc}</li>
            </div>
        </div>
    )
}
const Icons = {
    style: { verticalAlign: 'middle' },
    color: 'rgb(205, 210, 210)',
    width: '20px',
    height: '20px',
    paddingLeft: '5%',
    alignItems: 'center',
}
const Image = {
    height: '1.5rem',
    width: '1.5rem',
    color: 'white',
}
/*              
<div className="HouseInfo-big-img">
    <li>
        <img src={Home.images[imageNum]} />
        <div>
            <span>1/{Home.images.length}</span>
        </div>
        {Home.images.length > 1 && <>
        <div><IoIosArrowBack style={Arrows}/></div>
        <div><IoIosArrowForward style={Arrows}/></div>
        </>}
    </li>
</div>


width: 40px;
    height: 50px;
    border-radius: 20%;
    display: flex;
    background: rgba(255, 255, 255, 0.7);
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
*/
export default HouseInfo;