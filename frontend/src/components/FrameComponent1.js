import CartIcon from "./CartIcon";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <div className="frame-parent5">
      <div className="cartdirectaddingbutton-wrapper">
        <button className="cartdirectaddingbutton">
          <img
            className="cartdirectaddingshape-icon"
            alt=""
            src="/cartdirectaddingshape.svg"
          />
          <div className="cart-add-button">직접 추가하기</div>
        </button>
      </div>
      <footer className="footercartcomponent">
        <div className="footer-line" />
        <CartIcon cartFilledIcon="/cartfilledicon.svg" prop="장바구니" />
        <CartIcon
          cartFilledIcon="/fridgeicon.svg"
          prop="냉장고"
          propLeft="175px"
          propBorderRadius="10px 10px 0px 0px"
          propDisplay="inline-block"
        />
        <CartIcon
          cartFilledIcon="/mypageicon.svg"
          prop="마이페이지"
          propLeft="317px"
          propBorderRadius="unset"
          propDisplay="inline-block"
        />
      </footer>
    </div>
  );
};

export default FrameComponent1;
