import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent.css";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onLoginButtonClick = useCallback(() => {
    navigate("/beforeconnectrefri");
  }, [navigate]);

  const onSignupButtonClick = useCallback(() => {
    navigate("/signuppage");
  }, [navigate]);

  return (
    <div className="frame-wrapper">
      <div className="socialloginbutton-parent">
        <button className="socialloginbutton">
          <div className="socialloginbutton-child" />
          <div className="div13">구글로 로그인 하기</div>
        </button>
        <button className="loginbutton" onClick={onLoginButtonClick}>
          <div className="loginbutton-child" />
          <div className="div14">로그인</div>
        </button>
        <button className="signupbutton" onClick={onSignupButtonClick}>
          <div className="signupbutton-child" />
          <div className="div15">회원가입</div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent;
