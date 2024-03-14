import { useMemo } from "react";
import "./CartIcon.css";

const CartIcon = ({
  cartFilledIcon,
  prop,
  propLeft,
  propBorderRadius,
  propDisplay,
}) => {
  const cartIconStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const cartFilledIconStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const divStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className="carticon" style={cartIconStyle}>
      <div className="fridge-icon1">
        <img
          className="cartfilledicon"
          loading="lazy"
          alt=""
          src={cartFilledIcon}
          style={cartFilledIconStyle}
        />
      </div>
      <div className="div27" style={divStyle}>
        {prop}
      </div>
    </div>
  );
};

export default CartIcon;
