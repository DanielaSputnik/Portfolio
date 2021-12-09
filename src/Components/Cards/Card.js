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
    FullImgIcon,
    OpenWindowWrapper,
    OpenWindowText,
    // StyledCardContent,
    // CardsIconBack
} from './CardsElements'
import FullView from './FullView'

const Card = ({ title, text, image, btntxt, url, darkText, lightCard, imgStart, toggleFW, linkedCard, fullImg, addText }) => {
    const [toggleFullView, setToggleFullView] = useState(false);
    // const [selectedCard, setSelectedCard] = useState('');

    const openCard = (e) => {
        e.preventDefault();
        if (toggleFW) {
            setToggleFullView(true);
            // setSelectedCard(e.target.id);
        }
    }

    const goToSite = (url) => {
        window.open(url);
    }

    return (
        <>
            <FullView
                toggleFW={toggleFW}
                trigger={toggleFullView}
                setTrigger={setToggleFullView}
                windowTitle={title}
            >
                <OpenWindowWrapper>
                    <FullImgIcon src={fullImg} />
                    <OpenWindowText> {addText}
                    </OpenWindowText>
                </OpenWindowWrapper>
            </FullView>
            <StyledCard lightCard={lightCard} imgStart={imgStart} >
                <StyledCardSide lightCard={lightCard} imgStart={imgStart}>
                        <ColumnImage>
                        {linkedCard ? <CardsIcon src={image} onClick={() => goToSite(url)} /> : <CardsIcon src={fullImg} onClick={openCard}/>}
                        </ColumnImage>
                        <ColumnText>
                            <CardsH2 darkText={darkText}>{title}</CardsH2>
                            <CardsP darkText={darkText}>{text}</CardsP>
                            {linkedCard ? <CardsBtn onClick={() => goToSite(url)}>{btntxt} </CardsBtn> : <></>}
                        </ColumnText>
                    </StyledCardSide>
            </StyledCard>
            
        </>
    )
}

export default Card