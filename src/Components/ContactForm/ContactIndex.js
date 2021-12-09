import React, { useState, useRef } from 'react'
import { ContactContainer, ContactWrapper, FormInput, FormContactInfoWrapper, ContactScreen, ScreenHeader, ScreenBodyForm, ScreenBodyItem, ScreenBodyItemLeft, FormGroupMessage, ContactInfo, Title, ButtonWrapper,  RadioWrapper, RadioContainer, RadioLabel, RadioButtonInput, RadioSelectionLabel, RadioTitle, ButtonClear, ButtonSend, MailIcon, LeftWrapper, ContactH1 } from './ContactElements'
import mailbox from '../../Images/mail.svg'
import emailjs from 'emailjs-com'

const Contact = () => {
    const [prefContactMethod, setPrefContactMethod] = useState("email");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [text, setText] = useState('');
    const [confirmation, setConfirmation] = useState(false)
    const [notification, setNotification] = useState('')

    const handleSelectMethod = (e) => {
        const value = e.target.value;
        setPrefContactMethod(value);
    };
    const handleNameChange = (e) => {
        setName(e.target.value)
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    };
    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    };
    const handleTextChange = (e) => {
        setText(e.target.value)
    };

    const handleClearForm = () => {
        setName('')
        setEmail('')
        setPhone('')
        setText('')
    }

    function validateEmail(email) {
        var rex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return rex.test(email);
    }

    function notificate(notifText) {
        setNotification(notifText);
        setConfirmation(true);
        setTimeout(() => { setConfirmation(false) }, 2500);
    };

    const form = useRef();

    const handleSend = (e) => {
        e.preventDefault();
        
        if (!name || !email || !text) {
            notificate('Form not filled in!');        
        }
        else if (isNaN(phone)) {
            notificate('Please input only digits in the phone number section.')
        }
        else if (!validateEmail(email)) {
            notificate('Incorrect email address format.')
        }
        else {
            emailjs.sendForm('service_x89uirn', 'template_ni2befn', form.current, 'user_Z0Rlr5xkgMcllg6QEXsMr')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            notificate('Thank you! Email sent successfully.')
            handleClearForm();
        }
    }

    return (
        <>
            <ContactContainer id='contact'>
                <ContactWrapper>
                    <ContactH1>Contact</ContactH1>
                    <ContactScreen>
                        <ScreenHeader>{confirmation ? notification : ''}</ScreenHeader>
                        <ScreenBodyForm ref={form} onSubmit={handleSend}>
                            <ScreenBodyItem>
                                <ScreenBodyItemLeft>
                                    <MailIcon src={mailbox} />
                                    <Title>GET IN TOUCH</Title>
                                    <LeftWrapper>
                                        <ContactInfo>Daniela Drdakova</ContactInfo>
                                        <ContactInfo>ddrdakova@outlook.com</ContactInfo>
                                        <ContactInfo>+420 792 266 073</ContactInfo>
                                    </LeftWrapper>
                                </ScreenBodyItemLeft>
                            </ScreenBodyItem>
                            <ScreenBodyItem>
                                <FormContactInfoWrapper>
                                    <FormInput type='text' name='name' placeholder='Name' value={name} onChange={handleNameChange} required/>
                                    <FormInput type='email' name='email' placeholder='Email' value={email} onChange={handleEmailChange} required/>
                                    <FormInput type='tel' name='phone' placeholder='Phone (Optional)'
                                    value={phone} onChange={handlePhoneChange}/>
                                </FormContactInfoWrapper>
                                <RadioContainer>
                                    <RadioTitle>YOUR PREFERRED CONTACT METHOD:</RadioTitle>
                                    <RadioWrapper>
                                        <RadioButtonInput
                                            type='radio'
                                            name='radio'
                                            value="email"
                                            checked={prefContactMethod === "email"}
                                            onChange={(e) => handleSelectMethod(e)}>
                                        </RadioButtonInput>
                                        <RadioLabel/>
                                        <RadioSelectionLabel>Email</RadioSelectionLabel>
                                    </RadioWrapper>
                                    <RadioWrapper> 
                                        <RadioButtonInput
                                            type='radio'
                                            name='radio'
                                            value="phone"
                                            checked={prefContactMethod === "phone"}
                                            onChange={(e) => handleSelectMethod(e)}>
                                        </RadioButtonInput>
                                        <RadioLabel/>
                                        <RadioSelectionLabel>Phone</RadioSelectionLabel>
                                    </RadioWrapper>
                                </RadioContainer>
                                <FormGroupMessage
                                    name='message' placeholder='Message' rows='8'
                                    value={text} onChange={handleTextChange}>
                                </FormGroupMessage>
                                <ButtonWrapper>
                                    <ButtonClear onClick={handleClearForm}>Clear Form</ButtonClear>
                                    <ButtonSend type='submit' onClick={handleSend}>Send</ButtonSend>
                                </ButtonWrapper>
                            </ScreenBodyItem>
                        </ScreenBodyForm>
                    </ContactScreen>
                </ContactWrapper>
            </ContactContainer>
        </>
    )
}

export default Contact
