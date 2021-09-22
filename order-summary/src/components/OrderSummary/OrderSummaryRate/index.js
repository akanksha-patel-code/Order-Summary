import React from "react";

export const OrderSummaryRate = (props) => {
  return (
    <div id="OrderSummaryChangeLink">
      {props.children}
      <div>Annual Plan</div>
      <div>$59.99/year</div>
    </div>
  );
};
