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
    width: 815px;
    height: 600px;
    display: grid;
    margin: 50px auto 0 auto;
    grid-template-columns: 400px 400px;
    grid-row: auto auto;
    grid-column-gap: 15px;
    grid-row-gap: 15px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 400px;
        width: 415px;
        height: 1600px;
        background-color: red;
    }
`
