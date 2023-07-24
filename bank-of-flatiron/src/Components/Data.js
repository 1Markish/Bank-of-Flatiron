import React, { useState, useEffect } from "react";
import axios from "axios";
import Trans from "./Trans";

function Data() {
  const [transactions, setTransactions] = useState([]);

  async function Main() {
    const { data } = await axios.get("http://localhost:3000/transactions");
    setTransactions(data);
  }

  useEffect(() => {
    Main();
  }, []);

  return (
    <div>
      {transactions.map((transactions) => (
        <Trans
          key={transactions.id}
          id={transactions.id}
          category={transactions.category}
          date={transactions.date}
          description={transactions.description}
          amount={transactions.amount}
        />
      ))}
    </div>
  );
}

export default Data;
