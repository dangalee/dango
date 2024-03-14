import FrameComponent2 from "../components/FrameComponent2";
import "./SignupPage.css";

const SignupPage = () => {
  return (
    <form className="signuppage">
      <div className="signup-frame">
        <div className="inner-frameemail">
          <div className="inner-framepassword">
            <img
              className="vectorarrow-icon"
              loading="lazy"
              alt=""
              src="/vector-101.svg"
            />
          </div>
          <b className="b">회원가입</b>
        </div>
      </div>
      <section className="main-frame1">
        <FrameComponent2 inputText="이메일 주소" />
        <FrameComponent2
          inputText="비밀번호"
          propFlex="unset"
          propPadding="unset"
          propHeight="104.3px"
        />
        <FrameComponent2
          inputText="비밀번호 확인"
          propFlex="unset"
          propPadding="unset"
          propHeight="104.4px"
        />
      </section>
      <button className="group-button">
        <div className="frame-child10" />
        <div className="div10">가입하기</div>
      </button>
    </form>
  );
};

export default SignupPage;
