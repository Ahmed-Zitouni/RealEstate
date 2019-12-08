import React, { useContext, useState } from 'react';
import { HouseContext } from '../context/HouseContext';
import { GetHouseInfo } from '../utilities/HouseSearch';

const SearchBars = () => {


    const {houses, dispatch} = useContext(HouseContext)
    const [address , setAddress] = useState('');
    const [city , setCity] = useState('');
    const [sta , setSta] = useState('');


    let SearchHouse = (e) => {
        e.preventDefault();
        GetHouseInfo({addr: address.trim(), city: city.trim(), sta: sta.trim()})
            .then(data => { 
                console.log("Final Stuff", data)
                if (data) {
                    dispatch({type:'SEARCH_ZPID', addr:address, city:city, sta:sta , info: data, passed: true})
                } else {
                    dispatch({type:'SEARCH_FAILED', addr:address, city:city, sta:sta , info: houses.Homes, passed: false})
                }
            })
        console.log(address);
    }
    return (
        <div className={"SearchBars"}>
            <div>
                <form onSubmit={SearchHouse}>
                    <li><input style={AddressBar} type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}/></li>
                    <li><input style={CityBar} type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)}/></li>
                    <li><input style={StateBar} type="text" placeholder="State" value={sta} onChange={(e) => setSta(e.target.value)} /></li>
                    <input type="submit" placeholder="Submit"/>
                </form>
            </div>
        </div>        
    )
}

const SearchButton = {
    /*
    backgroundColor: '#00b074', 
    border: 'none',
    color: 'white',
    marginLeft: '20px',
    padding: '8px 30px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    borderRadius: '2px',
    border: 'solid rgba(0,0,0,.4) 1px'.
    */
}
const searchText = {
    fontSize: '90%',
}
const AddressBar = {
    ...searchText,
    marginLeft: '8%',
    width: '100%',
}
const CityBar = {
    ...searchText,
    width: '100%',
}
const StateBar = {
    ...searchText,
    width: '100%',
}


export default SearchBars;