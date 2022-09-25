import { InitialMain, MainState } from "../states/main";
import { ADD_MAIN_DATA, INIT_MAIN_DATA, MainAction } from "../actions/main";

function main(state: MainState = InitialMain, action: MainAction): MainState {
  // main의 초기 상태는 InitialMain 으로 초기화
  switch (action.type) {
    case ADD_MAIN_DATA: {
      return action.payload;
    }
    case INIT_MAIN_DATA: {
      return InitialMain;
    }
    default: {
      return state;
    }
  }
}

export default main;
