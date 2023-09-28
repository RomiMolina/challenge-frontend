import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import projectReducer from '../reducer/index'; 

const persistConfig = {
  key: 'root',
  storage, 
};

const persistedReducer = persistReducer(persistConfig, projectReducer);

export const store = configureStore({
  reducer: {
    projects: persistedReducer, 
  },
});

export const persistor = persistStore(store);

