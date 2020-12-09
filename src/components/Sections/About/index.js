import React from 'react'
import {SectionContainer, SectionWrapper, Button} from '../SectionStyles'
import {AboutWrapper, Title, Row, Col1, Col2, InfoTop, Image, InfoTopText, InfoTopTitle, InfoTopHeader,
InfoTopDesc, InfoBottom, SpotlightTitle, InfoBottomText, ButtonWrap, SpotlightGrid, SpotlightIcon, Spotlight
, SpotlightHeader, SpotlightItemText} from './AboutStyles'
import { BsFillBrightnessAltHighFill as Icon1 } from "react-icons/bs";
import { BsFillArchiveFill as Icon2 } from "react-icons/bs";
import { BsFillCloudFill as Icon3 } from "react-icons/bs";
import { BsFillGrid1X2Fill as Icon4 } from "react-icons/bs";
import { BsDownload as DownloadIcon } from "react-icons/bs";

const About = () => {
    return (
        <SectionContainer id='about' lightBg={true}>
            <SectionWrapper>
                <AboutWrapper>
                    <Title>About</Title>
                    <Row>
                        <Col1>
                            <InfoTop>
                                <Image src='./images/photo.png' alt='photo'/>
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
                            <SpotlightTitle>What I do</SpotlightTitle>
                            <SpotlightGrid>
                                <Spotlight>
                                    <SpotlightIcon><Icon1/></SpotlightIcon>
                                    <SpotlightHeader>Web</SpotlightHeader>
                                    <SpotlightItemText>Building modern and responsive websites tailored to your needs.</SpotlightItemText>
                                </Spotlight>
                                <Spotlight>
                                    <SpotlightIcon><Icon2/></SpotlightIcon>
                                    <SpotlightHeader>Software</SpotlightHeader>
                                    <SpotlightItemText>Creating specific or cross-platform software.</SpotlightItemText>
                                </Spotlight>
                                <Spotlight>
                                    <SpotlightIcon><Icon3/></SpotlightIcon>
                                    <SpotlightHeader>Mobile</SpotlightHeader>
                                    <SpotlightItemText>Creating android applications.</SpotlightItemText>
                                </Spotlight>
                                <Spotlight>
                                    <SpotlightIcon><Icon4/></SpotlightIcon>
                                    <SpotlightHeader>Cloud</SpotlightHeader>
                                    <SpotlightItemText>Backend technology with cloud based services.</SpotlightItemText>
                                </Spotlight>
                            </SpotlightGrid>
                        </Col2>
                    </Row>
                </AboutWrapper>
            </SectionWrapper>
        </SectionContainer>
    )
}

export default About
