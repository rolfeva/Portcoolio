import React from 'react'
import {SectionContainer, SectionWrapper, Button} from '../SectionStyles'
import {Row, Col1, Col2, InfoTop, Image, InfoTopText, InfoTopTitle, InfoTopHeader,
InfoTopDesc, InfoBottom, SpotlightTitle, InfoBottomText, ButtonWrap, SpotlightGrid, SpotlightIcon, Spotlight
, SpotlightHeader, SpotlightList, SpotlightItem, SpotlightItemText} from './AboutStyles'
import { BsFillBrightnessAltHighFill as Icon1 } from "react-icons/bs";
import { BsFillArchiveFill as Icon2 } from "react-icons/bs";
import { BsFillCloudFill as Icon3 } from "react-icons/bs";
import { BsFillGrid1X2Fill as Icon4 } from "react-icons/bs";
import { BsDownload as DownloadIcon } from "react-icons/bs";
import { AiFillCheckCircle as ListIcon } from "react-icons/ai";

const About = () => {
    return (
        <SectionContainer id='about'>
            <SectionWrapper>
                <Row>
                    <Col1>
                        <InfoTop>
                            <Image src='./images/photo.png' alt='photo'/>
                            <InfoTopText>
                                <InfoTopTitle>Hi, my name is</InfoTopTitle>
                                <InfoTopHeader>Tobias Granberg</InfoTopHeader>
                                <InfoTopDesc>
                                    I am a system developer with a passion for creating modern and responsive
                                    software and websites. 
                                </InfoTopDesc>
                            </InfoTopText>
                        </InfoTop>
                        <InfoBottom>
                            <InfoBottomText>
                                I focus on creating smart and intuitive software
                                with the goal of solving everyday problems. Download my resume below.
                            </InfoBottomText>
                            <ButtonWrap>
                                <Button>Download CV<DownloadIcon/></Button>
                            </ButtonWrap>
                        </InfoBottom>
                    </Col1>
                    <Col2>
                        <SpotlightTitle>Skills Overview</SpotlightTitle>
                        <SpotlightGrid>
                            <Spotlight>
                                <SpotlightIcon><Icon1/></SpotlightIcon>
                                <SpotlightHeader>Frontend</SpotlightHeader>
                                <SpotlightList>
                                    <SpotlightItem>
                                        <ListIcon/>
                                        <SpotlightItemText>React</SpotlightItemText>
                                    </SpotlightItem>
                                    <SpotlightItem>
                                        <ListIcon/>
                                        <SpotlightItemText>Angular</SpotlightItemText>
                                    </SpotlightItem>
                                </SpotlightList>
                            </Spotlight>
                            <Spotlight>
                                <SpotlightIcon><Icon2/></SpotlightIcon>
                                <SpotlightHeader>Backend</SpotlightHeader>
                                <SpotlightList>
                                    <SpotlightItem>
                                        <ListIcon/>
                                        <SpotlightItemText>PHP</SpotlightItemText>
                                    </SpotlightItem>
                                    <SpotlightItem>
                                        <ListIcon/>
                                        <SpotlightItemText>.NET</SpotlightItemText>
                                    </SpotlightItem>
                                </SpotlightList>
                            </Spotlight>
                            <Spotlight>
                                <SpotlightIcon><Icon3/></SpotlightIcon>
                                <SpotlightHeader>Cloud</SpotlightHeader>
                                <SpotlightList>
                                    <SpotlightItem>
                                        <ListIcon/>
                                        <SpotlightItemText>Azure</SpotlightItemText>
                                    </SpotlightItem>
                                </SpotlightList>
                            </Spotlight>
                            <Spotlight>
                                <SpotlightIcon><Icon4/></SpotlightIcon>
                                <SpotlightHeader>Mobile</SpotlightHeader>
                                <SpotlightList>
                                    <SpotlightItem>
                                        <ListIcon/>
                                        <SpotlightItemText>Android</SpotlightItemText>
                                    </SpotlightItem>
                                </SpotlightList>
                            </Spotlight>
                        </SpotlightGrid>
                    </Col2>
                </Row>
            </SectionWrapper>
        </SectionContainer>
    )
}

export default About
