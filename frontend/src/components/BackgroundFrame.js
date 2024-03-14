import "./BackgroundFrame.css";

const BackgroundFrame = () => {
  return (
    <div className="background-frame">
      <div className="add-to-cart-button">
        <div className="added-item">
          <div className="ice-cream-wrapper">
            <button className="ice-cream">
              <img className="ice-cream-child" alt="" src="/rectangle-22.svg" />
              <div className="div19">모짜렐라 치즈</div>
            </button>
          </div>
          <div className="added-item-inner">
            <div className="frame-parent2">
              <div className="frame-wrapper1">
                <div className="vector-container">
                  <img
                    className="frame-child13"
                    alt=""
                    src="/rectangle-21.svg"
                  />
                  <div className="div20">아이스크림</div>
                </div>
              </div>
              <div className="vector-parent1">
                <img className="frame-child14" alt="" src="/rectangle-23.svg" />
                <div className="div21">당근</div>
              </div>
            </div>
          </div>
          <div className="frame-parent3">
            <div className="vector-parent2">
              <img className="frame-child15" alt="" src="/rectangle-27.svg" />
              <div className="div22">양배추</div>
            </div>
            <button className="vector-parent3">
              <img className="frame-child16" alt="" src="/rectangle-27.svg" />
              <div className="div23">브로콜리</div>
            </button>
          </div>
        </div>
        <div className="frame-parent4">
          <button className="vector-parent4">
            <img className="frame-child17" alt="" src="/rectangle-20.svg" />
            <div className="div24">요거트</div>
          </button>
          <button className="vector-parent5">
            <img className="frame-child18" alt="" src="/rectangle-23.svg" />
            <div className="div25">우유</div>
          </button>
          <button className="vector-parent6">
            <img className="frame-child19" alt="" src="/rectangle-27.svg" />
            <div className="div26">다진 마늘</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundFrame;
