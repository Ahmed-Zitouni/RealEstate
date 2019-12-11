import React , { createContext, useReducer, useEffect} from 'react';
import  { HouseReducer } from '../reducer/HouseReducer';


const HouseContext = createContext();

const HouseContextProvider = (props) => {
    const [houses, dispatch] = useReducer(HouseReducer, { Homes:[{ 
    id: 0,
    street: '91 Beech St APT 37',
    zipcode: '07032',
    zpid: '0709932',
    city: 'Kearny',
    state: 'NJ',
    latitude: 40.796029,
    longitude: -74.145156,
    useCode: 'Apartment',
    bedrooms: '1',
    bathrooms: '1.0',
    finishedSqFt: '745',
    parkingType: 'On-street',
    rent: '300,000',
    images:
     [ 'https://photos.zillowstatic.com/p_d/ISe4o5kok10qxh0000000000.jpg',
       'https://photos.zillowstatic.com/p_d/ISe4o5kok10qxh0000000000.jpg',
       'https://photos.zillowstatic.com/p_d/IS2jr4xytnkvyh0000000000.jpg',
       'https://photos.zillowstatic.com/p_d/ISynggd29jf9zh0000000000.jpg',
       'https://photos.zillowstatic.com/p_d/IS2z74ccsmikzh0000000000.jpg' ],
    desc:
     'Welcome Home to Beech Kearny Apartments' }, 
     { 
      id: 1,
      street: '91 Beech St APT 37',
      zipcode: '07032',
      city: 'Kearny',
      state: 'NJ',
      zpid: '07099202',
      latitude: 40.719029,
      longitude: -74.115156,
      useCode: 'Apartment',
      bedrooms: '1',
      bathrooms: '1.0',
      finishedSqFt: '745',
      parkingType: 'On-street',
      rent: '460,000',
      images:
       [ 'https://photos.zillowstatic.com/p_d/IS2jr4xytnkvyh0000000000.jpg',
         'https://photos.zillowstatic.com/p_d/ISe4o5kok10qxh0000000000.jpg',
         'https://photos.zillowstatic.com/p_d/IS2jr4xytnkvyh0000000000.jpg',
         'https://photos.zillowstatic.com/p_d/ISynggd29jf9zh0000000000.jpg',
         'https://photos.zillowstatic.com/p_d/IS2z74ccsmikzh0000000000.jpg' ],
      desc:
       'Welcome Home to Beech Kearny Apartments' }, 
      { 
      id: 2,
      street: '91 Beech St APT 37',
      zipcode: '07032',
      city: 'Kearny',
      state: 'NJ',
      zpid: '92929202',
      latitude: 40.769100,
      longitude: -74.115116,
      useCode: 'Apartment',
      bedrooms: '1',
      bathrooms: '1.0',
      finishedSqFt: '745',
      rent: '500,000',
      numFloors: '5',
      parkingType: 'On-street',
      appliances: 'Range / Oven, Refrigerator, Freezer',
      floorCovering: 'Hardwood',
      rooms: 'Walk-in closet',
      images:
       [ 'https://photos.zillowstatic.com/p_d/IS2f0lkhx8o6fi0000000000.jpg',
         'https://photos.zillowstatic.com/p_d/ISe4o5kok10qxh0000000000.jpg',
         'https://photos.zillowstatic.com/p_d/IS2jr4xytnkvyh0000000000.jpg',
         'https://photos.zillowstatic.com/p_d/ISynggd29jf9zh0000000000.jpg',
         'https://photos.zillowstatic.com/p_d/IS2z74ccsmikzh0000000000.jpg' ],
      desc:
      'Welcome Home to Beech Kearny Apartments' },
      { 
        id: 3,
        street: '91 Beech St APT 37',
        zipcode: '07032',
        city: 'Kearny',
        state: 'NJ',
        zpid: '0290102',
        latitude: 40.769029,
        longitude: -74.145156,
        useCode: 'Apartment',
        bedrooms: '1',
        bathrooms: '1.0',
        finishedSqFt: '745',
        rent: '300,000',
        numFloors: '5',
        parkingType: 'On-street',
        appliances: 'Range / Oven, Refrigerator, Freezer',
        floorCovering: 'Hardwood',
        rooms: 'Walk-in closet',
        images:
         [ 'https://photos.zillowstatic.com/p_d/IS2z74ccsmikzh0000000000.jpg',
           'https://photos.zillowstatic.com/p_d/ISe4o5kok10qxh0000000000.jpg',
           'https://photos.zillowstatic.com/p_d/IS2jr4xytnkvyh0000000000.jpg',
           'https://photos.zillowstatic.com/p_d/ISynggd29jf9zh0000000000.jpg',
           'https://photos.zillowstatic.com/p_d/IS2z74ccsmikzh0000000000.jpg' ],
        desc:
        'Welcome Home to Beech Kearny Apartments' }], Display:{DashBoard : true}, Input:{passed:true}}
      );
    useEffect(() => {
      localStorage.setItem('books', JSON.stringify(houses));
    }, [houses]);
    return (
        <HouseContext.Provider value={{houses, dispatch}}>
            {props.children}
        </HouseContext.Provider>
    )
}
 
export {HouseContextProvider, HouseContext}