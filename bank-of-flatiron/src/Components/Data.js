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

  return <h1>{transactions[0]?.category}</h1>;
}

export default Data;
