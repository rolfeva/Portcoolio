import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

import {themeColor} from '../Theme';

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    height: 90px;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 100;
    margin-top: -90px;
    background: ${({scrollNav}) => (scrollNav ? '#111111' : 'transparent')};
    color: #fff;
    @media screen and (max-width: 960px) {
        transition: 0.7s all ease;
    }
`
export const NavbarContainer = styled.div`
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1300px;
    display: flex;
    justify-content: space-between;
    height: 90px;
    align-items: center;
`
export const NavbarTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    &:hover {
        cursor: pointer;
    }
`
export const NavbarTitle = styled.div`
    margin-left: 8px;
`
export const NavbarTitleH1 = styled.h1`
    
`
export const NavbarTitleH2 = styled.h2`
    font-size: 20px;
`
export const NavbarMenu = styled.ul`
    display: flex;
    list-style: none;
    text-align: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavbarMenuItem = styled.li`
    height: 90px;
    width: 100px;
    text-align: center;
    font-size: 20px;
`
export const NavLink = styled(LinkS)`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    padding: 0 1rem;
    justify-content: center;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${themeColor};
        white-space: nowrap;
    }

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`