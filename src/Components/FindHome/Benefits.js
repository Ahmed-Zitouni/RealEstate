import React from 'react'
import { FaChevronRight } from 'react-icons/fa';
const Benefits = () => {
    
    return (
        <div className="Benefits-Wrapper">  
            <p>Benefits</p>
                <div >  
                    <div>
                        <div>
                            <h1>Take control of your home Purchase</h1>
                        </div>
                        <div>
                            <div style ={symbolDiv}><FaChevronRight/></div>
                            <div>
                                <h1>See the big Picture</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div style ={symbolDiv}><FaChevronRight/></div>
                            <div>
                                <h1>Take control of your home Purchase</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever</p>
                            </div>
                        </div>
                        <div>
                            <div style ={symbolDiv}><FaChevronRight/></div>
                            <div>
                                <h1>Take control of your home Purchase</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever</p>
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


export default Benefits
