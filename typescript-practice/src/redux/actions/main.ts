import { MainState } from "../states/main";

export const ADD_MAIN_DATA = "ADD_MAIN_DATA" as const;
export const INIT_MAIN_DATA = "INIT_MAIN_DATA" as const;

export const addMainData = (payload: MainState) => ({
  type: ADD_MAIN_DATA, // action.type
  payload, // 매개변수
});

export const initMainData = () => ({
  type: INIT_MAIN_DATA, // action.type
});

export type MainAction =
  | ReturnType<typeof addMainData>
  | ReturnType<typeof initMainData>;
