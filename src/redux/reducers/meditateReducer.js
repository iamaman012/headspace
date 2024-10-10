import { createSlice } from '@reduxjs/toolkit';
import {meditate} from "../../data/meditateCardData"

const meditateSlice= createSlice({
    name:"meditate",
    initialState:{
        cards: meditate,
        cardById:null
    },
    reducers:{
        getMeditationById: (state, action) => {
            // Return the meditation item based on the given ID
            state.cardById  = state.cards.find(data=>data.id===action.payload)
        }
    }
});

export const { getMeditationById } = meditateSlice.actions;
 export default meditateSlice.reducer;

