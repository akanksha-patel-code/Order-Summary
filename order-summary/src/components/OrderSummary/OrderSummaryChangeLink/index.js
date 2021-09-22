import React from "react";

export const OrderSummaryChangeLink = (props) => {
  return (
    <a id="OrderSummaryRate" href="default.asp" target="_blank">
      {props.children}
      change
    </a>
  );
};
