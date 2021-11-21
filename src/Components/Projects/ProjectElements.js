import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        108deg,
        #426347 0%,
        #223225 100%
    );
`

export const Formicka = styled.div`
    height: 100px;
    background: #000;
    color:#426347;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const HomeIcon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #c0d8c4;
    font-weight: 700px;
    font-size: 32px;
    cursor: pointer;

    &:hover {
        color: #fff;
    }

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }

`
