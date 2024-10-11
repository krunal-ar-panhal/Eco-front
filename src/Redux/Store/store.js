import { combineReducers, configureStore } from "@reduxjs/toolkit";
import shopReducer from "../Shop/ShopSlice";
import authReducer from "../Auth/authSlice";
import themeReducer from '../theme/themeSlice';
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({ 
  auth: authReducer, 
  shop: shopReducer, 
  theme: themeReducer 
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export const persistor = persistStore(store);
