import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "../../features/reducers/index";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { TypedUseSelectorHook } from "react-redux";

const loggerMiddleware = createLogger();

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

const store = createStore(persistedReducer, {}, middleware);

let persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };
