import { configureStore } from '@reduxjs/toolkit';
import common from './reducers/common';

export const store = configureStore({
    reducer: { common },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});