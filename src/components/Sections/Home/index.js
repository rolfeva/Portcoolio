import React from 'react'

import {SectionContainer} from '../SectionStyles'
import {HomeWrapper, Banner, Title, MobileIcon} from './HomeStyles'
import {FaArrowCircleDown as Icon} from 'react-icons/fa'

const Home = () => {
    return (
        <>
            <SectionContainer>
                <HomeWrapper>
                    <Banner>
                        <Title>Welcome to my Portfolio!</Title>
                        <MobileIcon to='about' smooth={true} duration={500} spy={true} exact='true' offset={-90}><Icon/></MobileIcon>
                    </Banner>
                </HomeWrapper>
            </SectionContainer>
        </>
    )
}

export default Home
