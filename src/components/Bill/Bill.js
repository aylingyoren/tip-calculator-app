import React from "react";
import Dollar from "../../images/icon-dollar.svg";

function Bill(props) {
  const { bill, setBill } = props;

  if (!bill) setBill(0)

  return (
    <div className="bill">
      <h3 className="h3-header calc-header">Bill</h3>
      <input
        className="input"
        value={bill}
        placeholder="0"
        onChange={(e) => setBill(parseFloat(e.target.value))}
      />
      <img src={Dollar} alt="dollar sign" className="dollar" />
    </div>
  );
}

export default Bill;
