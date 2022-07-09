import React from "react";
import LightBox from "./LightBox";
import InfoMain from "./InfoMain";

const Main = ({ addItems, items, isFilled }) => {
  return (
    <main>
      <LightBox />
      <InfoMain addItems={addItems} items={items} isFilled={isFilled} />
    </main>
  );
};

export default Main;
