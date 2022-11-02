import React from "react";
import {Card, CardContent, Typography} from "@mui/material";

const BasicCard = ({activity, type, secondCardsCarousel, setSecondCardsCarousel, freshIdeas, setFreshIdeas, card}) => {

    function addFreshIdeas() {
        const filteredFreshIdeas = freshIdeas.filter(oldCard => oldCard !== card);
        setSecondCardsCarousel([...secondCardsCarousel, card]);
        setFreshIdeas(filteredFreshIdeas);
    }

    return (
        <button className='ideas-card' onClick={() => addFreshIdeas()}>
            <Card sx={{maxWidth: 340}}>
                <CardContent>
                    <Typography sx={{fontSize: 16, fontWeight: 700, maxWidth: 300, maxHeight: 50, marginBottom: 2}}
                                color="text.secondary">
                        {activity}
                    </Typography>
                    <Typography sx={{fontSize: 16, fontWeight: 700, height: 16}} variant="body2">
                        {type}
                    </Typography>
                </CardContent>
            </Card>
        </button>
    );
}

export default BasicCard