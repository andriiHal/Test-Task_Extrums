import React from "react";
import './App.css';
import {Box, Typography} from "@mui/material";

const CircleItem = ({type, participants}) => {

    return (
        <Box sx={{width: 110, height: 150}} className='circle-item'>
            <Typography sx={{width: 110, height: 110, fontSize: 22, fontWeight: 700, borderRadius: 15}}
                        backgroundColor={'#ffffff'} className='circle-item__circle'>
                {participants}
            </Typography>
            <Typography sx={{fontWeight: 700, fontSize: 19}}>
                {type}
            </Typography>
        </Box>
    );
}

export default CircleItem