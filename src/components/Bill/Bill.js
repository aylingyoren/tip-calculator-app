import React from "react";

function Bill(props) {
  const { bill, setBill } = props;

  return (
    <div className="bill">
      <h3 className="h3-header calc-header">Bill</h3>
      <input
        className="input"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
}

export default Bill;
