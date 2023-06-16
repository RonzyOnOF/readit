import { configureStore } from '@reduxjs/toolkit';
import subredditsReducer from '../features/subreddits/subredditsSlice';
import togglemodeReducer from '../features/togglemode/togglemodeSlice';
import individualPostReducer from '../features/posts/IndividualPostSlice';

export default configureStore({
    reducer: {
        subreddits: subredditsReducer,
        togglemode: togglemodeReducer,
        individualPost: individualPostReducer
    }
})