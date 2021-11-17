import { configureStore } from '@reduxjs/toolkit';

import themeReducer from '@/features/theme/ThemeSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDisPatch = typeof store.dispatch;

export const useAppDisPatch = () => useDispatch<AppDisPatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
