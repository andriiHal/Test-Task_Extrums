import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import {Box, Typography} from '@mui/material';

const BasicCarousel = ({
                           firstCardsCarousel, setFirstCardsCarousel, secondCardsCarousel, setSecondCardsCarousel,
                           firstAchievements, setFirstAchievements, secondAchievements, setSecondAchievements,
                           challenges, setChallenges, card
                       }) => {

    function moveCardsFirstBlock(currentCard) {
        const filteredCards = firstCardsCarousel.filter(oldCard => oldCard !== currentCard);
        const removedCard = firstCardsCarousel.filter(oldCard => oldCard === currentCard);
        setChallenges([...challenges, ...removedCard]);
        setFirstAchievements([...firstAchievements, ...removedCard]);
        setFirstCardsCarousel(filteredCards);
    }

    function moveCardsSecondBlock(currentCard) {
        const filteredCards = card.filter(oldCard => oldCard === currentCard);
        const removedCard = secondCardsCarousel.filter(oldCard => oldCard !== currentCard);
        setChallenges([...challenges, ...filteredCards]);
        setSecondAchievements([...secondAchievements, ...filteredCards]);
        setSecondCardsCarousel(removedCard);
    }

    return (
        <Carousel width={480} showThumbs={false}>
            {firstCardsCarousel.map(card => {
                return (
                    <button key={card.key} className='carousel-card carousel-margin' onClick={() => moveCardsFirstBlock(card)}>
                        <Box sx={{width: 330, height: 100, fontWeight: 700, fontSize: 16, opacity: 0.6,
                                  color: '#000', backgroundColor: '#fff', borderRadius: 1, padding: 1.56}}
                             className='carousel-card__carousel-style'>
                            {card.activity}
                        </Box>
                    </button>
                );
            })}
            {secondCardsCarousel.map(card =>
                (
                    <button key={card.key} className='carousel-card carousel-margin'
                            onClick={() => moveCardsSecondBlock(card)}>
                        <Box sx={{width: 350, height: 100, fontWeight: 700, fontSize: 16, color: '#000',
                                  backgroundColor: '#fff', borderRadius: 1, padding: 1.57}}
                             className='carousel-card__carousel-style carousel-card__flex-wrapper'>
                            <Typography sx={{height: 60, fontWeight: 700, opacity: 0.6}} className='carousel-style__text-ideas'>
                                {card.activity}
                            </Typography>
                            <Typography sx={{height: 20, fontWeight: 700, color: '#000'}}
                                        className='carousel-style__text-ideas'>
                                {card.type}
                            </Typography>
                        </Box>
                    </button>
                )
            )}
        </Carousel>
    );
}

export default BasicCarousel