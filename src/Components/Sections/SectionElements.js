import styled from 'styled-components/macro'

export const SectionContainer = styled.div`
    background: ${({ lightBg }) => (lightBg ? '#c0d8c4' : '#426347')};
    color:#fff;
    align-items: center;
`
export const SectionWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 1000px;
    width: 100%;
    max-width: 1600px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    @media screen and (max-width: 768px){
        align-items: center;
    }
`

export const SectionRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    
    @media screen and (max-width: 768px){
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2' 'col1'` : `'col1' 'col2'`)};
        align-items: center;
    }
`
export const Column1 = styled.div`
    margin-bottom: 10px;
    padding: 0 5px;
    grid-area: col1;
    @media screen and (max-width: 768px){
        padding: 0 10px;
    }
`
export const Column2 = styled.div`
    margin-bottom: 10px;
    padding: 0 20px;
    grid-area: col2;
    @media screen and (max-width: 768px){
        margin-bottom: 0;
        padding: 0 10px;
    }
`
export const TextWrapper = styled.div`
    max-width: 1100px;
    padding-top: 75px;
    padding-bottom: 60px;
`
export const TopLine = styled.p`
    color: #223225;
    font-size: 30px;
    line-height: 30px;
    font-weight: 900;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 28px;
    
    @media screen and (max-width: 1399px) {
        font-size:25px;
    }
    @media screen and (max-width: 768px) {
        font-size:25px;
        text-align: center;
    }
`

export const Heading = styled.p`
    font-size: 4rem;
    line-height: 30px;
    font-weight: 900;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 28px;
    color: ${({ lightText }) => (lightText ? '#c0d8c4' : '223225')};

    @media screen and (max-width: 1399px) {
        font-size:3rem;
    }
    @media screen and (max-width:768px) {
        font-size:2rem;
        text-align: center;

    }
    @media screen and (max-width: 380px) {
        font-size:1rem;
        text-align: center;
    }
`
export const Subtitle = styled.p`
    max-width: 550px;
    margin-bottom: 40px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#426347' : '#c0d8c4')};
    
    @media screen and (max-width: 760px) {
        font-size: 15px;
        text-align: center;
    }
    @media screen and (max-width: 380px) {
        font-size: 14px;
        text-align: center;
        max-width: 300px;
    }
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 760px) {
        justify-content: center;
    }
`

export const ImgWrap = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 400px;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 0 20px 0;
`

export const Img = styled.img`
    width: 90%;
    margin: 0 0 5px 0;
    padding-right: 0;

    @media screen and (max-width: 1050px) {
        width: 70%;
    }
`