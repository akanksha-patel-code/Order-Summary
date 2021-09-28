import React from "react";

export const OrderSummaryChangeLink = (props) => {
  return (
    <a id="OrderSummaryChangeLink" href="default.asp" target="_blank">
      {props.children}
      Change
    </a>
  );
};
