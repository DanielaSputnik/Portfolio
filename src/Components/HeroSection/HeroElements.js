import styled from 'styled-components/macro'
import { BsArrowRightShort, BsArrowDownShort } from 'react-icons/bs'
import ImageL from '../../Images/background.gif'
import ImageS from '../../Images/bckgrndS.gif'
import ImageXS from '../../Images/bckgrndXS.gif'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 30px;
    min-width: 450px;
    height: 1000px;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 450px){
        height: 1100px;
    }
`

export const HeroContentWrapper = styled.div`
position: absolute;
    top: 10rem;
    right: 0;
    bottom: 0;
    left: 5rem;
    @media screen and (max-width: 1100px){
        left: 1.5rem;
        top: 7rem;
    }
    @media screen and (max-width: 500px){
        height: 1200px;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
`

export const ImageBg = styled.div`
    width: 100%;
    height: 100%;
    background: #84a88b;
    background-image: url(${ImageL});
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover; 

    @media screen and (max-width: 1100px){
        background-image: url(${ImageS});
    background-size: fill;
    }
    @media screen and (max-width: 580px){
        background-image: url(${ImageXS});
    }
    @media screen and (max-width: 450px){
        background-image: url(${ImageXS});
    }
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: left;
    
`
export const HeroP = styled.p`
    color: #223225;
    text-align: left;
    font-size:4rem;
    font-weight: 700;
    text-decoration: underline;
    line-height: 3rem;
    @media screen and (max-width: 1100px) {
        font-size: 2.5rem;
    }
    @media screen and (max-width: 500px) {
        text-align: center;
    }
`

export const HeroP2 = styled.span`
    margin-top: 5px;
    color: #fff;
    font-size: 2rem;
    text-align: center;
    line-height: 4.5rem;
    font-weight: 700;

    @media screen and (max-width: 1100px) {
        font-size: 24px;
    }
    @media screen and (max-width: 580px) {
        font-size: 20px;
    }
    @media screen and (max-width: 500px) {
        font-size: 19px;
        line-height: 1.5rem;
        text-align: center;
    }
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size:7rem;
    text-align: start;

    @media screen and (max-width: 1100px) {
        font-size: 5rem;
    }
    @media screen and (max-width: 800px) {
        font-size: 3.9rem;
    }
    @media screen and (max-width: 500px) {
        font-size: 3.5rem;
    }
`
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 500px) {
            margin-top: 10px;
    }
`

export const ArrowForward = styled(BsArrowRightShort)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowDown = styled(BsArrowDownShort)`
    margin-left: 8px;
    font-size: 20px;
`
