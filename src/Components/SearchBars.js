import React, { useContext, useState } from 'react';
import { HouseContext } from '../context/HouseContext';
import { GetHouseInfo } from '../utilities/HouseSearch';
import { FaSearch } from 'react-icons/fa';


const SearchBars = () => {

    const {houses, dispatch} = useContext(HouseContext)
    const [address , setAddress] = useState('');
    const [city , setCity] = useState('');
    const [sta , setSta] = useState('');
    const [AddresErr, setAddresErr] = useState('1px solid #efefef');
    const [cityErr, setCityErr] = useState('1px solid #efefef');
    const [stateErr, setStateErr] = useState('1px solid #efefef');


    let AddressBar = {
        fontSize: '90%',
        marginLeft: '20px',
        width: '100%',
    }
    let AddressErr = {
        border: AddresErr
    }
    let CityErr = {
        border: cityErr
    }
    let StateErr = {
        border: stateErr
    }
    let ValidText = "1px solid #efefef"
    let InvalidText = "1px solid #f05757"

    let SearchHouse = (e) => {
        e.preventDefault();
        dispatch({type:'LOADING', loading: true})
        if (address && city && sta) {

        GetHouseInfo({addr: address.trim(), city: city.trim(), sta: sta.trim()})
            .then(data => { 
                console.log("Final Stuff", data)
                if (data) {
                    dispatch({type:'SEARCH_ZPID', addr:address, city:city, sta:sta , info: data, passed: true, loading: false})
                } else {
                    console.log("fone")
                    dispatch({type:'SEARCH_ZPID', addr:address, city:city, sta:sta , info: houses.Homes, passed: false, loading: false})
                }
            })
        } else {
            if (!address) {
                setAddresErr(InvalidText)
            }
            if (!city) {
                setCityErr(InvalidText)
            }
            if (!sta)
                setStateErr(InvalidText)
            }
        }
    return (
        <div className={"SearchBars"}>
            <div>
                <form onSubmit={SearchHouse}>
                    <li style = {AddressErr}><FaSearch style = {SearchIcon}/><input style={AddressBar} type="text" placeholder="Address" maxLength="40" value={address} onChange={(e) => {setAddress(e.target.value); setAddresErr(ValidText)}}/></li>
                    <li style = {CityErr}><input type="text" placeholder="City" value={city} maxLength="20" onChange={(e) => {setCity(e.target.value); setCityErr(ValidText)}}/></li>
                    <li style = {StateErr}><input type="text" placeholder="State" value={sta} maxLength="2" onChange={(e) => {setSta(e.target.value); setStateErr(ValidText)}} /></li>
                    <input type="submit" value="Search"/>
                </form>
            </div>
        </div>        
    )
}

const SearchIcon = {
    position : 'absolute',
    width: '1rem',
    height: '1rem',
    top: '27%',
    left: '10px',
    
}


export default SearchBars;