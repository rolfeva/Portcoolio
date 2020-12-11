import React from 'react'
import {SectionContainer, SectionWrapper, Button} from '../SectionStyles'
import {AboutWrapper, Title, Row, Col1, Col2, InfoTop, Image, InfoTopText, InfoTopTitle, InfoTopHeader,
InfoTopDesc, InfoBottom, SpotlightWrapper, SpotlightTitle, InfoBottomText, ButtonWrap, SpotlightGrid, SpotlightIcon, Spotlight
, SpotlightHeader, SpotlightItemText} from './AboutStyles'
import { CgWebsite as WebIcon } from "react-icons/cg";
import { IoMdApps as SoftwareIcon } from "react-icons/io";
import { FaMobileAlt as MobileIcon } from "react-icons/fa";
import { AiOutlineCloud as CloudIcon } from "react-icons/ai";
import { BsDownload as DownloadIcon } from "react-icons/bs";

import profilePic from '../../../images/profile.png';

const About = () => {
    return (
        <SectionContainer id='about' lightBg={true}>
            <SectionWrapper>
                <AboutWrapper>
                    <Title>About</Title>
                    <Row>
                        <Col1>
                            <InfoTop>
                                <Image src={profilePic} alt='photo'/>
                                <InfoTopText>
                                    <InfoTopTitle>Hi, my name is</InfoTopTitle>
                                    <InfoTopHeader>Tobias Granberg</InfoTopHeader>
                                    <InfoTopDesc>
                                        I am a <strong>system developer</strong> with a passion for creating modern and responsive
                                        software and websites. 
                                    </InfoTopDesc>
                                </InfoTopText>
                            </InfoTop>
                            <InfoBottom>
                                <InfoBottomText>
                                    I focus on creating smart and intuitive IT
                                    with the goal of solving everyday problems. Download my resume or checkout my projects below.
                                </InfoBottomText>
                                <ButtonWrap>
                                    <Button>Download CV<DownloadIcon/></Button>
                                </ButtonWrap>
                            </InfoBottom>
                        </Col1>
                        <Col2>
                            <SpotlightWrapper>
                                <SpotlightTitle>What I do</SpotlightTitle>
                                <SpotlightGrid>
                                    <Spotlight>
                                        <SpotlightIcon><WebIcon/></SpotlightIcon>
                                        <SpotlightHeader>Web</SpotlightHeader>
                                        <SpotlightItemText>Building modern and responsive websites tailored to your needs.</SpotlightItemText>
                                    </Spotlight>
                                    <Spotlight>
                                        <SpotlightIcon><SoftwareIcon/></SpotlightIcon>
                                        <SpotlightHeader>Software</SpotlightHeader>
                                        <SpotlightItemText>Creating specific or cross-platform software.</SpotlightItemText>
                                    </Spotlight>
                                    <Spotlight>
                                        <SpotlightIcon><MobileIcon/></SpotlightIcon>
                                        <SpotlightHeader>Mobile</SpotlightHeader>
                                        <SpotlightItemText>Creating android applications.</SpotlightItemText>
                                    </Spotlight>
                                    <Spotlight>
                                        <SpotlightIcon><CloudIcon/></SpotlightIcon>
                                        <SpotlightHeader>Cloud</SpotlightHeader>
                                        <SpotlightItemText>Backend technology with cloud based services.</SpotlightItemText>
                                    </Spotlight>
                                </SpotlightGrid>
                            </SpotlightWrapper>
                        </Col2>
                    </Row>
                </AboutWrapper>
            </SectionWrapper>
        </SectionContainer>
    )
}

export default About
