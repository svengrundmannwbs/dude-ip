import React from "react";
import dude from "../assets/dude.png";

// Hovering text over Bubble
function Dude({ dudeText }) {
  return (
    <div className="dude">
      <div className="dudeText">{dudeText}</div>
      <img src={dude} />
    </div>
  );
}

export default Dude;
