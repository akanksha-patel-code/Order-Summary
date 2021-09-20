import React from "react";

export const OrderSummaryTitle = (props) => {
  return (
    <>
    {props.children}
      <div id="OrderSummaryTitle">Order Summary</div>
      <p id="OrderSummaryInfo">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
    </>
  );
};
