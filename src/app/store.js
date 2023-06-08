import { configureStore } from '@reduxjs/toolkit';
import subredditsReducer from '../features/subreddits/subredditsSlice';
import togglemodeReducer from '../features/togglemode/togglemodeSlice';

export default configureStore({
    reducer: {
        subreddits: subredditsReducer,
        togglemode: togglemodeReducer
    }
})