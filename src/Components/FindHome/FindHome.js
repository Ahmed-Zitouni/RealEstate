import React from 'react'
import Heading from './Heading'
import NavBar from '../NavBar'
import MainText from './MainText'
import ActionSteps from './ActionStepa'
import Benefits from './Benefits'

const FindHome = () => {
    return (
        <div className ="FindHomeWrapper">
            <NavBar />
            <Heading />
            <MainText />
            <ActionSteps />
            <Benefits />
        </div>
    )
}

export default FindHome
