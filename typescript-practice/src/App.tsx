import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMainData, initMainData } from "./redux/actions/main";
import { RootState } from "./redux/store";
import { MainState } from "./redux/states/main";

function App() {
  const dispatch = useDispatch();

  const mainData: MainState = useSelector((state: RootState) => state.main); // useSelector : 리덕스 스토어의 상태가 바뀌지 않으면 리렌더링하지 않음
  console.log(mainData); // 초기 InitialMain 값 출력

  const employeeInfo = () => {
    let employee: MainState = {
      ...mainData, // MainState의 모든 값을 입력하는 것이 아니라면 mainData 복사 후 추가해야 함
      age: 28,
      career: 1,
    };
    dispatch(addMainData(employee));
  };

  useEffect(() => {
    employeeInfo();
    console.log(mainData); // 상태 값 수정된 addMainData 데이터 출력
  }, []);

  const onReset = () => {
    dispatch(initMainData());
    console.log(mainData); // 초기화한 InitialMain 값 출력
  };

  const onResetCarrer = () => {
    let employee: MainState = {
      ...mainData,
      jobs: "백엔드 개발자",
    };
    dispatch(addMainData(employee));
  };

  return (
    <div className="App">
      <p>{mainData.jobs}</p>
      <p>{mainData.age}</p>
      <p>{mainData.career}</p>
      <button onClick={onReset}>초기화</button>
      <button onClick={onResetCarrer}>직업 바꾸기</button>
    </div>
  );
}

export default App;
