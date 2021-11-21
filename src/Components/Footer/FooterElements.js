import styled from 'styled-components/macro'

export const FooterContainer = styled.div`
    background-color: #223225;
`

export const FooterWrap = styled.section`
    padding: 10px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
`
export const FooterLinksWrap = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;

`

export const WebsiteRights = styled.div`
    color: #c0d8c4;
    font-size: .8rem;
    margin-bottom: 16px;
`

export const FooterLinkItems = styled.a`
    color: #c0d8c4;
    font-size: 25px;
    
    &:hover {
        color: #426347;
    }
    `

