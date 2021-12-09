import styled from 'styled-components/macro'

export const CardsContainer = styled.div`
    min-height: 100vh;
    min-width: 450px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    padding: 50px 0;
    background: ${({ lightBg }) => (lightBg ? '#c0d8c4' : '#426347')};
`
export const CardsH1 = styled.h1`
    font-size: 5rem;
    color: ${({ lightText }) => (lightText ? '#c0d8c4' : '#223225')};
    margin-bottom: 15px;
    text-transform: capitalize;
    @media screen and (max-width: 900px) {
        font-size: 4rem;
    }
`
export const CardsWrapper = styled.div`
    max-width: 1260px;
    /* margin: 0; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(382px, 1fr));
    align-items: center;
    grid-gap: 5px;
    /* padding: 0px 16px 20px 16px; */

    @media screen and (max-width: 1200px){
        grid-gap: 15px;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 900px){
        grid-template-columns: 1fr;
        padding: 0 20px;
        grid-gap: 15px;
    }
`

export const StyledCardContent = styled.div`
    transition: transform 0.8s ease;
    transform-style: preserve-3d;
`

export const StyledCard = styled.div`
    background: transparent;
    display: grid;
    grid-template-areas: 'col2' 'col1' ;
    border-radius: 10px;
    padding: 0px 5px 5px 5px;

    @media screen and (max-width: 1200px){
        height: 250px;
        width: 450px;
        padding: 5px 5px 10px 5px;
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1 '` : `'col1 col2'`)};
        &:hover {
            ${StyledCardContent} {
            transform: rotateZ(180deg);
        }
        }
    }
    @media screen and (max-width: 900px){
        height: 200px;
        width: 600px;
        padding: 5px 5px 10px 5px;
        flex-direction: row;
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1 '` : `'col1  col2'`)};
    }

    @media screen and (max-width: 650px){
        height: 200px;
        width: 400px;
        padding: 5px 5px 10px 5px;
        flex-direction: column;
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 '` : `'col2'`)};
    }

    

    &:hover {
        ${StyledCardContent} {
            transform: rotateY(180deg);
            }
        @media screen and (max-width: 1200px){
            ${StyledCardContent} {
            transform: rotateX(180deg);
        }
        }
    }
`

export const StyledCardSide = styled.div`
    display: grid;
    grid-template-areas: 'col2' 'col1';
    justify-content: center;
    align-content: center;
    border-radius: 10px;
    padding: 0px 10px;
    height: 380px;
    width: 390px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    background-color: ${({ lightCard }) => (lightCard ? '#c0d8c4' : '#426347')};
    @media screen and (max-width: 1200px){
        height: 250px;
        width: 450px;
        padding: 5px 5px 10px 5px;
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    }
    @media screen and (max-width: 900px){
        height: 200px;
        width: 600px;
        padding: 5px 5px 10px 5px;
        flex-direction: row;
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    }
    @media screen and (max-width: 650px){
        height: 200px;
        width: 400px;
        padding: 5px 5px 10px 5px;
        flex-direction: row;
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    }
`


export const ColumnText = styled.div`
    grid-area: col1;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 1200px){
        width: 200px;
        height: 200px;
        justify-content: center;
        padding-right: 10px ;
        padding-left: 5px;
    }
    @media screen and (max-width: 900px){
        width: 370px;
        height: 200px;
        justify-content: center;
        padding-right: 10px ;
        padding-left: 5px;
    }
    @media screen and (max-width: 650px){
        width: 250px;
        height: 180px;
    }
`
export const ColumnImage = styled.div`
    grid-area: col2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    @media screen and (max-width: 1200px){
        padding-right: 5px;
        padding-top: 20px;
    }
    @media screen and (max-width: 650px){
        width: 120px;
    }

`

export const CardsBtn = styled.button`
    border-radius: 50px 5px;
    margin-top: 1.5rem;
    background: #c0d8c4;
    color: '223225';
    font-size: 1.5rem;
    font-weight: bold;
    outline:none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18rem;
    box-shadow: 2px 3px #223225;

    @media screen and (max-width: 1200px){
        font-size: 1rem;
        width: 11rem;
    }

    @media screen and (max-width: 900px){
        font-size: 1.2rem;
        width: 14rem;
    }
    @media screen and (max-width: 650px){
        font-size: 1rem;
        width: 11rem;
    }

    &:hover {
        background: #223225;
        color: white;
        box-shadow: 2px 3px #c0d8c4;
    }
    &:active {
        transform:translateY(5%);
        box-shadow: 1px 1px white;
    }

`
export const CardsIcon = styled.img`
    height: 160px;
    width: 220px;
    padding-bottom: 15px;
    border-radius: 5px;
    @media screen and (max-width: 1200px){
        height: 170px;
        width: 200px;
    }
    @media screen and (max-width: 900px) {
        height: 150px;
        width: 200px;
    }
    @media screen and (max-width: 650px) {
        width: 130px;
        height: 150px;
    }
`
export const CardsH2 = styled.h2`
    font-size: 1.9rem;
    letter-spacing: 3px;
    margin-bottom: 10px;
    text-transform: uppercase;
    text-align: center;
    color: ${({ darkText }) => (darkText ? '#223225' : 'white')};
    @media screen and (max-width: 1200px) {
        font-size: 1.5rem;
    }
    @media screen and (max-width: 900px) {
        font-size: 1.6rem;
    }
    @media screen and (max-width: 650px){
        font-size: 1.2rem;
    }
`

export const CardsP = styled.p`
    font-size: 1.3rem;
    text-align: center;
    line-height: 25px;
    color: ${({ darkText }) => (darkText ? '#223225' : '#c0d8c4')};
    @media screen and (max-width: 1200px) {
        font-size: 1.2rem;
    }
    @media screen and (max-width: 900px) {
        font-size: 1.3rem;
    }
    @media screen and (max-width: 650px){
        font-size: 1rem;
    }
`

// export const CardsIconBack = styled.img`
//     height: 250px;
//     width: 400px;
//     @media screen and (max-width: 1200px){
//         height: 180px;
//         width: 350px;
//     }
// `

export const OpenWindowWrapper = styled.div`
    height: 250px;
    width: 400px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 750px){
        height: 200px;
        width: 280px;
    }
`

export const FullImgIcon = styled.img`
    height: 270px;
    @media screen and (max-width: 750px){
        height: 250px;
    }
`
export const OpenWindowText = styled.span`
    margin-top: 2rem;
    text-align: center;
    font-size: 1rem;
`