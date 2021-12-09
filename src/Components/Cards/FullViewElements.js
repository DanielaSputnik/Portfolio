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
    max-width: 500px;
    max-height: 450px;
    border-radius: 5px;
    padding: 40px;
    cursor: default;
    background: #c0d8c4;
    @media screen and (max-width: 750px){
        height: 420px;
        width: 350px;
    }
`

export const FWCloseBtn = styled.button`
    position: absolute;
    top:-4rem;
    right: -1rem;
	transition: transform .25s, opacity .25s;
	opacity: .4;
	cursor: pointer;
	font-size: 2rem;
	font-family: serif;
    background: transparent;
    color:whitesmoke;
    border:none;

    &:hover{
	opacity: 1;
	transform: rotateZ(90deg);
    }
    @media screen and (max-width: 750px){
        top: -3rem;
        right: 0rem;
    }
`

export const FWHeader = styled.h1`
    position: absolute;
    top:-4rem;
    opacity: .8;
    right:18rem;
    color:whitesmoke;
    width: 200px;

    @media screen and (max-width: 750px){
        right:9rem;
    }
`