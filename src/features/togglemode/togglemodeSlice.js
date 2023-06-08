import { createSlice } from '@reduxjs/toolkit';


const togglemodeSlice = createSlice({
    name: 'togglemode',
    initialState: false,
    reducers: {
        toggleMode: (state) => {
            return !state;
        }
    }
})


export default togglemodeSlice.reducer;
export const selecttoggleMode = state => state.togglemode;
export const { toggleMode } = togglemodeSlice.actions;