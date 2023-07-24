import React from "react";

function Trans({ id, category, date, description, amount }) {
  return (
    <>
    <div style={{ border: "3px solid black" }}>
      <div>{id}</div>
      <div>{category}</div>
      <div>{date}</div>
      <div>{description}</div>
      <div>{amount}</div>
    </div>
     <div style={{ border: "3px solid black" }}>
     <div>id</div>
     <div>category</div>
     <div>date</div>
     <div>description</div>
     <div>amount</div>
   </div>
   </>
  );
}

export default Trans;
