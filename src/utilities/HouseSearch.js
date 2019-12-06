import fetch from 'node-fetch';
//import DomParser from 'dom-parser';

let FirstH = {zpidList: 0};
let input = {}
export const GetHouseInfo = async (UserInfo) => {
  input = {addr: UserInfo.addr, city: UserInfo.city, sta: UserInfo.sta}
  return Promise.resolve(Search(input.addr, input.city, input.sta, "first"))
    .then(ndata => {
      return Search("st", input.city, input.sta, "second");
    })
    .then(zpidData => {
      return Promise.all(zpidData.map((item, index) => HouseInfo(item, index)));
    })
    .then(data => {
      console.log('test',data)
      let HomeData = [];
      data.map(home => {
        if (typeof home != "undefined") {
          if (home.state != "?") {
            home.latitude = parseFloat(home.latitude);
            home.longitude = parseFloat(home.longitude);
            if (home.bathrooms != "?") {
              home.bathrooms = parseFloat(home.bathrooms, 10);
            }
            HomeData.push(home);
          }
        }
      });
      return HomeData;
    });
};

const Search = (addr, city, state, first) => {
  let AddrUrl = `http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz1hgyxiq6fbf_6ed93&address=${addr}&citystatezip=${city}%2C+${state}&rentzestimate=true`;
  return fetch(AddrUrl)
    .then(response => response.text())
    .then(data => {
      let xml = new DOMParser().parseFromString(data, "application/xml");
      let rent = "?";
      let ZpidList = [];
      //console.log(xml)
      let Houses = xml.getElementsByTagName("result")[0].childNodes;
      if (first == "first") {
        let rentdata = xml.getElementsByTagName("rentzestimate")[0].childNodes[0].innerHTML;
        ZpidList.push({
          zpidList: xml.getElementsByTagName("result")[0].firstChild.innerHTML,//xml.getElementsByTagName("result")[0].childNodes[0].firstChild.innerHTML,
          rent: rentdata
        });
        console.log(ZpidList)
        FirstH = ZpidList[0];
      } else {
        /*
        ZpidList.push(FirstH);
        let [...arrHouse] = xml.getElementsByTagName("result");
        console.log(arrHouse)
        arrHouse.map(x => {
          let [...nodes] = x.childNodes;
          console.log(nodes);
            for(let z = 0; nodes.length > 0; z++) {
              console.log(nodes[z])
              if(nodes[z] === 'bedrooms') {
                ZpidList.push(nodes.firstChild.innerHTML)
              }
            }
        })
        */
        ZpidList.push(FirstH);
        let i = 0;
        let [...arrHouseM] = xml.getElementsByTagName("result");
        console.log(arrHouseM)
        let Home = xml.getElementsByTagName("result");
        while (typeof Home[i] !== "undefined") {
          let [...arrHouse] = xml.getElementsByTagName("result")[i].childNodes;
          let len = arrHouse.length
          for (let x = 0; len > x; x++) {
            if(arrHouse[x].nodeName === 'bedrooms') {
              rent = xml.getElementsByTagName("rentzestimate")[i].childNodes[0].innerHTML;
              ZpidList.push({
                zpidList: arrHouse[0].innerHTML,
                rent: rent
              });
            break;
            }
          }
          /*
            if (Houses[i].childNodes[12].nodeName !== "localRealEstate") {
              console.log(i, 'sec');
              if (xml.getElementsByTagName("rentzestimate")[i]) {
                rent = xml.getElementsByTagName("rentzestimate")[i]
                  .childNodes[0].innerHTML;
              }
              if (first === "first") {
                ZpidList.push({
                  zpidList: Houses[i].firstChild.innerHTML,
                  rent: rent
                });
              } else {
                ZpidList.push({
                  zpidList: Houses[i].firstChild.innerHTML,
                  rent: rent
                });
                console.log('pushes',ZpidList);
              }
            }
            */
          i++;
        }
      }
      console.log(ZpidList);
      return ZpidList;
    })
    .catch(function(err) {
      console.log(err);
    });
};

const HouseInfo = (zpid, index) => {
  //console.log(zpid);
  console.log(index);
  let InfoUrl = `http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?zws-id=X1-ZWz1hgyxiq6fbf_6ed93&zpid=${zpid.zpidList}`;
  return Promise.resolve(
    fetch(InfoUrl)
      .then(response => response.text())
      .then(dataa => {
        let AllImages = [];
        let xml = new DOMParser().parseFromString(dataa, "application/xml");
        //console.log(xml)
        let HouseData = {
          city: "?",
          state: "?",
          street: "?",
          useCode: "",
          bedrooms: "?",
          bathrooms: "?",
          finishedSqFt: "",
          yearBuilt: "Unknown",
          parkingType: "",
          zpid: zpid.zpidList,
          rent: zpid.rent,
          index: index,
          images: [],
          desc: null
        };
        console.log(xml.getElementsByTagName("code")[0].innerHTML);
        if (xml.getElementsByTagName("code")[0].innerHTML == 0) {
          console.log('start', index)
          if (
            (xml.getElementsByTagName("address")[0] &&
              xml.getElementsByTagName("url")[0] &&
              xml.getElementsByTagName("editedFacts")[0]) ||
            index === 0
          ) {
            //UsedZpid.push(zpid);
            if (xml.getElementsByTagName("address")[0]) {
              let [...AddressInfo] = xml.getElementsByTagName("address")[0].childNodes;
              AddressInfo.map(Addr => {
                let AddrN = Addr.nodeName;
                let AddrI = Addr.innerHTML;
                HouseData = {
                  ...HouseData,
                  [AddrN]: AddrI
                };
              });
            }
            if (xml.getElementsByTagName("editedFacts")[0]) {
              let [...Facts] = xml.getElementsByTagName("editedFacts")[0].childNodes;
              Facts.map(info => {
                let infoN = info.nodeName;
                let infoI = info.innerHTML;
                HouseData = {
                  ...HouseData,
                  [infoN]: infoI
                };
              });
            }
            if (xml.getElementsByTagName("url")[0]) {
              const [...Images] = xml.getElementsByTagName("url");
              console.log('JOJO',Images)
              Images.map(Img => {
                AllImages.push(Img.innerHTML);
              });
              HouseData = {
                ...HouseData,
                images: AllImages
              };
            }

            if (HouseData.images.length < 2) {
              if (HouseData.images.length == 0 && index === 0) {
                AllImages.push(`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${HouseData.latitude},${HouseData.longitude}
							&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`);
                AllImages.push(
                  `https://maps.googleapis.com/maps/api/staticmap?center=${HouseData.latitude},${HouseData.longitude}&zoom=15&size=400x400&maptype=roadmap&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`
                );
              } else {
                AllImages.push(`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${HouseData.latitude},${HouseData.longitude}
							&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`);
                //put satalite view from google
              }
              HouseData = {
                ...HouseData,
                images: AllImages
              };
            }
            if (xml.getElementsByTagName("homeDescription")[0]) {
              let Description = xml.getElementsByTagName("homeDescription")[0].innerHTML;
              HouseData = {
                ...HouseData,
                desc: Description
              };
            }
          }
        }
        return HouseData;
      })
  );
};

  //HouseInfo('2082540322',2);
  
  
  //Search for the address to get zpid then push that to a list 
  //change address to "st" and search again grab all zpids
  //make indivdual zpid searches on each house