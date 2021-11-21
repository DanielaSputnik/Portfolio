import styled from 'styled-components/macro'

export const FWWindow = styled.div`
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.836);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 90;
    /* background: ${({ lightBg }) => (lightBg ? '#c0d8c4' : '#426347')}; */

`

export const FWWindowInner = styled.div`
    position: relative;
    padding: 32px;
    width: 100%;
    height: 70%;
    max-width: 1300px;
    border-radius: 5px;
    padding: 40px;
    cursor: default;
    background: #c0d8c4;
`

export const FWCloseBtn = styled.button`
    position: absolute;
    top:-10rem;
    right: -10rem;
	transition: transform .25s, opacity .25s;
	opacity: .4;
	cursor: pointer;
	font-size: 5rem;
	font-family: serif;
    background: transparent;
    color:whitesmoke;
    border:none;
    content: "\d7";
`