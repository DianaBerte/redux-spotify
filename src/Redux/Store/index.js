import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "../Reducers/favourite";
import songReducer from "../Reducers/song";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
// import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  storage: localStorage,
  key: "root",
  //   transforms: [
  //     encryptTransform({
  //       secretKey: process.env.REACT_APP_ENV_SECRET_KEY,
  //     }),
  //   ],
};

const mainReducer = combineReducers({
  favourite: favouriteReducer,
  job: songReducer,
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

const persistedStore = persistStore(store);

export { store, persistedStore };
