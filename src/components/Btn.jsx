import React from "react";
import "../stylesheets/Btn.css"

function Button({text, isClicButton, handleClick}) {
  return (
    <button className={isClicButton ? "counter__container--clickBtn" : "counter__container--restartBtn"} onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button;