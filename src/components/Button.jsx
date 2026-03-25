// import { useState, useEffect } from "react";

export function Button({ show, setShow, color }) {

  

  return (
    <>
      <button
        onClick={() => setShow(!show)}
        style={{
          width: "100px",
          height: "50px",
          margin: "auto",
          backgroundColor: color,
        }}
      >
        <p>{show == true ? "Hide Item" : "Show Item"}</p>
      </button>
    </>
  );
}
