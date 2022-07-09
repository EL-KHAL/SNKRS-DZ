import React, { useState } from "react";
import Navbar from "./Navbar";
import Main from "./Main";

const App = () => {
  const [items, setItems] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  const [isFilled, setIsFilled] = useState(false);

  const addItems = (e) => {
    if (e.target.className === "add-items") {
      setItems(items + 1);
    } else if (e.target.className === "minus-items" && items !== 0) {
      setItems(items - 1);
    } else if (e.target.className === "add-to-cart" && items !== 0) {
      setCartItems(items);
      setIsFilled(true);
      setItems(0);
    }
  };

  return (
    <>
      <Navbar
        addItems={addItems}
        items={items}
        cartItems={cartItems}
        setCartItems={setCartItems}
        isFilled={isFilled}
        setIsFilled={setIsFilled}
      />{" "}
      <Main addItems={addItems} items={items} isFilled={isFilled} />{" "}
    </>
  );
};

export default App;
