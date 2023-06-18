
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCommentsForPost = createAsyncThunk(
    'comments/fetchComments',
    async (permalink) => {
        const response = await fetch(`https://www.reddit.com${permalink}.json`);
        const json = await response.json();
        if (json[1].data.children[0] === undefined) {
            console.log('no comments');
            return;
        }
        const arrayOfPosts = json[1].data.children;
        return arrayOfPosts;
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: {},
        isLoading: true,
        failedToLoad: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsForPost.pending, state => {
                state.isLoading = true;
                state.failedToLoad = false;
            })
            .addCase(fetchCommentsForPost.fulfilled, (state, action) => {
                state.comments = action.payload;
                state.isLoading = false;
                state.failedToLoad = false;
            })
            .addCase(fetchCommentsForPost.rejected, state => {
                state.isLoading = false;
                state.failedToLoad = true;
            })
    }
})

export default commentsSlice.reducer;
export const selectComments = state => state.comments.comments;
export const selectIsLoading = state => state.comments.isLoading;
export const selectFailedToLoad = state => state.comments.failedToLoad;