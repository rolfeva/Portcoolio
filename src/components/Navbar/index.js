import React, {useState, useEffect} from 'react'
import {Nav, NavbarContainer, NavbarTitleWrapper, NavbarTitle, 
 NavbarTitleH1, NavbarTitleH2, NavbarMenu, NavbarMenuItem, NavLink} from './NavbarStyles'
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavbarTitleWrapper onClick={toggleHome}>
                        <NavbarTitle>
                            <NavbarTitleH1>Tobias Granberg</NavbarTitleH1>
                            <NavbarTitleH2>System developer</NavbarTitleH2>
                        </NavbarTitle>
                    </NavbarTitleWrapper>
                    <NavbarMenu>
                        <NavbarMenuItem>
                            <NavLink to='about' smooth={true} duration={500} spy={true} exact='true' offset={-90}
                            >About</NavLink>
                        </NavbarMenuItem>
                        <NavbarMenuItem>
                            <NavLink to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-90}
                            >Projects</NavLink>
                        </NavbarMenuItem>
                        <NavbarMenuItem>
                            <NavLink to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-90}
                            >Contact</NavLink>
                        </NavbarMenuItem>
                    </NavbarMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
