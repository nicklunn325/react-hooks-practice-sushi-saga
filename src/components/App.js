import { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [index, setIndex] = useState(0);
  const [plates, setPlates] = useState([]);
  const [wallet, setWallet] = useState(100);
  function fetchSushis() {
    fetch(API)
      .then((res) => res.json())
      .then((sushisData) => setSushis(sushisData));
  }

  useEffect(fetchSushis, []);

  const fourSushis = sushis.slice(index, index + 4);
  return (
    <div className="app">
      <SushiContainer
        wallet={wallet}
        setWallet={setWallet}
        setPlates={setPlates}
        sushisLength={sushis.length}
        setIndex={setIndex}
        sushis={fourSushis}
      />
      <Table wallet={wallet} plates={plates} />
    </div>
  );
}

export default App;
