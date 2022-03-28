import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({
  wallet,
  setWallet,
  setPlates,
  sushis,
  setIndex,
  sushisLength,
}) {
  const renderSushi = sushis.map((sushi) => (
    <Sushi
      wallet={wallet}
      setWallet={setWallet}
      setPlates={setPlates}
      sushi={sushi}
      key={sushi.id}
    />
  ));
  return (
    <div className="belt">
      {renderSushi}
      <MoreButton sushisLength={sushisLength} setIndex={setIndex} />
    </div>
  );
}

export default SushiContainer;
