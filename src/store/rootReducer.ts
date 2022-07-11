import {combineReducers} from 'redux';
import {configureStore} from "@reduxjs/toolkit";
import getWeatherReducer from "./reducer/getWeather";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}


export const rootReducer = combineReducers({
    getWeatherReducer: getWeatherReducer,
})


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persist = persistStore(store)
export default store;
export type AppDispatch = typeof store.dispatch
