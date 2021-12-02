import styled from 'styled-components/macro'

export const CardsContainer = styled.div`
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background: ${({ lightBg }) => (lightBg ? '#c0d8c4' : '#426347')};

    @media screen and (max-width: 768px) {
        height: 1300px;
    }

    @media screen and (max-width: 900px) {
        height: 1500px;
    }
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
    max-width: 1500px;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    align-items: center;
    grid-gap: 25px;
    padding: 10px 16px 20px 16px;

    @media screen and (max-width: 1200px){
    grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 900px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const StyledCardContent = styled.div`
    transition: transform 0.8s ease;
    transform-style: preserve-3d;
`

export const StyledCard = styled.div`
    background: transparent;
    display: grid;
    grid-template-areas: 'col2' 'col1' 'col3';
    border-radius: 10px;
    height: 390px;
    width: 350px;
    padding: 5px 5px 5px 5px;
    

    @media screen and (max-width: 1200px){
        height: 250px;
        width: 450px;
        padding: 5px 5px 10px 5px;
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1 col3'` : `'col1 col3 col2'`)};
        &:hover {
            ${StyledCardContent} {
            transform: rotateZ(180deg);
        }
        }
    }
    @media screen and (max-width: 900px){
        height: 200px;
        width: 400px;
        padding: 5px 5px 10px 5px;
        flex-direction: row;
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1 col3'` : `'col1 col3 col2'`)};
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

export const StyledCardSide = styled(StyledCard)`
    display: grid;
    grid-template-areas: 'col2' 'col1';
    justify-content: center;
    align-content: center;
    height: 390px;
    width: 350px;
    position: absolute;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);

    @media screen and (max-width: 1200px){
        height: 250px;
        width: 450px;
        padding: 5px 5px 10px 5px;
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    }
    @media screen and (max-width: 900px){
        height: 200px;
        width: 400px;
        padding: 5px 5px 10px 5px;
        flex-direction: row;
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    }

    &.front{
        background-color: ${({ lightCard }) => (lightCard ? '#c0d8c4' : '#426347')};
    }
    &.back{
        background-color: #223225;
        transform: rotateY(180deg);
        @media screen and (max-width: 1200px){
            transform: rotateX(180deg);
        }
    }
`


export const ColumnText = styled.div`
    grid-area: col1;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: center;
    width: 300px;
    height: 100px;
    @media screen and (max-width: 1200px){
        width: 200px;
        height: 190px;
        justify-content: center;
        padding-right: 10px ;
        padding-left: 5px;
    }
`
export const ColumnImage = styled.div`
    grid-area: col2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 20px;

    @media screen and (max-width: 1200px){
        padding-right: 5px;
        padding-top: 20px;
    }
`

export const CardsBtn = styled.button`
    border-radius: 50px 5px;
    background: #c0d8c4;
    color: '223225';
    font-size: 1.3rem;
    font-weight: bold;
    outline:none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height:4rem;
    box-shadow: 5px 5px #426347;
    z-index: 90;

    &:hover {
        background: #426347;
        color: white;
        box-shadow: 5px 5px white;
    }
    &:active {
        transform:translateY(5%);
        box-shadow: 1px 1px white;
    }

`
export const CardsIcon = styled.img`
    height: 150px;
    width: 200px;
    border-radius: 5px;
`
export const CardsH2 = styled.h2`
    font-size: 1.4rem;
    margin-bottom: 10px;
    text-transform: uppercase;
    text-align: center;
    color: ${({ darkText }) => (darkText ? '#223225' : 'white')};
`
export const CardsP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: ${({ darkText }) => (darkText ? '#223225' : '#c0d8c4')};
`

export const CardsIconBack = styled.img`
    height: 250px;
    width: 400px;
    @media screen and (max-width: 1200px){
        height: 180px;
        width: 350px;
    }
`