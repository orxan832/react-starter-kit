import { configureStore } from '@reduxjs/toolkit';
import common from './reducers/common';
import user from './reducers/user';

export const store = configureStore({
    reducer: { common, user },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});