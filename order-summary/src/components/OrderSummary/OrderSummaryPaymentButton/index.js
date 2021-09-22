import React from 'react'

export const OrderSummaryPaymentButton = (props) => {
    return (
        <button id = "OrderSummaryPaymentButton">
            {props.children}
            Proceed to Payment
        </button>
    )
}
