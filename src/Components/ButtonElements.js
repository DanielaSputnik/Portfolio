import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px 5px;
    background: ${({ primary }) => (primary ? '#426347' : '#223225')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#223225' : '#c0d8c4')};
    font-size: ${({ fontBig }) => (fontBig ? '24px' : '21px')};
    font-weight: bold;
    outline:none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 2s ease-in-out;
    width: 220px;
    transition: width 2s;

    &:hover {
        transition: width 2s;
        width: 60%;
        background: ${({primary}) => (primary ? '#223225' : '#84a88b')};
        color: ${({ dark }) => (dark ? '#c0d8c4' : '#223225')};
    }

    &:active {
        transform:translateY(10%)
    }
`
