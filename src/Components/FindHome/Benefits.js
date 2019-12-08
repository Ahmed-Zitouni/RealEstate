import React from 'react'
import { FaChevronRight } from 'react-icons/fa';

const Benefits = (props) => {
    
    const Benefits = props.data.data.Benefits;
    return (
        <div className="Benefits-Wrapper">  
            <p>{Benefits[0]}</p>
                <div >  
                    <div>
                        <div>
                            <h1>{Benefits[1]}</h1>
                        </div>
                        <div>
                            <div style ={symbolDiv}><FaChevronRight/></div>
                            <div>
                                <h1>{Benefits[2]}</h1>
                                <p>{Benefits[3]}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div style ={symbolDiv}><FaChevronRight/></div>
                            <div>
                                <h1>{Benefits[4]}</h1>
                                <p>{Benefits[5]}</p>
                            </div>
                        </div>
                        <div>
                            <div style ={symbolDiv}><FaChevronRight/></div>
                            <div>
                                <h1>{Benefits[6]}</h1>
                                <p>{Benefits[7]}</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
const symbolDiv = {
  display: 'flex',
  justifyContent: 'flex-start',
  width: '15%',
  height: '100%',
}

const FindHome = {
    Images : [
        "https://cdn-img-feed.streeteasy.com/nyc/image/85/330177985.jpg",
        "https://i.pinimg.com/originals/11/98/ba/1198ba64e09fdef3a305fd0640aa2b48.jpg",
        "https://i.pinimg.com/originals/11/98/ba/1198ba64e09fdef3a305fd0640aa2b48.jpg",
        "https://www.mashvisor.com/blog/wp-content/uploads/2018/09/bigstock-Buying-Or-Renting-House-The-S-251156368.jpg",
        "https://www.quickenloans.com/blog/wp-content/uploads/2018/08/CoupleLookingAtHouse.jpg",
        "https://wp-tid.zillowstatic.com/16/DSC_2595-820d15-600x400.jpg"
    ],
    Header : [
        "First-Time Homebuyer Dos and Dont's",
        "Buying a home can be a daunting process therefore when it’s your first time buying a home it is important to know how to budget and what help you can receive."
    ],
    MainText : [
        "Buying a home doesn't need to be a mystery",
        "When you begin to shop, have a budget in mind. While prices are always negotiable, you don’t want to waste your or a seller’s time. Be realistic about a home’s price.",
        "Once you have decided on a home, it is time to begin negotiations.Hesitation may translate into missing out on a property that you really love.",
        "There are homes that seriously lack curb appeal, but with a few cosmetic enhancements can be real show-stoppers. Don’t get swept up by fantastic staging.",
    ],
    ActionStep: [
        "Money Matters",
        "Get Preapproved. This is the official letter from the lender that says they will be willing to lend you money. Many sellers look for buyers who are preapproved.",
        "Finding A Home",
        "Hire an agent. An agent can help you navigate the entire process from searching, putting in offers, to where to hire an inspector or general contractors.",
        "Making The Deal",
        "You’ll actually have two closings, one on your loan and one on the purchase of your house. The documents will vary based on where you live and the specifics of your home.",
    ],
    Benefits: [
        "Make Sure To",
        "Take control of your home Purchase",
        "heck Down payment options",
        "Will you be able to get an FHA loan and pay 3.5 percent down? Many financial experts recommend a down payment of 20 percent, so be sure to explore your options!",
        "Get the most out of property viewings",
        "It is important to ask any questions you have while viewing a property you are considering buying.  Consider viewing the property at different times of the day,",
        "Be Competitive",
        "We all want to buy a home for the best bargain price.  You may view a low ball offer as a starting point, but a seller may view it as an insult and refuse to answer your offer.",
    ]
}


const FindHoume = {
    Images : [
        "https://cdn-img-feed.streeteasy.com/nyc/image/85/330177985.jpg",
        "https://i.pinimg.com/originals/11/98/ba/1198ba64e09fdef3a305fd0640aa2b48.jpg",
        "https://i.pinimg.com/originals/11/98/ba/1198ba64e09fdef3a305fd0640aa2b48.jpg",
        "https://www.mashvisor.com/blog/wp-content/uploads/2018/09/bigstock-Buying-Or-Renting-House-The-S-251156368.jpg",
        "https://www.quickenloans.com/blog/wp-content/uploads/2018/08/CoupleLookingAtHouse.jpg",
        "https://wp-tid.zillowstatic.com/16/DSC_2595-820d15-600x400.jpg"
    ],
    Header : [
        "First-Time Homebuyer Dos and Dont's",
        "Buying a home can be a daunting process therefore when it’s your first time buying a home it is important to know how to budget and what help you can receive."
    ],
    MainText : [
        "Buying a home doesn't need to be a mystery",
        "When you begin to shop, have a budget in mind. While prices are always negotiable, you don’t want to waste your or a seller’s time. Be realistic about a home’s price.",
        "Once you have decided on a home, it is time to begin negotiations.Hesitation may translate into missing out on a property that you really love.",
        "There are homes that seriously lack curb appeal, but with a few cosmetic enhancements can be real show-stoppers. Don’t get swept up by fantastic staging.",
    ],
    ActionStep: [
        "Money Matters",
        "Get Preapproved. This is the official letter from the lender that says they will be willing to lend you money. Many sellers look for buyers who are preapproved.",
        "Finding A Home",
        "Hire an agent. An agent can help you navigate the entire process from searching, putting in offers, to where to hire an inspector or general contractors.",
        "Making The Deal",
        "You’ll actually have two closings, one on your loan and one on the purchase of your house. The documents will vary based on where you live and the specifics of your home.",
    ],
    Benefits: [
        "Make Sure To",
        "Take control of your home Purchase",
        "heck Down payment options",
        "Will you be able to get an FHA loan and pay 3.5 percent down? Many financial experts recommend a down payment of 20 percent, so be sure to explore your options!",
        "Get the most out of property viewings",
        "It is important to ask any questions you have while viewing a property you are considering buying.  Consider viewing the property at different times of the day,",
        "Be Competitive",
        "We all want to buy a home for the best bargain price.  You may view a low ball offer as a starting point, but a seller may view it as an insult and refuse to answer your offer.",
    ]

}

export default Benefits
