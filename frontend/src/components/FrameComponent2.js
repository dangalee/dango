import { useMemo } from "react";
import "./FrameComponent2.css";

const FrameComponent2 = ({ inputText, propFlex, propPadding, propHeight }) => {
  const buttonFrameStyle = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
      height: propHeight,
    };
  }, [propFlex, propPadding, propHeight]);

  return (
    <div className="button-frame" style={buttonFrameStyle}>
      <div className="input-group">
        <b className="b1">{inputText}</b>
      </div>
      <div className="inputshape3" />
    </div>
  );
};

export default FrameComponent2;
