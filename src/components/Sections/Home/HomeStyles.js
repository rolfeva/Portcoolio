import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

import img from '../../../images/banner.jpg'
import {themeColor} from '../../Theme';

export const HomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
`
export const Banner = styled.div`
    text-align: center;
`
export const Title = styled.h1`
    font-size: 38px;
`
export const MobileIcon = styled(LinkS)`
    font-size: 50px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    width: 50px;
    margin-top: 50px;
    :hover {
        cursor: pointer;
        color: ${themeColor};
    }
`