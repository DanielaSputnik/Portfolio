import styled from 'styled-components/macro'

export const ExpContainer = styled.div`
    box-sizing: border-box;
    background: #426347;
    color: #c0d8c4;
    padding: 1rem;
`
export const ExpWrapper = styled.div`
    position: relative;
    padding: 1.5rem;
    margin: 0 auto;
    max-width: 1100px;
    height: 1100px;

    &:before {
        content: '';
        position: absolute;
        height: 90%;
        border: 2px solid #223225;
        right: 40px;
        top: 0.8rem;
    }

    &:after {
        content: "";
        display: table;
        clear: both;
    }

    @media screen and (min-width: 1050px) {
        height: 800px;
        padding: 2rem;
        &:before {
            left: calc(50% - 1px);
            right: auto;
        }
    }
`
export const ExpHeading = styled.p`
    font-size: 5rem;
    line-height: 30px;
    font-weight: 900;
    letter-spacing: 1.4px;
    text-transform: capitalize;
    margin-bottom: 1.2rem;
    margin-top: 1.5rem;
    text-align: center;
`

export const ExpTLItem = styled.div`
    padding: 0.5rem 0.9rem;
    background: #c0d8c4;
    border: 2px solid #223225;
    border-radius: 5px;
    position: relative;
    margin: 0.1rem 2rem 0.5rem 4rem;
    clear: both;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);

    &:hover  {
        transform: scale(1.05);
        transition: all 0.2 ease-in-out;
        box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.3);
    }
    &:after,
    &:before {
        content: '';
        position: absolute;
    }

    &:before {
        right: -10px;
        top: calc(50% - 5px);
        border-style: solid;
        border-color: #c0d8c4;
        border-width: 10px;
        transform: rotate(45deg);
    }

    @media screen and (min-width: 1050px) {
        width: 44%;
        margin: 0.3rem 1rem;
        margin-top:0.4rem;
        
        &:nth-of-type(2n) {
        float: right;
        margin: 1rem;
        margin-top: 2rem;

        &:before {
        right: auto;
        left: -10px;
        border-color: #c0d8c4;
        }
    }
    }
`
export const ExpTLYear = styled.h2`
    position: relative;
    text-align: center;
    max-width: 100px;
    margin: 0 48px 0 auto;
    font-size: 1.8rem;
    background-color: #223225;
    line-height: 0.5;
    border: 2px solid #223225;
    padding: .7rem 1rem 1rem;
    z-index: 5;
    border-radius: 50px 5px;

    &:before {
    display: none;
    }

    @media screen and (min-width: 1050px) {
        text-align: center;
        margin: 0 auto;

    &:nth-of-type(2n) {
        float: none;
        margin: 0 auto;
        border-image: none;

        &:before {
        display: none;
        }
    }
    }
`

export const ExpTLTitle = styled.h3`
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 1.5em;
    color: #223225;
`

export const ExpTLSubTitle = styled.p`
    line-height: 1.5;
    font-size: 1rem;
    margin: .5rem 0 0;
    color: #223225;
`
