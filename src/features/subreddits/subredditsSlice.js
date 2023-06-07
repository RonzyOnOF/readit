import { createSlice } from '@reduxjs/toolkit';
import reactLog from '../../../public/images/React-icon.svg.png';


const subredditsArray = [{topic: 'pics', image: reactLog}, {topic: 'pics', image: reactLog}, {topic: 'pics', image: reactLog}, {topic: 'pics', image: reactLog}, {topic: 'pics', image: reactLog}]

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
export const selectCurrentSubreddit = state => state.currentSubreddit;
export const selectSubreddits = state => state.subreddits.subreddits;