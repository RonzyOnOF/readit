import { configureStore } from '@reduxjs/toolkit';
import subredditsReducer from '../features/subreddits/subredditsSlice';
import individualPostReducer from '../features/posts/IndividualPostSlice';
import commentsReducer from '../features/comments/commentsSlice';

export default configureStore({
    reducer: {
        subreddits: subredditsReducer,
        individualPost: individualPostReducer,
        comments: commentsReducer

    }
})