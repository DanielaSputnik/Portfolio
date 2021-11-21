import Card from './Card'
import {
    CardsContainer,
    CardsWrapper,
    CardsH1
} from './CardsElements'


const CardSection = ({ lightBg, id, lightText, darkText, cards, lightCard, imgStart, toggleFW, linkedCard }) => {
    return (
        <>
            <CardsContainer lightBg={lightBg} id={id}>
                <CardsH1 lightText={lightText}> {id} </CardsH1>
                <CardsWrapper>
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            cardId={card.id}
                            title={card.cTitle}
                            text={card.cDesc}
                            image={card.cImg}
                            btntxt={card.btn}
                            linkedCard={linkedCard}
                            url={card.url}
                            fullImg={card.fullImg}
                            darkText={darkText}
                            lightCard={lightCard}
                            imgStart={imgStart}
                            toggleFW={toggleFW}
                        />
                    ))}
                </CardsWrapper>
            </CardsContainer>
        </>
    )
}

export default CardSection
