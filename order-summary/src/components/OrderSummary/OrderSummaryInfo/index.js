import React from "react";

export const OrderSummaryInfo = (props) => {
  return (

      <div id="OrderSummaryInfo">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
        {props.children}
      </div>
  
  );
};
