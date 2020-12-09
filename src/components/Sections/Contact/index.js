import React from 'react'
import {SectionWrapper, SectionContainer } from '../SectionStyles'
import {Title, Links, Link, ContactWrapper} from './ContactStyles'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const Contact = () => {
    return (
        <SectionContainer id='contact' lightBg={true}>
            <SectionWrapper>
                <ContactWrapper>
                    <Title>Contact Me</Title>
                    <Links>
                        <Link href='https://www.linkedin.com/in/tobias-granberg-7b463617b/' target='_blank' aria-label='LinkedIn'>
                            <FaLinkedin/>
                            <p>LinkedIn</p>
                        </Link>
                        <Link href='https://github.com/rolfeva' target='_blank' aria-label='Github'>
                            <FaGithub/>
                            <p>Github</p>
                        </Link>
                    </Links>
                </ContactWrapper>
            </SectionWrapper>
        </SectionContainer>
    )
}

export default Contact
