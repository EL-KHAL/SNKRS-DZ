import React from "react";

import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import hamburger from "../images/icon-menu.svg";
import iconClose from "../images/icon-close.svg";
import iconDelete from "../images/icon-delete.svg";
import thumbnail1 from "../images/image-product-1-thumbnail.jpg";

const Navbar = ({ isFilled, setIsFilled, cartItems, setCartItems }) => {
  const mobileMenu = (e) => {
    if (e.target.className === "open-menu") {
      document.querySelector("ul").classList.add("active");
      document.querySelector("body").classList.add("mobileNav");
    }
    if (e.target.className === "close-menu") {
      document.querySelector("ul").classList.remove("active");
      document.querySelector("body").classList.remove("mobileNav");
    }
  };

  const showCart = () => {
    document.querySelector(".cart").classList.toggle("active");
  };

  const calcTotal = () => {
    const price = 8500;
    const noOfItems = cartItems;
    const total = price * noOfItems;

    return total;
  };

  const deleteItems = () => {
    setIsFilled(false);
    setCartItems(0);
  };

  return (
    <nav>
      <div className="start">
        <img
          onClick={mobileMenu}
          className="open-menu"
          src={hamburger}
          alt="icon-open"
        />
        <img className="icon-logo" src={logo} alt="icon-logo" />
        <ul>
          <img
            onClick={mobileMenu}
            className="close-menu"
            src={iconClose}
            alt="icon-close"
          />
          <li>
            <a href="#collections"> collections </a>
          </li>
          <li>
            <a href="#men"> men </a>
          </li>
          <li>
            <a href="#about"> about </a>
          </li>
          <li>
            <a href="#contact"> contact </a>
          </li>
        </ul>
      </div>
      <div className="end">
        <img
          className="icon-cart"
          onClick={showCart}
          src={cart}
          alt="icon-cart"
        />
        <span className="number-of-items">
          {cartItems === 0 ? (
            <h1 style={{ display: "none" }}> {cartItems} </h1>
          ) : (
            <h1> {cartItems} </h1>
          )}
        </span>
        <img className="avatar" src={avatar} alt="img-avatar" />
      </div>
      <div className="cart">
        {isFilled === false ? (
          <div>
            <h3> cart </h3>
            <h1
              style={{
                color: "hsl(219, 9%, 45%)",
                fontSize: 18,
                transform: "translate(20px, 60px)",
              }}
            >
              Your cart is empty ya khali
            </h1>
          </div>
        ) : (
          <div>
            <h3> cart </h3>
            <div className="items">
              <img className="thumbnail" src={thumbnail1} alt="thumbnail1" />
              <div className="cart-details">
                <p> Jordan 1 Retro ... </p>
                <p>
                  DA 8500 .00 x {cartItems}
                  <span>
                    DA {calcTotal()}
                    .00
                  </span>
                </p>
              </div>
              <img
                onClick={deleteItems}
                className="icon-delete"
                src={iconDelete}
                alt="icon-delete"
              />
            </div>
            <button type="button"> checkout </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
