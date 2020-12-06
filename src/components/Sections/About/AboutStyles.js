import styled from 'styled-components'

export const Row = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        display: block;
    }
`
export const Col1 = styled.div`
    flex: 50%;
    //background-color: blue;
    padding: 0 15px;
`
export const InfoTop = styled.div`
    display: flex;
`
export const Image = styled.img`
    flex: 40%;
    border: 1px solid black;
    height: 250px;
    width: 100%;
`
export const InfoTopText = styled.div`
    flex: 60%;
    margin-left: 30px;
`
export const InfoTopTitle = styled.h2`
`
export const InfoTopHeader = styled.h1`
    margin-top: 7px;
`
export const InfoTopDesc = styled.h3`
    margin-top: 15px;
`
export const InfoBottom = styled.div`
    margin-top: 45px;
`
export const InfoBottomText = styled.div`
    font-size: 20px;
`
export const ButtonWrap =  styled.div`
    display: flex;
    margin-top: 25px;
    justify-content: space-between;
`
export const Col2 = styled.div`
    flex: 50%;
    //background-color: maroon;
    margin-top: -50px;

    @media screen and (max-width: 768px) {
        margin-top: 40px;
    }
`
export const SpotlightTitle = styled.div`
    text-align: center;
    font-size: 24px;
    margin-bottom: 25px;
`
export const SpotlightGrid = styled.div`
    margin: 0px auto;
    width: 400px;
    height: 400px;
    display: grid;
    grid-template-columns: 200px 200px;
    grid-row: auto auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
`
export const Spotlight = styled.div`
    background-color:#333;
    padding:20px;
    border-radius:10px;
    display:flex;
    text-align: center;
    flex-direction: column;
`
export const SpotlightIcon = styled.div`
    height: 60px;
    width: 100%;
    font-size: 50px;
    color: green;
`
export const SpotlightHeader= styled.h1`
    font-size: 16px;
`
export const SpotlightList= styled.ul`
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    text-align: left;
    list-style-type: none;
    width: 100%;
`
export const SpotlightItem = styled.li`
    margin-top: 5px;
    margin-left: 10px;
    display: flex;
`
export const SpotlightItemText = styled.p`
    font-size: 14px;
    margin-left: 5px;
`

