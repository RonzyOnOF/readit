import { createSlice } from '@reduxjs/toolkit';


const individualPost = createSlice({
    name: 'individualPost',
    initialState: '',
    reducers: {
        changeCurrentIndividualPost: (state, action) => {
            state.individualPost = action.payload;
        }
    }
})

export default individualPost.reducer;
export const { changeCurrentIndividualPost } = individualPost.actions;
export const selectCurrentIndividualSubreddit = state => state.individualPost;