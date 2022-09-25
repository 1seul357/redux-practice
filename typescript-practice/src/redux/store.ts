import Main from "./reducers/main";
import { combineReducers, createStore } from "redux";
import { persistReducer } from "redux-persist"; // 새로고침 시에도 리덕스 상태 유지
import storage from "redux-persist/lib/storage"; // localStorage 불러오기

const persistConfig = {
  key: "root",
  storage, // localStorage
};

const rootReducer = combineReducers({
  main: Main,
});

// persistedReducer 생성
const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(persistedReducer);
