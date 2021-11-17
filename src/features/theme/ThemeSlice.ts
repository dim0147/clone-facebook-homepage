import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ThemeState {
    value: 'light' | 'dark';
}

const initialState: ThemeState = {
    value: 'light',
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<ThemeState['value']>) => {
            state.value = action.payload;
        },
    },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
