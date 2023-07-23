import React, { useState, useEffect } from "react";
import axios from "axios";

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
        <div key={transactions.id} style={{ border: "3px solid black" }}>
          <div>{transactions?.id}</div>
          <div>{transactions?.category}</div>
          <div>{transactions?.date}</div>
          <div>{transactions?.description}</div>
          <div>{transactions?.amount}</div>
        </div>
      ))}
    </div>
  );
}

export default Data;
