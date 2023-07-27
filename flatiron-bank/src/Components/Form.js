import React, {  useState } from "react";    
import axios from "axios";

function Form() {
  const [formData, setFormData] = useState({
    category: '',
    date: '',
    description: '',
    amount: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios //axios acts similar to fetch
      .post("http://localhost:3000/transactions", {formData}) //Data is posted to the json server
      .then((res) => console.log(res))
      .catch ((error) => console.log(error))
  }

  return (
    <form
      id="form"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        border: "5px solid black",
        width: "100%",
        height: "100px",
        borderRadius: "10px",
        fontSize: "20px",
      }}
      onSubmit={handleSubmit}
    >
      <div id="category">
        <label>category</label>
        <input
          type="text" 
          value={formData.category}
          onChange={(e) =>
            setFormData({  category: e.target.value })
          }
          placeholder="Input Category"
          required
        />
      </div>
      <div id="date">
        <label>date</label>
        <input
          type="date"
          onChange={(e) => setFormData({ ...formData, date: e.target.value  })}
          required
        />
      </div>
      <div id="description">
        <label>description</label>
        <input
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          placeholder="Input Descripton "
          required
        />
      </div>
      <div id="amount">
        <label>amount</label>
        <input
          type="number"
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          placeholder="Input Amount"
          required
        />
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  );
}

export default Form;
