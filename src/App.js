import React, { useState } from "react";
import ExpenceList from "./Componets/ExpenceList";
import ExpenceForms from "./Componets/ExpenceForms";
import alert from "./Componets/alert";
import "./App.css";
import uuid from "uuid/v4";

const initialExpeneces = [
  { id: uuid(), charge: "rent", amount: 16000 },
  { id: uuid(), charge: "car payment", amount: 400 },
  { id: uuid(), charge: "credit card bill", amount: 1200 }
];
console.log(initialExpeneces);

function App() {
  const [expenecs, setExpences] = useState(initialExpeneces);
  console.log(expenecs);

  return (
    <div className="App">
      <alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenceForms />
        <ExpenceList expenecs={expenecs} />
      </main>
      <h1>
        total spending:{" "}
        <span className="total">
          ${" "}
          {expenecs.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </div>
  );
}

export default App;
