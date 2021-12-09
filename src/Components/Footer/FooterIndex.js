import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterLinkItems, WebsiteRights, FooterWrap, FooterLinksWrap } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <WebsiteRights>DDaniela ©  {new Date().getFullYear()}
                    &nbsp; Some rights reserved
                </WebsiteRights>
                <FooterLinksWrap>
                    <FooterLinkItems href='//www.github.com/danielasputnik' target="_blank" aria-label='Github'>
                        <FaGithub />
                    </FooterLinkItems>
                    <FooterLinkItems href='//www.linkedin.com/in/daniela-drdakova-b9035a227/' target="_blank" aria-label='Linkedin'>
                        <FaLinkedin />
                    </FooterLinkItems>
                    <FooterLinkItems href='//www.instagram.com/antidivine/' target="_blank" aria-label='Instagram'>
                        <FaInstagram />
                    </FooterLinkItems>
                    <FooterLinkItems href='//www.youtube.com/channel/UChdwBGsQ3lnuWLmrv2j9y8A' target="_blank" aria-label='Youtube'>
                        <FaYoutube />
                    </FooterLinkItems>
                </FooterLinksWrap>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
