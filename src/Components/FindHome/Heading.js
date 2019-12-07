import React from 'react'

 const Heading = () => {
    const Hero = "https://cdn-img-feed.streeteasy.com/nyc/image/85/330177985.jpg"

    return (
        <div className ="FindHome-Hero" style={{backgroundImage: `url(${Hero})`}}>
            <div className= "FindHome-Hero-Wrapper">
                <div className = "FindHome-Hero-Text">
                    <div>
                        <h1>First-Time Homebuyer Dos and Dont's</h1>
                    </div>
                    <div>
                        <p>Buying a home can be a daunting process therefore when it’s your first time buying 
                            a home it is important to know how to budget and what help you can receive.
                        </p>
                        <div><p>Seach For Homes</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heading