import React from "react";
import { ReactComponent as Dollar } from "../../images/icon-dollar.svg";

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
      <Dollar className="dollar" />
    </div>
  );
}

export default Bill;
