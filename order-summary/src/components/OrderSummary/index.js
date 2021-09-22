import React from "react";

import { OrderSummaryBanner } from "../OrderSummary/OrderSummaryBanner";
import { OrderSummaryDetails } from "../OrderSummary/OrderSummaryDetails";
import { OrderSummaryCard } from "../OrderSummary/OrderSummaryCard";
import { OrderSummaryTitle } from "../OrderSummary/OrderSummaryTitle";
import { OrderSummaryCostSection } from "../OrderSummary/OrderSummaryCostSection";
import { OrderSummaryMusicIcon } from "../OrderSummary/OrderSummaryMusicIcon";
import { OrderSummaryRate } from "./OrderSummaryRate";
import { OrderSummaryChangeLink } from "../OrderSummary/OrderSummaryChangeLink";
import { OrderSummaryButtonsSection } from "../OrderSummary/OrderSummaryButtonsSection";
import { OrderSummaryPaymentButton } from "../OrderSummary/OrderSummaryPaymentButton";
import { OrderSummaryCancelButton } from "../OrderSummary/OrderSummaryCancelButton";

export const OrderSummary = (props) => {
  return (
    <OrderSummaryCard>
      <OrderSummaryBanner></OrderSummaryBanner>
      <OrderSummaryDetails>
        
        <OrderSummaryTitle></OrderSummaryTitle>
        
        <OrderSummaryCostSection>
          <OrderSummaryMusicIcon></OrderSummaryMusicIcon>
          <OrderSummaryRate></OrderSummaryRate>
          <OrderSummaryChangeLink></OrderSummaryChangeLink>
        </OrderSummaryCostSection>
        
        <OrderSummaryButtonsSection>
          <OrderSummaryPaymentButton></OrderSummaryPaymentButton>
          <OrderSummaryCancelButton></OrderSummaryCancelButton>
        </OrderSummaryButtonsSection>
        
      </OrderSummaryDetails>
    </OrderSummaryCard>
  );
};
