import React , { createContext, useReducer, useEffect} from 'react';
import  { HouseReducer } from '../reducer/HouseReducer';
import { GetHouseInfo } from '../utilities/HouseSearch';

const HouseContext = createContext();

const HouseContextProvider = (props) => {
    const [houses, dispatch] = useReducer(HouseReducer, { Homes:[
      {
        "city": "San Francisco",
        "state": "CA",
        "street": "84 Pond St",
        "useCode": "MultiFamily2To4",
        "bedrooms": "1",
        "bathrooms": "1.0",
        "finishedSqFt": "600",
        "zpid": "2101515056",
        "rentzestimate": "2,350",
        "zestimate": "629,924",
        "index": 0,
        "images": [
          "https://photos.zillowstatic.com/p_d/ISegdl251bwlqk1000000000.jpg",
          "https://photos.zillowstatic.com/p_d/ISmmfxkb5j4jqk1000000000.jpg",
          "https://photos.zillowstatic.com/p_d/IS6ab9kyw2ooqk1000000000.jpg"
        ],
        "desc": "No description provided",
        "parkingType": "On-street",
        "yearBuilt": "Unknown",
        "zipcode": "94114",
        "latitude": 37.648635,
        "longitude": -122.430063
      },
      {
        "city": "San Francisco",
        "state": "CA",
        "street": "1165 Francisco St APT 08",
        "useCode": "MultiFamily2To4",
        "bedrooms": "2",
        "bathrooms": "1.0",
        "finishedSqFt": "",
        "zpid": "2089055558",
        "rentzestimate": "4,100",
        "zestimate": "1,216,387",
        "index": 20,
        "images": [
          "https://photos.zillowstatic.com/p_d/IS6eyxhsn74k880000000000.jpg",
          "https://photos.zillowstatic.com/p_d/ISybbg8u6lejyh0000000000.jpg",
          "https://photos.zillowstatic.com/p_d/ISmq2mi5wnke880000000000.jpg",
          "https://photos.zillowstatic.com/p_d/IS2btcucppl75k1000000000.jpg",
          "https://photos.zillowstatic.com/p_d/ISy7wlzljzvm880000000000.jpg"
        ],
        "desc": "No description provided",
        "parkingType": "On-street",
        "yearBuilt": "Unknown",
        "zipcode": "94109",
        "latitude": 37.80304,
        "longitude": -122.42422,
        "numUnits": "12"
      },
      {
        "city": "San Francisco",
        "state": "CA",
        "street": "1500 Francisco St APT 7",
        "useCode": "Condominium",
        "bedrooms": "2",
        "bathrooms": "1.0",
        "finishedSqFt": "968",
        "zpid": "15070378",
        "rentzestimate": "4,600",
        "zestimate": "1,205,468",
        "index": 25,
        "images": [
          "https://photos.zillowstatic.com/p_d/ISu8e9hjfojmqm0000000000.jpg",
          "https://photos.zillowstatic.com/p_d/IS2fglzpjwrjqm0000000000.jpg",
          "https://photos.zillowstatic.com/p_d/ISm2cxycbgbpqm0000000000.jpg",
          "https://photos.zillowstatic.com/p_d/ISew9lg6783sqm0000000000.jpg",
          "https://photos.zillowstatic.com/p_d/IS6q79yz20vuqm0000000000.jpg"
        ],
        "desc": "No description provided",
        "parkingType": "On-street",
        "yearBuilt": "1924",
        "zipcode": "94123",
        "latitude": 37.80271,
        "longitude": -122.430168,
        "numFloors": "2",
        "numRooms": "6",
        "exteriorMaterial": "Stucco",
        "coveredParkingSpaces": "1",
        "appliances": "Garbage disposal, Microwave, Range / Oven, Refrigerator, Washer, Dishwasher, Freezer",
        "floorCovering": "Hardwood",
        "rooms": "Breakfast nook, Walk-in closet, Office, Pantry"
      },
      {
        "city": "San Francisco",
        "state": "CA",
        "street": "2230 Francisco St APT 108",
        "useCode": "Condominium",
        "bedrooms": "1",
        "bathrooms": "1.0",
        "finishedSqFt": "1100",
        "zpid": "15080044",
        "rentzestimate": "4,695",
        "zestimate": "1,324,020",
        "index": 13,
        "images": [
          "https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.801325,-122.44201&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c"
        ],
        "desc": "No description provided",
        "parkingType": "Garage - Attached",
        "yearBuilt": "1930",
        "zipcode": "94123",
        "latitude": 37.801325,
        "longitude": -122.44201,
        "numFloors": "3",
        "numRooms": "4",
        "basement": "Finished",
        "roof": "Asphalt",
        "exteriorMaterial": "Wood",
        "view": "City",
        "coveredParkingSpaces": "1",
        "heatingSources": "Gas",
        "heatingSystem": "Radiant",
        "coolingSystem": "None",
        "appliances": "Dishwasher, Dryer, Microwave, Range / Oven, Refrigerator, Washer, Freezer, Garbage disposal",
        "floorCovering": "Hardwood, Tile",
        "rooms": "Dining room, Family room, Pantry, Walk-in closet",
        "architecture": "Spanish",
        "floorNumber": "2"
      },
      {
        "city": "San Francisco",
        "state": "CA",
        "street": "1500 Francisco St APT 8",
        "useCode": "Condominium",
        "bedrooms": "1",
        "bathrooms": "1.0",
        "finishedSqFt": "767",
        "zpid": "15070379",
        "rentzestimate": "3,854",
        "zestimate": "1,046,615",
        "index": 24,
        "images": [
          "https://photos.zillowstatic.com/p_d/ISlexldh9v9bbu1000000000.jpg",
          "https://photos.zillowstatic.com/p_d/ISxn8y9dyuvlvt1000000000.jpg",
          "https://photos.zillowstatic.com/p_d/ISph6mr6umnovt1000000000.jpg",
          "https://photos.zillowstatic.com/p_d/IStkzxvnd3i8bu1000000000.jpg",
          "https://photos.zillowstatic.com/p_d/IShb4a90qefrvt1000000000.jpg"
        ],
        "desc": "No description provided",
        "parkingType": "None",
        "yearBuilt": "1924",
        "zipcode": "94123",
        "latitude": 37.80271,
        "longitude": -122.430168,
        "numFloors": "2",
        "exteriorMaterial": "Stucco",
        "appliances": "Dishwasher",
        "floorCovering": "Hardwood, Tile",
        "architecture": "Loft",
        "numUnits": "12"
      },
      {
        "city": "San Francisco",
        "state": "CA",
        "street": "2230 Francisco St APT 101",
        "useCode": "MultiFamily2To4",
        "bedrooms": "1",
        "bathrooms": "1.0",
        "finishedSqFt": "1068",
        "zpid": "15080037",
        "rentzestimate": "4,500",
        "zestimate": "1,206,633",
        "index": 4,
        "images": [
          "https://photos.zillowstatic.com/p_d/IShmw2rf7c7fkz.jpg",
          "https://photos.zillowstatic.com/p_d/IShmw5e8mt2cv7.jpg",
          "https://photos.zillowstatic.com/p_d/IS52l34f91p0uc0000000000.jpg",
          "https://photos.zillowstatic.com/p_d/IS1vgs16so6ind0000000000.jpg",
          "https://photos.zillowstatic.com/p_d/IStoegjzngyknd0000000000.jpg"
        ],
        "desc": "No description provided",
        "parkingType": "Garage - Attached",
        "yearBuilt": "1930",
        "zipcode": "94123",
        "latitude": 37.801325,
        "longitude": -122.44201,
        "lotSizeSqFt": "6874",
        "numFloors": "1",
        "numRooms": "4",
        "basement": "None",
        "roof": "Asphalt",
        "exteriorMaterial": "Stucco",
        "coveredParkingSpaces": "1",
        "heatingSources": "Gas",
        "heatingSystem": "Forced air",
        "coolingSystem": "None",
        "appliances": "Freezer, Refrigerator, Range / Oven, Microwave",
        "floorCovering": "Hardwood, Tile",
        "rooms": "Walk-in closet, Master bath, Pantry, Dining room",
        "architecture": "Other",
        "floorNumber": "1",
        "numUnits": "1"
      },
      {
        "city": "San Francisco",
        "state": "CA",
        "street": "2230 Francisco St APT 102",
        "useCode": "Condominium",
        "bedrooms": "1",
        "bathrooms": "1.0",
        "finishedSqFt": "1068",
        "zpid": "15080038",
        "rentzestimate": "5,000",
        "zestimate": "1,348,300",
        "index": 5,
        "images": [
          "https://photos.zillowstatic.com/p_d/IS12rvtze63hrxf.jpg",
          "https://photos.zillowstatic.com/p_d/ISyrvq6tg0p3e20000000000.jpg",
          "https://photos.zillowstatic.com/p_d/ISqlteomcsg6e20000000000.jpg",
          "https://photos.zillowstatic.com/p_d/IS12rvtza819nz7.jpg",
          "https://photos.zillowstatic.com/p_d/ISvat6iywy23z7.jpg"
        ],
        "desc": "No description provided",
        "parkingType": "Garage - Attached",
        "yearBuilt": "1930",
        "zipcode": "94123",
        "latitude": 37.801325,
        "longitude": -122.44201,
        "lotSizeSqFt": "6838",
        "yearUpdated": "2009",
        "numFloors": "4",
        "numRooms": "5",
        "basement": "None",
        "roof": "Tile",
        "exteriorMaterial": "Stucco",
        "view": "City, Water",
        "coveredParkingSpaces": "12",
        "heatingSources": "Other",
        "heatingSystem": "Radiant",
        "coolingSystem": "None",
        "appliances": "Dishwasher, Freezer, Garbage disposal, Microwave, Range / Oven, Refrigerator",
        "floorCovering": "Hardwood",
        "rooms": "Dining room, Family room, Walk-in closet, Pantry",
        "architecture": "Loft",
        "floorNumber": "1",
        "numUnits": "12"
      },
      {
        "city": "San Francisco",
        "state": "CA",
        "street": "84 Pond St",
        "useCode": "MultiFamily2To4",
        "bedrooms": "1",
        "bathrooms": "1.0",
        "finishedSqFt": "600",
        "zpid": "2101515056",
        "rentzestimate": "2,350",
        "zestimate": "629,924",
        "index": 1,
        "images": [
          "https://photos.zillowstatic.com/p_d/ISmmfxkb5j4jqk1000000000.jpg",
          "https://photos.zillowstatic.com/p_d/ISegdl251bwlqk1000000000.jpg",
          "https://photos.zillowstatic.com/p_d/IS6ab9kyw2ooqk1000000000.jpg"
        ],
        "desc": "No description provided",
        "parkingType": "On-street",
        "yearBuilt": "Unknown",
        "zipcode": "94114",
        "latitude": 37.648635,
        "longitude": -122.430063
      },
      {
        "city": "San Francisco",
        "state": "CA",
        "street": "1500 Francisco St APT 11",
        "useCode": "Condominium",
        "bedrooms": "3",
        "bathrooms": "2.0",
        "finishedSqFt": "1787",
        "zpid": "15070382",
        "rentzestimate": "7,500",
        "zestimate": "1,979,368",
        "index": 21,
        "images": [
          "https://photos.zillowstatic.com/p_d/IS23ny0hfkbgtu0000000000.jpg",
          "https://photos.zillowstatic.com/p_d/IS237uq9uc9c6o0000000000.jpg",
          "https://photos.zillowstatic.com/p_d/ISyzp3vu24wh9o0000000000.jpg",
          "https://photos.zillowstatic.com/p_d/ISe0pjgiyzph8r1000000000.jpg",
          "https://photos.zillowstatic.com/p_d/ISybrsc6imrz5v1000000000.jpg"
        ],
        "desc": "No description provided",
        "parkingType": "Garage - Attached",
        "yearBuilt": "1924",
        "zipcode": "94123",
        "latitude": 37.80271,
        "longitude": -122.430168,
        "numFloors": "1",
        "numRooms": "6",
        "exteriorMaterial": "Stucco",
        "view": "City",
        "coveredParkingSpaces": "1",
        "appliances": "Refrigerator",
        "floorCovering": "Hardwood",
        "rooms": "Dining room",
        "architecture": "Contemporary",
        "numUnits": "11"
      },
      {
        "city": "San Francisco",
        "state": "CA",
        "street": "725 Pine St San Francisco # CA",
        "useCode": "MultiFamily2To4",
        "bedrooms": "1",
        "bathrooms": "1.0",
        "finishedSqFt": "600",
        "zpid": "2083765447",
        "rentzestimate": "3,695",
        "zestimate": "776,964",
        "index": 3,
        "images": [
          "https://photos.zillowstatic.com/p_d/ISuoy76zqk33940000000000.jpg",
          "https://photos.zillowstatic.com/p_d/ISmq2yzatg3e640000000000.jpg",
          "https://photos.zillowstatic.com/p_d/ISmiwvnsmcv5940000000000.jpg",
          "https://photos.zillowstatic.com/p_d/ISecuj5mi4n8940000000000.jpg",
          "https://photos.zillowstatic.com/p_d/IS66s7nfeweb940000000000.jpg"
        ],
        "desc": "No description provided",
        "parkingType": "Garage - Detached",
        "yearBuilt": "Unknown",
        "zipcode": "94108",
        "latitude": 37.791013,
        "longitude": -122.407696,
        "numRooms": "3",
        "view": "None",
        "coveredParkingSpaces": "1",
        "heatingSources": "None",
        "coolingSystem": "None",
        "appliances": "Microwave, Range / Oven, Refrigerator, Washer, Dishwasher, Dryer",
        "rooms": "Laundry room"
      },
      {
        "city": "San Francisco",
        "state": "CA",
        "street": "2230 Francisco St APT 111",
        "useCode": "Condominium",
        "bedrooms": "1",
        "bathrooms": "1.0",
        "finishedSqFt": "1092",
        "zpid": "15080047",
        "rentzestimate": "4,600",
        "zestimate": "1,300,576",
        "index": 17,
        "images": [
          "https://photos.zillowstatic.com/p_d/ISt4ntbmizdcws0000000000.jpg",
          "https://photos.zillowstatic.com/p_d/IS9tkg4nfa471w1000000000.jpg",
          "https://photos.zillowstatic.com/p_d/IS1ni4mgb2w91w1000000000.jpg",
          "https://photos.zillowstatic.com/p_d/IStggs3a7unc1w1000000000.jpg",
          "https://photos.zillowstatic.com/p_d/ISlaegl33mff1w1000000000.jpg"
        ],
        "desc": "No description provided",
        "parkingType": "On-street",
        "yearBuilt": "1930",
        "zipcode": "94123",
        "latitude": 37.801325,
        "longitude": -122.44201,
        "lotSizeSqFt": "1045",
        "numFloors": "3",
        "numRooms": "4",
        "basement": "None",
        "roof": "Other",
        "exteriorMaterial": "Stucco",
        "view": "City",
        "coveredParkingSpaces": "10",
        "heatingSystem": "Radiant",
        "appliances": "Dishwasher, Dryer, Freezer, Garbage disposal, Range / Oven, Refrigerator, Washer",
        "floorCovering": "Hardwood",
        "rooms": "Dining room",
        "architecture": "Spanish",
        "numUnits": "12"
      }
    ], Display:{DashBoard : true}, Input:{passed:true}}
      );
    useEffect(() => {
      localStorage.setItem('books', JSON.stringify(houses));
    }, [houses]);
    useEffect(() => {
      //console.log(GetData('884 devon', 'Kearny', "nj"))
      /*
      if(houses.Homes.length < 1) {
        dispatch({type:'LOADING', loading: true})
        let UserInfo = {
          addr: "20 devon st",
          city: "East rutherford",
          sta: "NJ",
        }
        GetHouseInfo(UserInfo)
        .then(data => { 
          console.log(data)
          if (data) {
              dispatch({type:'SEARCH_ZPID', addr:UserInfo.addr, city:UserInfo.city, sta:UserInfo.sta , info: data, passed: true, loading: false})
          } else {
              dispatch({type:'SEARCH_ZPID', addr:UserInfo.addr, city:UserInfo.city, sta:UserInfo.sta , info: [], passed: false, loading: false})
          }
        })
      }
    }, []);
    */
  })
    return (
        <HouseContext.Provider value={{houses, dispatch}}>
            {props.children}
        </HouseContext.Provider>
    )
}
 
export {HouseContextProvider, HouseContext}