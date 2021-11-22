import React, { useState, useEffect } from 'react'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
} from './NavbarElements'
import { ImMenu } from 'react-icons/im'
import {animateScroll as scroll} from 'react-scroll'
import { FaHome } from 'react-icons/fa';

function Navbar({ toggle }) {
    const [scrollnav, setScrollnav] = useState(false);
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    const changeNav = () => {
        if(window.scrollY >= 200) {
            setScrollnav(true)
        }
        else {
            setScrollnav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])


    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav scrollnav={scrollnav? 1 : 0}>
                <NavbarContainer>
                    <NavLogo scrollnav={scrollnav ? 1 : 0}
                            to='/'
                            onClick={toggleHome}>
                        <FaHome/>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <ImMenu/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-40}>
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='skills'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-50}>
                                Skills
                            </NavLinks>
                        </NavItem>
                        <NavItem onMouseEnter={onHover}
                                onMouseLeave={onHover}>
                            <NavLinks to='projects'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-50}>
                                {hover ? '<Projects/>': 'Projects'}
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='experiences'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-50}>
                                Experiences
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-50}>
                                Contact
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/cv'>Open CV</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
