import styled from 'styled-components'
import {Link} from 'react-scroll'
import {themeColor} from '../Theme';

export const SectionContainer = styled.div`
    background: ${({lightBg}) => (lightBg ? '#fff' : themeColor)};
    color: ${({lightBg}) => (lightBg ? '#000' : '#fff')};
`
export const SectionWrapper = styled.div`
    min-height: 860px;
    display: grid;
    z-index: 1;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    max-width: 1300px;
    padding: 0 28px;
    //background: #aaa;
    @media screen and (max-width: 768px) {
        display: block;
        padding: 28px 28px;
    }
`

export const Button = styled(Link)`
    border-radius: 10px;
    background: #010606;
    white-space: nowrap;
    padding: 12px 30px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.2s ease-in-out;
    width: 180px;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${themeColor};
        white-space: nowrap;
    }
`