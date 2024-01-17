import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import reducer from "../reducers";
import storage from "redux-persist/lib/storage";
import { persistReducer, PERSIST, PURGE } from "redux-persist";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

// config 작성
const persistConfig = {
  key: "root",
  storage, // 로컬 스토리지에 저장
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk,
      serializableCheck: {
        ignoredActions: [PERSIST, PURGE],
      },
    }).concat(logger),
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
