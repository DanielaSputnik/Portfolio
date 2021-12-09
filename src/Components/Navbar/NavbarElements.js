import styled from 'styled-components/macro'
import { Link as LinkR} from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: ${({ scrollnav }) => (scrollnav ? '#c0d8c4' : 'transparent')};
    height: 50px;
    margin-top: -80px;
    display:flex;
    justify-content:center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    min-width: 450px;
    top:0;
    z-index: 10;

    @media screen and (max-width:960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-evenly;
height: 80px;
z-index:1;
width:100%;
padding: 0 24px;
max-width: 1100px;
@media screen and (max-width:768px) {
    justify-content: space-between;
    }

`

export const NavHomeLogo = styled(LinkR)`
color: #223225;
justify-self: flex-start;
cursor: pointer;
font-size: 1.7rem;
display:flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
visibility:${({ scrollnav }) => (scrollnav ? 'visible' : 'hidden')};
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px)
{display: block;
position: absolute;
top: -75%;
right: 0;
transform: translate(-100%, 60%);
font-size: 2.5rem;
cursor: pointer;
color:#fff;
}
`

export const NavMenu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px) {
    display: none
}
`
export const NavItem = styled.li`
    height: 40px;
`

export const NavContent = styled.div`
`
export const NavIndicator = styled.div`
    background-color: black;
`

export const NavLinks = styled(LinkS)`
    color: #223225;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.2rem;
    text-decoration: none;
    letter-spacing:1px;

    &:hover {
        color: #fff;
        content: 'dfdfd'
    }
    &.active {
        border-bottom: 5px solid #426347;
    }
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
    display:none
}
`
export const NavBtnLink = styled(LinkR) `
border-radius: 50px 5px;
background: #426347;
white-space: nowrap;
padding: 10px 30px;
color: #c0d8c4;
font-size: 15px;
outline:none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    background: #223225;
}
`
