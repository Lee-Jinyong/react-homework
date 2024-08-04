interface Props {
  isActive: boolean;
}

export default function AutoLoginButton({ isActive }: Props): JSX.Element {

  const handleClickWrapper = () => {
    // 1. 자동로그인 데이터를 true, false로 업데이트 해주는 함수
    // 2. 혹은 isActive를 true, false로 변경 후 리렌더링 하는 함수
    //    (이후 서버와 통신할 때 해당 내용을 데이터에 반영)
  }

  return (
    <div className="autoLoginWrapper" onClick={handleClickWrapper}>
      <span>자동로그인</span>
      {isActive?
        <img className="checkButton" src="/CheckActive.svg" alt="활성화"/>:
        <img className="checkButton" src="/CheckDeactive.svg" alt="비활성화"/>}
    </div>
  )
}