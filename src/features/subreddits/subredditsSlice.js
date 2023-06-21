import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import reactLog from '../../images/React-icon.svg.png';
import { v4 } from 'uuid';
import jdmlogo from '../../images/jdmwing.png';
import peep from '../../images/peepingg.png';
import gallery from '../../images/gallery.png';
import pcmr from '../../images/pcmr.png';
import gym from '../../images/gymmotivation.png';




const subredditsArray = [{topic: 'onlyJDM', image: jdmlogo, id: v4()}, {topic: 'Animemes', image: peep, id: v4()}, {topic: 'GymMotivation', image: gym, id: v4()}, {topic: 'pics', image: gallery, id: v4()}, {topic: 'react', image: reactLog, id: v4()}, {topic: 'PCBuild', image: pcmr, id: v4()}]


//middlethunk to fetch subreddit that returns array of posts
export const loadSubreddit = createAsyncThunk(
    'subreddits/getSubreddit',
    async(cat) => {
        const data = await fetch(`https://www.reddit.com/r/${cat}.json`);
        const json = await data.json();
        console.log(json.data.children);
        const arrayOfPosts = json.data.children;
        return arrayOfPosts;
    }
)



const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: subredditsArray,
        currentSubreddit: 'r/onlyJDM',
        currentSubredditFeed: {},
        isLoading: true,
        failedToLoad: false
    },
    reducers: {
        changeCurrentSubreddit: (state, action) => {

            state.currentSubreddit = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder 
            .addCase(loadSubreddit.pending, (state) => {
                state.isLoading = true;
                state.failedToLoad = false;
                state.currentSubredditFeed = [];
            })
            .addCase(loadSubreddit.fulfilled, (state, action) => {
                state.isLoading = false;
                state.failedToLoad = false;
                state.currentSubredditFeed = action.payload;
            })
            .addCase(loadSubreddit.rejected, (state) => {
                state.isLoading = false;
                state.failedToLoad = true;
            })
    }
})




export default subredditsSlice.reducer;
export const { changeCurrentSubreddit } = subredditsSlice.actions;
export const selectIsLoading = state => state.subreddits.isLoading;
export const selectCurrentSubreddit = state => state.subreddits.currentSubreddit;
export const selectSubreddits = state => state.subreddits.subreddits;
export const selectSubredditFeed = state => state.subreddits.currentSubredditFeed;