import React from "react";
import cart from "../images/icon-cart-2.svg";
import iconAdd from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";

const InfoMain = ({ addItems, items }) => {
  return (
    <>
      <div className="info">
        <h4>SNKRS VoL °01</h4>
        <h1 className="heading"> Zarga Ya KhaLi </h1>
        <p className="paragraph">
        A modern-day twist on the classic black/royal’s, the Jordan 1 Retro High Alternate Black Royal is an insta-classic for any fan of the AJ1s. Coming in game royal, black and summit white., these Jordan 1s sport royal blue and white upper with black accents.
        </p>
        <div className="pricing">
          <h1>8500 DA</h1> <h3>1 7000 DA </h3>
        </div>
        <div className="btns-main">
          <div className="item-number">
            <button type="button">
              <img
                onClick={addItems}
                className="minus-items"
                src={iconMinus}
                alt="icon-minus"
              />
            </button>
            <p>{items}</p>
            <button type="button">
              <img
                onClick={addItems}
                className="add-items"
                src={iconAdd}
                alt="icon-minus"
              />
            </button>
          </div>
          <div className="cart-btn">
            <button onClick={addItems} className="add-to-cart" type="button">
              <img src={cart} alt="" />
              <p>Add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoMain;
