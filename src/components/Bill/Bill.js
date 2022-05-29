import React from "react";

function Bill(props) {
  const { bill, setBill } = props;

  return (
    <>
      <h2>Bill</h2>
      <input value={bill} onChange={(e) => setBill(e.target.value)} />
    </>
  );
}

export default Bill;
