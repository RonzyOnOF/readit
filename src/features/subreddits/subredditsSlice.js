import { createSlice } from '@reduxjs/toolkit';
import reactLog from '../../../public/images/React-icon.svg.png';
import { v4 } from 'uuid';


const subredditsArray = [{topic: 'pics', image: reactLog, id: v4()}, {topic: 'pics', image: reactLog, id: v4()}, {topic: 'pics', image: reactLog, id: v4()}, {topic: 'pics', image: reactLog, id: v4()}, {topic: 'pics', image: reactLog, id: v4()}]

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: subredditsArray,
        currentSubreddit: 'r/home'
    },
    reducers: {
        changeCurrentSubreddit: (state, action) => {
            state.currentSubreddit = action.payload;
        }
    }
})




export default subredditsSlice.reducer;
export const { changeCurrentSubreddit } = subredditsSlice.actions;
export const selectCurrentSubreddit = state => state.subreddits.currentSubreddit;
export const selectSubreddits = state => state.subreddits.subreddits;