import { configureStore } from '@reduxjs/toolkit';
import subredditsReducer from '../features/subreddits/subredditsSlice';
import togglemodeReducer from '../features/togglemode/togglemodeSlice';
import individualPostReducer from '../features/posts/IndividualPostSlice';
import commentsReducer from '../features/comments/commentsSlice';

export default configureStore({
    reducer: {
        subreddits: subredditsReducer,
        togglemode: togglemodeReducer,
        individualPost: individualPostReducer,
        comments: commentsReducer

    }
})