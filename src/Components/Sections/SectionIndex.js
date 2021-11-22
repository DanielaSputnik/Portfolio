import React from 'react'
import { Button } from '../ButtonElements'
import {
    Column2,
    Img,
    ImgWrap,
    SectionContainer,
    SectionWrapper,
    SectionRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    NavBtnLink
} from './SectionElements'

const Section = ({
    lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2 }) => {
    return (
        <>
            <SectionContainer lightBg={lightBg} id={id} >
                <SectionWrapper>
                    <SectionRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine> {topLine} </TopLine>
                                <Heading lightText={lightText}> {headline} </Heading>
                                <Subtitle darkText={darkText}> {description} </Subtitle>
                                <BtnWrap>
                                    <NavBtnLink to='/cv'
                                    >{buttonLabel}
                                    </NavBtnLink>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </SectionRow>
                </SectionWrapper>
            </SectionContainer>
        </>
    )
}

export default Section
