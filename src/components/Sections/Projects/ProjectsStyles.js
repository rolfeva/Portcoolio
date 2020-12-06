import styled from 'styled-components'

export const ProjectsWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
`
export const Title = styled.h1`
   text-align: center;
`
export const ProjectGrid = styled.div`
    width: 800px;
    height: 600px;
    display: grid;
    margin: 50px auto 0 auto;
    grid-template-columns: 400px 400px;
    grid-row: auto auto;
    grid-column-gap: 15px;
    grid-row-gap: 15px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 400px;
        width: 400px;
        height: 1600px;
        background-color: red;
    }
`

export const ProjectItemBox = styled.div`
    padding:0;
    border-radius:5px;
    position: relative;
    
    :hover {
        box-shadow: 0 0 11px rgba(33,33,33,.2); 
    }
`
export const ProjectItemBG = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #aaa;
`
export const ProjectItem = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(1,1,1,0.6);
    opacity:0;
    color: #fff;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    :hover {
        opacity:1;
        -webkit-transition: opacity .2s ease-in-out .0s;
        transition: opacity .2s ease-in-out .0s;
    }
`
export const ItemHeader = styled.h1`
    margin-top: -80px;
`
export const ItemDescription = styled.h2`
    margin-top: 10px;
`