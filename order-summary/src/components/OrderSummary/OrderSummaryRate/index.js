import React from "react";

export const OrderSummaryRate = (props) => {
  return (
    <div id="OrderSummaryRate">
      {props.children}
      <div id="Plan">Annual Plan</div>
      <div id="Amount">$59.99/year</div>
    </div>
  );
};
