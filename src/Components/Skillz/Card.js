import React, { useState } from 'react';
import {
    CardsH2,
    CardsIcon,
    CardsP,
    StyledCard,
    ColumnText,
    ColumnImage,
    CardsBtn,
    StyledCardSide,
    StyledCardContent,
    CardsIconBack
} from './CardsElements'
import FullView from './FullView'

const Card = ({title, text, image, btntxt, url, darkText, lightCard, imgStart, toggleFW, linkedCard, fullImg }) => {
    const [toggleFullView, setToggleFullView] = useState(false)
    // const [selectedCard, setSelectedCard] = useState('')

    // const openCard = (e) => {
    //     e.preventDefault();
    //     if (toggleFW) {
    //         setToggleFullView(true)
    //         setSelectedCard(e.target.id)
    //     }
    // }

    const goToSite = (url) => {
        window.open(url)
    }

    return (
        <>
            <FullView
                toggleFW={toggleFW}
                trigger={toggleFullView}
                setTrigger={setToggleFullView}>
                <CardsIcon src={fullImg} />
            </FullView>
            <StyledCard lightCard={lightCard} imgStart={imgStart} >
                <StyledCardContent>

                    <StyledCardSide className='front' lightCard={lightCard} imgStart={imgStart}>
                        <ColumnImage>
                            <CardsIcon src={image} />
                        </ColumnImage>
                        <ColumnText>
                            <CardsH2 darkText={darkText}>{title}</CardsH2>
                            <CardsP darkText={darkText}>{text}</CardsP>
                            
                        </ColumnText> 
                    </StyledCardSide>

                    <StyledCardSide className='back' lightCard={lightCard}>
                        {linkedCard ? <CardsBtn onClick={() => goToSite(url)}>{btntxt} </CardsBtn> : <CardsIconBack src={fullImg}/>}
                    </StyledCardSide>

                </StyledCardContent>
            </StyledCard>
            
        </>
    )
}

export default Card