import { useState } from "react";

function Sushi({ wallet, setWallet, sushi, setPlates }) {
  const { img_url, name, price } = sushi;
  const [showImage, setShowImage] = useState(true);
  function handleClick() {
    if (showImage && wallet >= price) {
      setShowImage(!showImage);
      setPlates((prevState) => [...prevState, sushi]);
      setWallet((prevState) => prevState - price);
    }
    if (price > wallet) {
      alert("You don't have enough money!");
    }
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {showImage ? <img src={img_url} alt={name} width="100%" /> : null}
      </div>
      <h4 className="sushi-details">
        {name} - $ {price}
      </h4>
    </div>
  );
}

export default Sushi;
