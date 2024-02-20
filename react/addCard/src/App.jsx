import { Form } from "./components/Form";
import { Card } from "./components/Card";
import { useState } from "react";

function App(props) {
  const [cardData, setCardData] = useState([]);
  
  const saveCardData = (newCardData) => {
    setCardData([...cardData, newCardData]);
  };

  console.log(cardData, "desde app");

  return (
    <main>
      <Form saveHandler={saveCardData} />

      {cardData.map((card, idx) => {
        return <Card key={idx} cardData={card} />;
      })}
    </main>
  );
}

export default App;
