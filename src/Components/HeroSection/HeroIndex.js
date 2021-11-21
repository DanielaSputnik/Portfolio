import React, {useState} from 'react'
import { Button } from '../ButtonElements'
import {
    HeroContainer,
    HeroBg,
    ImageBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroP2,
    HeroBtnWrapper,
    ArrowDown,
    ArrowForward,
    HeroContentWrapper
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <ImageBg />
            </HeroBg>
            <HeroContentWrapper>
                <HeroContent>
                    <HeroH1>
                        Hi & Welcome!
                    </HeroH1>
                    <HeroP>
                        <HeroP2>I'm DANIELA</HeroP2>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;junior front-end developer based in Brno
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to='about' onMouseEnter={onHover}
                                        onMouseLeave={onHover}
                            primary={true? 1 : 0}
                            dark={true? 1 : 0}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-70}>
                            See More About Me {hover ? <ArrowDown/> : <ArrowForward    />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContentWrapper>
        </HeroContainer>
    )
}

export default HeroSection
