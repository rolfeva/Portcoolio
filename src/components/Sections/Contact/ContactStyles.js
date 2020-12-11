import styled from 'styled-components'

import {themeColor} from '../../Theme';

export const ContactWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    color: #111111;
`
export const Title = styled.h1`
    text-align: center;
`
export const Links = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Link = styled.a`
    margin-top: 25px;
    font-size: 45px;
    display: flex;
    justify-content: left;
    text-decoration: none;
    width: 200px;
    align-items: center;
    color: ${themeColor};
    
    p {
        font-size: 28px;
        margin-left: 10px;
        :hover {
            border-bottom: 1px solid ${themeColor};
        }
    }
`