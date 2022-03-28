import React from "react";

function MoreButton({ setIndex, sushisLength }) {
  return (
    <button
      onClick={() => {
        setIndex((prevState) => {
          if (prevState >= sushisLength - 4) {
            return 0;
          } else {
            return prevState + 4;
          }
        });
      }}
    >
      More sushi!
    </button>
  );
}

export default MoreButton;
