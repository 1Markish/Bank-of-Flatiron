import React from "react";

function Form() {
  return (
    <form>
      <div>
        <label>category</label>
        <input type="text" value={Text} />
      </div>
      <div>
        <label>date</label>
        <input type="date" value={Date}/>
      </div>
      <div>
        <label>description</label>
        <input type="text" value={Text} />
        <button>SUBMIT</button>
      </div>
    </form>
  );
}

export default Form;
