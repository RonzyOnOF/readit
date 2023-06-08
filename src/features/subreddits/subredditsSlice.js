import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import reactLog from '../../images/React-icon.svg.png';
import { v4 } from 'uuid';


const subredditsArray = [{topic: 'pics', image: reactLog, id: v4()}, {topic: 'pics', image: reactLog, id: v4()}, {topic: 'pics', image: reactLog, id: v4()}, {topic: 'pics', image: reactLog, id: v4()}, {topic: 'pics', image: reactLog, id: v4()}]

export const loadSubreddit = createAsyncThunk(
    'subreddits/getSubreddit',
    async() => {
        const data = await fetch('https://www.reddit.com/r/JDM.json');
        const json = await data.json();
        const { thumbnail, title, ups } = json.data.children[0].data;
        console.log(thumbnail);
        console.log(title);
        console.log(ups);
        console.log(json.data.children[0].data);
    }
)

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