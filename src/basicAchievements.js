import React, {useContext} from "react";
import './App.css';
import {Box} from "@mui/material";
import CircleItem from "./circleItem";
import {FirstAchievementsContext, SecondAchievementsContext, ThirdAchievementsContext} from "./App";

const BasicAchievement = () => {
    const firstBlockAchievements = useContext(FirstAchievementsContext);
    const secondBlockAchievements = useContext(SecondAchievementsContext);
    const thirdBlockAchievements = useContext(ThirdAchievementsContext);

    return (
        <Box sx={{height: 450}} className='circle'>
            <Box sx={{width: 1100, height: 200}} className='circle__circle-block'>
                {firstBlockAchievements.map((type, participants) =>
                    <CircleItem {...type}{...participants}/>
                )}
            </Box>
            <Box sx={{width: 900, height: 200}} className='circle__circle-block'>
                {secondBlockAchievements.map((type, participants) =>
                    <CircleItem {...type}{...participants}/>
                )}
                {thirdBlockAchievements.map((type, participants) =>
                    <CircleItem {...type}{...participants}/>
                )}
            </Box>
        </Box>
    );
}

export default BasicAchievement