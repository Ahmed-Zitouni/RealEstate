import React , { createContext, useReducer, useEffect} from 'react';
import  { HouseReducer } from '../reducer/HouseReducer';
import { GetHouseInfo } from '../utilities/HouseSearch';

const HouseContext = createContext();

const HouseContextProvider = (props) => {
    const [houses, dispatch] = useReducer(HouseReducer, { Homes:[], Display:{DashBoard : true}, Input:{passed:true}}
      );
    useEffect(() => {
      localStorage.setItem('books', JSON.stringify(houses));
    }, [houses]);
    useEffect(() => {
      //console.log(GetData('884 devon', 'Kearny', "nj"))
      if(houses.Homes.length < 1) {
        dispatch({type:'LOADING', loading: true})
        let UserInfo = {
          addr: "20 devon st",
          city: "East rutherford",
          sta: "NJ",
        }
        GetHouseInfo(UserInfo)
        .then(data => { 
          if (data) {
              dispatch({type:'SEARCH_ZPID', addr:UserInfo.addr, city:UserInfo.city, sta:UserInfo.sta , info: data, passed: true, loading: false})
          } else {
              dispatch({type:'SEARCH_ZPID', addr:UserInfo.addr, city:UserInfo.city, sta:UserInfo.sta , info: [], passed: false, loading: false})
          }
        })
      }
    }, []);
    return (
        <HouseContext.Provider value={{houses, dispatch}}>
            {props.children}
        </HouseContext.Provider>
    )
}
 
export {HouseContextProvider, HouseContext}