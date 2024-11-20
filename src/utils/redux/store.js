import { configureStore, combineReducers } from "@reduxjs/toolkit";
import provinsiReducer from "./provinsiSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  provinsi: provinsiReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/FLUSH",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/REGISTER",
        ],
      },
    }),
});

export const persistor = persistStore(store);
