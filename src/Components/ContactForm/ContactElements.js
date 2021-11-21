import styled from 'styled-components/macro'

export const ContactContainer = styled.div`
    display: flex;
    background: #c0d8c4;
    color:#fff;
    align-items: center;
    height: 950px;
    margin: 0px;
    width: 100%;
    @media screen and (max-width: 1100px) {
        height: 1000px;
    }
`
export const ContactWrapper = styled.div`
    max-width: 850px;
    flex:  800px;
    margin: auto;
    padding: 10px;
    @media screen and (max-width: 900px) {
        max-width: 500px;
    }
`
export const ContactH1 = styled.h1`
    font-size: 5rem;
    font-weight: 900;
    letter-spacing: 1.4px;
    text-transform: capitalize;
    margin-bottom: 1.2rem;
    color: #223225;
    text-align: center;
    @media screen and (max-width: 900px) {
        font-size: 4rem;
    }
`

export const ContactScreen = styled.div`
    position: relative;
    background: #426347;
    min-height: 355px;
    border-radius: 10px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
`
export const ScreenHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    padding: 10px 20px;
    background: #223225;
    border-radius: 10px 10px 0 0;
`

export const ScreenBodyForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`    
export const ScreenBodyItem = styled.div`
    justify-content: center;
    padding: 30px 30px 0px 30px;
    min-height: 300px;
    align-items: center;
    @media screen and (max-width: 900px) {
        padding: 10px 10px 0px 50px;
    }
`
export const ScreenBodyItemLeft = styled.div`
    display: grid;
    justify-content: center;
    grid-template-rows: 1fr 0.2fr 0.2fr;
    padding-left: 25px;

    @media screen and (max-width: 900px) {
        grid-template-rows: 0.1fr 0.1fr 0.1fr ;
        justify-content: left;
        border-bottom: 1px solid #223225;
        padding-left: 0;
        margin-right: 50px;
    }
`
export const LeftWrapper = styled.div`
`

export const MailIcon = styled.img`
    height: 250px;
    width: 220px;
    margin: 0px 20px;

    @media screen and (max-width: 900px) {
        margin: 0;
        max-height: 150px;
    }
`


export const Title = styled.h1`
    display: flex;
    flex-direction: column;
    position: relative;
    color: #c0d8c4;
    font-size: 30px;
    padding-bottom: 5px;
`

export const ContactInfo = styled.div`
    margin-top: auto;
    font-size: 20px;
    font-weight: bold;
    color: #223225;
    padding-top: 5px;
`

export const FormContactInfoWrapper = styled.div`
    margin-bottom: 15px;
    margin-right: 80px;
`

export const FormGroupMessage = styled.textarea`
    margin-top: 5px;
    padding: 10px;
    background: #426347;
    resize: none;
    border: none;
    border: 1px solid #666;
    font-size: 16px;
    color: #fff;

    &::placeholder{
        font-style: italic;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.4);
    }

    &:focus {
    outline: none;
    border: 1px solid #c0d8c4;
    }
`

export const FormInput = styled.input`
    width: 100%;
    padding: 10px 0;
    background: none;
    border: none;
    border-bottom: 1px solid #666;
    color: #ddd;
    font-size: 14px;
    outline: none;
    transition: border-color .2s;

    &::placeholder{
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.4);
    }
    &:focus {
    outline: none;
    border-bottom: 1px solid #c0d8c4;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ButtonClear = styled.div`
    border-radius: 45px 5px;
    background: #223225;
    white-space: nowrap;
    padding: 5px 25px;
    margin: 5px;
    color: #fff;
    font-size: 15px;
    outline:none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

&:hover{
    background: #84a88b;
    color: maroon;
}
`
export const ButtonSend = styled.div`
    border-radius: 45px 5px;
    background: #223225;
    white-space: nowrap;
    padding: 5px 25px;
    margin: 5px;
    color: #fff;
    font-size: 15px;
    outline:none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

&:hover{
    background: #84a88b;
    color: white;
}
`

export const RadioContainer = styled.div`
    height: auto;
    width: 100%;
    padding: 0px 16px 0px 16px;
    box-sizing: border-box;
`

export const RadioTitle = styled.div`
    color: #c0d8c4;
    font-size: 14px;
    margin-left: -15px;
`

export const RadioWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 20px;
    position: relative;
`
export const RadioLabel = styled.label`
    position: absolute;
    top: 25%;
    left: 4px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #c0d8c4;
    cursor: pointer;
`

export const RadioButtonInput = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    margin-right: 20px;
    cursor: pointer;
    &:hover ~ ${RadioLabel} {
        background: #84a88b;
        &::after {
            content: "";
            display: block;
            border-radius: 50%;
            width: 7px;
            height: 7px;
            margin: 4px;
            background: #eeeeee;
        }
    } 
    ${(props) =>
        props.checked && ` 
    &:checked + ${RadioLabel} {
        background: #223225;
        border: solid 1px #223225;
        &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 7px;
        height: 7px;
        margin: 3px;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: #c0d8c4;
        }
        }
    `}

`

export const RadioSelectionLabel = styled.div`
    color: #c0d8c4;
    font-size: 15px;
`;
