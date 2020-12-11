import styled from 'styled-components'
 
export const CardWrapper = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    color: #111111;
    padding: 0;
    :hover {
        cursor: pointer;
    }
    :hover span {
        visibility: visible;
    }
`
export const Showcase = styled.span`
    visibility: hidden;
    background-color: rgba(1,1,1,0.8);
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    color: #fff;
    display: ${({clicked}) => (clicked ? 'none' : 'flex')};
`
export const ShowcaseTitle = styled.h1`

`
export const ShowcaseDescription = styled.p`

`
export const HighlightWrapper = styled.div`
    display: ${({clicked}) => (clicked ? 'flex' : 'none')};
    background-color: rgba(1,1,1,0.6);
    position: fixed;
    top: 90px;
    left: 0;
    width: 100%;
    height: calc(100% - 90px);
    justify-content: center;
    align-items: center;
    cursor: default;
`
export const Highlight = styled.div`
    width: 600px;
    height: 700px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    z-index: 5;
    :hover {
        cursor: default;
    }

    @media screen and (max-width: 768px) {
        width: 75%;
        height: 85%;
    }
`
export const Image = styled.img`
    flex: 70%;
`
export const TextWrapper = styled.div`
    padding: 25px;
    flex: 30%;
    background: #fff;
`
export const Title = styled.h1`
    font-size: 34px;
`
export const Description = styled.p`
    margin-top: 20px;
    font-size: 20px;
`
export const Link = styled.a`
    text-decoration: none;
    font-size: 14px;
    color: #0096cc;
    :hover {
        text-decoration: underline;
    }
`